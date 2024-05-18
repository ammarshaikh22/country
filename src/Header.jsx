import React, { useState } from "react";
export const Header = ({ setFilter, setFilterRegion }) => {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem("setDarkMode")));
  if (dark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  return (
    <header>
      <section className={dark ? "dark-Header header" : "header"}>
        <div className="container">
          <div className="row">
            <h1>Where are you in world</h1>
            <div>
              <span onClick={() => {
                setDark(!dark)
                localStorage.setItem('setDarkMode', !dark)
              }}>
                {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
