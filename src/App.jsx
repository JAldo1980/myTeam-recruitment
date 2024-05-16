import React from "react";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import InfoComponent from "./components/InfoComponent";
import TestimonialComponent from "./components/TestimonialComponent";
import "./App.css";

function App() {
  return (
    <>
      <ContainerOne>
        <Nav />
        <Hero />
      </ContainerOne>
      <ContainerTwo>
        <InfoComponent />
      </ContainerTwo>
      <ContainerThree>
        <TestimonialComponent />
      </ContainerThree>
    </>
  );
}

export default App;
