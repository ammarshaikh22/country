import React from "react";
import AllData from "./AllData.jsx";

export const Home = ({ filter, filterRegion }) => {
  return (
    <section className="boxes">
      <div className="container">
        <div className="row">
          <AllData filter={filter} filterRegion={filterRegion}/>
        </div>
      </div>
    </section>
  );
};
