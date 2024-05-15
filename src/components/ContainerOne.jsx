import React from "react";

const ContainerOne = ({ children }) => {
  return (
    <>
      <div className="w-full containerOne-bg p-4 relative">
        {children}
        <img
          src="/public/bg-pattern-home-2.svg"
          className="absolute bottom-0 right-1/4"
          alt="background-image"
        />
      </div>
    </>
  );
};

export default ContainerOne;
