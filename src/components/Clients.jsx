import React from "react";
import "/src/App.css"; //

const Clients = () => {
  return (
    <>
      <div className="py-12">
        <h3 className="text-center text-5xl font-bold text-white items-center">
          Some of our clients
        </h3>
        <div className="py-12 flex flex-wrap gap-8 sm:flex-row justify-between text-container">
          <div className="w-24 image-container">
            <img src="logo-the-verge.png" alt="The Verge" />
          </div>
          <div className="w-24 image-container">
            <img src="logo-jakarta-post.png" alt="The Jakarta Post" />
          </div>
          <div className="w-24 image-container">
            <img src="logo-the-guardian.png" alt="The Guardian" />
          </div>
          <div className="w-24 image-container">
            <img src="logo-tech-radar.png" alt="TechRadar" />
          </div>
          <div className="w-24 image-container">
            <img src="logo-gadgets-now.png" alt="Gadgets Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
