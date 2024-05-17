import React from "react";

const ContainerThree = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="w-full containerThree-bg p-4 relative">{children}</div>
      <img
        src="/bg-pattern-home-5.svg"
        className="hidden lg:block absolute top-0 left-0 transform -translate-x-1/2"
        alt="background-image"
      />
      <img
        src="/bg-pattern-home-5.svg"
        className="hidden lg:block absolute bottom-0 right-0 transform translate-x-1/2"
        alt="background-image"
      />
    </div>
  );
};

export default ContainerThree;
