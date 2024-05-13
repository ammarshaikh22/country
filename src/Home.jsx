import React from "react";
import AllData from "./AllData.jsx";

export const Home = ({ filter }) => {
  return (
    <section className="boxes">
      <div className="container">
        <div className="row">
          <AllData filter={filter} />
        </div>
      </div>
    </section>
  );
};
