import React from "react";
import DirectorsData from "./DirectorsData";

const Directors = () => {
  return (
    <div className="text-container py-8">
      <h2 className="text-center text-5xl font-bold text-white">
        Meet the directors
      </h2>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {DirectorsData.map((data, index) => (
          <div
            className="flex flex-col items-center director-bg p-6"
            key={index}
          >
            <img src={data.img} alt={data.name} />
            <h3 className="mt-2 text-green-200">{data.name}</h3>
            <p className="text-white">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
