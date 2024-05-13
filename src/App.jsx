import React, { useState } from "react";
import { Home } from "./Home";
import { Header } from "./Header";
const App = () => {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Header setFilter={setFilter} />
      <Home filter={filter} />
    </>
  );
};

export default App;
