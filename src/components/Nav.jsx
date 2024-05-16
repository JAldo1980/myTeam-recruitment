import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="text-container pt-20 pb-20 flex justify-between">
      <div className=" flex justify-between gap-10 items-center">
        <img src="/public/logo.svg" className="w-40 h-10" alt="" />
        <div className="flex items-center gap-4">
          <h4 className="text-white cursor-pointer">Home</h4>
          <h4 className="text-white cursor-pointer">About</h4>
        </div>
      </div>
      <div>
        <Button
          type="button"
          className="border rounded-full border-2 py-2 px-6 text-white cursor-pointer"
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default Nav;
