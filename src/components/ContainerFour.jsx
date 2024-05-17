import React from "react";

const ContainerFour = ({ children }) => {
  return (
    <div className="relative">
      <div className="w-full containerFour-bg p-10 relative">{children}</div>
      <img
        src="/public/bg-pattern-home-6-about-5.svg"
        className="hidden lg:block absolute top-1/3 left-0 sm:right-1/4"
        alt="background-image"
      />
    </div>
  );
};

export default ContainerFour;
