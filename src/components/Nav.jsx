import React from "react";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="text-container pt-20 pb-20 flex justify-between">
      <div className="flex justify-between gap-10 items-center">
        <img src="/public/logo.svg" className="w-40 h-10" alt="" />
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <h4 className="text-white cursor-pointer hover-border-transition">
            Home
          </h4>
          <h4 className="text-white cursor-pointer hover-border-transition">
            About
          </h4>
        </div>
      </div>
      <div className="hidden sm:block">
        <Button
          type="button"
          className="border rounded-full border-2 py-2 px-6 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
          label="Contact Us"
        />
      </div>
    </div>
  );
};

export default Nav;
