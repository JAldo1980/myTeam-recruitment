import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const CTAComponent = () => {
  return (
    <div className="py-10 text-container">
      <div className="flex flex-col text-center sm:flex-row justify-around">
        <h3 className="text-3xl sm:text-5xl font-bold">
          Ready to get started?
        </h3>

        <NavLink
          to="/about"
          className="text-white cursor-pointer hover-border-transition"
        >
          <Button
            type="button"
            className="mt-4 sm:mt-0 border-black rounded-full border-2 py-2 px-6 text-black cursor-pointer hover:text-white hover:bg-black duration-300"
            label="Contact Us"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default CTAComponent;
