/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { OneCountryEff } from "./OneCountryEff";

export const Country = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const pathName = new URL(location.href).pathname;
  const segments = pathName.split("/");
  const countryName = segments[segments.length - 1];
  const CountryName = decodeURIComponent(countryName);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          `https://restcountries.com/v3.1/name/${CountryName}`
        );
        let json = await res.json();
        setData({
          name: json[0].name.common,
          src: json[0].flags.png,
          capital: json[0].capital[0],
          population: json[0].population,
          region: json[0].region,
          subregion: json[0].subregion,
          tld: json[0].tld[0],
          currencies: json[0].currencies,
          languages: json[0].languages,
          borders: json[0].borders,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    getData();
  }, [CountryName]);

  return (
    <>
      <Header />
      {loading ? (
        <OneCountryEff />
      ) : (
        <section key={CountryName} className="main">
          <div className="container">
            <div className="btn">
              <button onClick={() => history.back()}>Back</button>
            </div>
            <div className="row">
              <div className="img">
                <img src={data.src} alt="flag" />
              </div>
              <div className="txt">
                <h1>{data.name}</h1>
                <h4>{data.capital}</h4>
                <p>
                  <span>Population: </span>
                  <span>{data.population}</span>
                </p>
                <p>
                  <span>Region: </span>
                  <span>{data.region}</span>
                </p>
                <p>
                  <span>Sub Region: </span>
                  <span>{data.subregion}</span>
                </p>
                <p>
                  <span>Capital: </span>
                  <span>{data.capital}</span>
                </p>
                <p>
                  <span>Top Level Domain: </span>
                  <span>{data.tld}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
