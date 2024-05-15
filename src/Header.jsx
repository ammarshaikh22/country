import React, { useState } from "react";
export const Header = ({ setFilter, setFilterRegion }) => {
  const [dark, setDark] = useState(false);
  if (dark) {
    document.body.classList.add("dark");
    document.querySelectorAll(".box").forEach((e) => {
      e.classList.add("darkBox");
    })
  } else {
    document.body.classList.remove("dark");
    document.querySelectorAll(".box").forEach((e) => {
      e.classList.remove("darkBox");
    });
  }
  return (
    <header>
      <section className={dark ? "dark-Header header" : "header"}>
        <div className="container">
          <div className="row">
            <h1>Where are you in world</h1>
            <div>
              <span onClick={() => setDark(!dark)}>
                {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
