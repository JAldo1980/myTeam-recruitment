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
import ContainerSix from "./components/ContainerSix";
import Directors from "./components/Directors";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
              <ContainerFour>
                <CTAComponent />
              </ContainerFour>
              <ContainerFive>
                <Footer />
              </ContainerFive>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <ContainerOne>
                <Nav />
                <About />
              </ContainerOne>
              <ContainerSix>
                <Directors />
              </ContainerSix>

              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContainerOne>
                <Nav />
              </ContainerOne>

              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
