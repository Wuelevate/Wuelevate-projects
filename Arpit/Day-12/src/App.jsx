import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Component/home";
import Nav from "./Component/nav";
import Routing from "./utility/Routing";
const App = () => {
  return (
    <>
      <Nav />
      <Routing />
    </>
  );
};

export default App;
