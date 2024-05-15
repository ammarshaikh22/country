import { useEffect, useState } from "react";
import { Box } from "./Box";
import { AllCountryEff } from "./AllCountryEff";
const AllData = ({ filter, filterRegion }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let res = await fetch("https://restcountries.com/v3.1/all");
      let json = await res.json();
      setData(json);
    };
    getData()
  }, []);

  const filteredData = data.filter((item) =>
    item.name.common.toLowerCase().includes(filter.toLowerCase())
  ).filter((item) => item.region.toLowerCase().includes(filterRegion.toLowerCase()));

  if (filteredData.length === 0) {
    return <AllCountryEff />;
  }

  return  filteredData.map((curr, index) => { 
    return (
      <Box
        key={index}
        name={curr.name.common}
        src={curr.flags.png}
        capital={curr.capital}
      />
    );
  });
};

export default AllData;
