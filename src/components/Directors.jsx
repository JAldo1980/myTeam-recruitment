import React from "react";
import DirectorsData from "./DirectorsData";

const Directors = () => {
  return (
    <div className="text-container py-12">
      <h2 className="text-center text-5xl font-bold text-white">
        Meet the directors
      </h2>
      <div className="mt-12 grid grid-cols-2 gap-12 sm:grid-cols-3 sm:gap-12">
        {DirectorsData.map((data, index) => (
          <div
            className="flex flex-col items-center director-bg p-6 relative"
            key={index}
          >
            <img src={data.img} alt={data.name} />
            <h3 className="mt-2 text-green-200">{data.name}</h3>
            <p className="text-white">{data.title}</p>
            <div className="absolute -bottom-8 bg-red-400 rounded-full py-2 px-4 text-3xl font-bold cursor-pointer hover:bg-green-200 duration-300">
              +
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
