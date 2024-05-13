import React, { useState } from "react";
export const Header = ({ setFilter}) => {
  const [dark, setDark] = useState(false);
  if(dark){
    document.body.classList.add("dark")
    document.querySelectorAll('.box').forEach((e) => {
      e.classList.add('darkBox')
    })
  }else{
    document.body.classList.remove("dark")
    document.querySelectorAll('.box').forEach((e) => {
      e.classList.remove('darkBox')
    })
  }
  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div>
          <input
              placeholder="Search"
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <h1>Where are you in world</h1>
          <div className="srch">
            <span onClick={() => setDark(!dark)}>{dark ? "Light Mode" : "Dark Mode"}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
