import React, { useState } from "react";
import { Home } from "./Home";
import { Header } from "./Header";
import { SrchHeader } from "./SrchHeader";
const App = () => {
  const [filter, setFilter] = useState("");
  let [filterRegion, setFilterRegion] = useState('')
  return (
    <>
      <Header setFilter={setFilter} setFilterRegion={setFilterRegion} />
      <SrchHeader setFilter={setFilter} setFilterRegion={setFilterRegion} />
      <Home filter={filter} filterRegion={filterRegion} />
    </>
  );
};

export default App;
