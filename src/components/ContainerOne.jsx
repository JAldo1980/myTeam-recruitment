import React from "react";

const ContainerOne = ({ children }) => {
  return (
    <>
      <div className="w-full containerOne-bg p-4">{children}</div>
    </>
  );
};

export default ContainerOne;
