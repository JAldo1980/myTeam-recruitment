import React from "react";

const InfoComponent = () => {
  return (
    <>
      <div>
        <div className="text-container grid grid-cols-2 py-20 gap-12">
          <div>
            <h2 className="text-5xl text-white font-bold z-10">
              Build &amp; manage distributed teams like no one else.
            </h2>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-6 items-center">
              <img src="/public/icon-person.svg" alt="person-icon" />
              <div className="flex flex-col">
                <h4 className="custom-color font-bold text-xl">
                  Experienced Individuals
                </h4>
                <p className="mt-4 text-white">
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <img src="/public/icon-cog.svg" alt="cog-icon" />
              <div className="flex flex-col">
                <h4 className="custom-color font-bold text-xl">
                  Easy to Implement
                </h4>
                <p className="mt-4 text-white">
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <img src="/public/icon-chart.svg" alt="chart-icon" />
              <div className="flex flex-col">
                <h4 className="custom-color font-bold text-xl">
                  Enhanced Productivity
                </h4>
                <p className="mt-4 text-white">
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoComponent;
