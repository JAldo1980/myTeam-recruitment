import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContainerOne from "./components/ContainerOne";
import ContainerTwo from "./components/ContainerTwo";
import ContainerThree from "./components/ContainerThree";
import ContainerFour from "./components/ContainerFour";
import ContainerFive from "./components/ContainerFive";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import InfoComponent from "./components/InfoComponent";
import TestimonialComponent from "./components/TestimonialComponent";
import CTAComponent from "./components/CTAComponent";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <ContainerOne>
        <Nav />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </ContainerOne>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ContainerTwo>
                <InfoComponent />
              </ContainerTwo>
              <ContainerThree>
                <TestimonialComponent />
              </ContainerThree>
              <ContainerFour>
                <CTAComponent />
              </ContainerFour>
              <ContainerFive>
                <Footer />
              </ContainerFive>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
