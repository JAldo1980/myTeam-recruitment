import React from "react";

const Hero = () => {
  return (
    <div
      className="text-container grid 
      grid-cols-1 gap-6 text-center pb-60
      sm:grid-cols-2 sm:pb-40 sm:gap-12"
    >
      <div>
        <h1 className="text-4xl livvic-semibold sm:text-start sm:text-7xl text-white font-bold">
          Find the best <span className="custom-color">talent</span>
        </h1>
      </div>
      <div className="grid" style={{ display: "grid", alignContent: "center" }}>
        <p className="text-white">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  );
};

export default Hero;
