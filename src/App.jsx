import React from "react";
import ContainerOne from "./components/ContainerOne";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <>
      <ContainerOne>
        <Nav />
        <Hero />
      </ContainerOne>
    </>
  );
}

export default App;
