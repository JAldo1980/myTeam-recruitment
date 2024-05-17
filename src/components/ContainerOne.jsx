import React from "react";

const ContainerOne = ({ children }) => {
  return (
    <div className="w-full containerOne-bg p-4 relative">
      <img
        src="/public/bg-pattern-home-1.svg"
        className="hidden lg:block absolute top-1/3 left-0 transform -translate-x-1/2"
        alt="background-image"
      />
      <img
        src="/public/bg-pattern-home-2.svg"
        className="absolute bottom-0 right-16 sm:right-1/4"
        alt="background-image"
      />
      {children}
    </div>
  );
};

export default ContainerOne;
