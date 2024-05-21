import React from "react";

const About = () => {
  return (
    <>
      <div
        className="text-container grid 
      grid-cols-1 gap-6 text-center pb-60
      sm:grid-cols-2 sm:pb-60 sm:gap-12"
      >
        <div>
          <h1 className="text-4xl livvic-semibold sm:text-start sm:text-7xl text-white font-bold">
            About
          </h1>
        </div>
        <div
          className="grid"
          style={{ display: "grid", alignContent: "center" }}
        >
          <p className="text-white text-justify">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We’ll bring those teams to you.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
