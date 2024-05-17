import React from "react";

const Footer = () => {
  return (
    <div className="py-10 mb-10 text-container">
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 gap-4 sm:justify-between">
        {" "}
        {/* Changed justify-items-end to justify-between */}
        <div className="text-center sm:text-left">
          {" "}
          {/* Added text-left class to align content to the left */}
          <img src="/public/logo.svg" className="w-40 h-10" />
          <div className="pt-4 flex gap-6">
            <p className="text-white cursor-pointer hover-border-transition">
              Home
            </p>
            <p className="text-white cursor-pointer hover-border-transition">
              About
            </p>
          </div>
        </div>
        <div>
          <p className="custom-color-3">
            987 Hillcrest Lane Irvine,
            <br />
            CA California 92714
            <br /> Call Us : 949-833-7432
          </p>
        </div>
        <div className="text-center sm:text-right">
          {" "}
          {/* Added text-right class to align content to the right */}
          <p className="pt-4 text-white ">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
