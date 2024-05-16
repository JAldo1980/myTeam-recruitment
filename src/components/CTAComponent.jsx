import React from "react";
import Button from "./Button";

const CTAComponent = () => {
  return (
    <div className="py-10 text-container">
      <div className="flex justify-around">
        <h3 className="text-5xl font-bold">Ready to get started?</h3>
        <Button
          type="button"
          className="border-black rounded-full border-2 py-2 px-6 text-black cursor-pointer"
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default CTAComponent;
