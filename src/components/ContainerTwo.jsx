import React from "react";

const ContainerTwo = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className=" w-full containerTwo-bg p-4 relative">{children}</div>
      <img
        src="/public/bg-pattern-home-3.svg"
        className="hidden lg:block absolute bottom-0 right-10 sm:right-0 transform translate-x-1/2"
        alt="background-image"
      />
    </div>
  );
};

export default ContainerTwo;
