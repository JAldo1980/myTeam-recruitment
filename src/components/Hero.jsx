import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-container grid grid-cols-2 pb-40">
        <div>
          <h1 className="text-8xl text-white z-10">
            Find the best <span className="custom-color">talent</span>
          </h1>
        </div>
        <div className="grid" style={{ display: "grid", alignContent: "end" }}>
          <p className="text-white">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
