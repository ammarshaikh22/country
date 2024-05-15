import React from "react";

export const SrchHeader = ({ setFilter, setFilterRegion, dark }) => {

  return (
    <section className={dark ? "darkBox srch" : "srch"}>
      <div className="container">
        <div className="row">
          <div>
            <input
              placeholder="Search for a country...  🔍"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <div className="selection">
            <select onChange={(e) => setFilterRegion(e.target.value)}>
              <option>Filter by Region</option>
              <option value={"africa"}>Africa</option>
              <option value={"america"}>Americas</option>
              <option value={"asia"}>Asia</option>
              <option value={"europe"}>Europe</option>
              <option value={"oceania"}>Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
