import React from "react";

const TestimonialComponent = () => {
  return (
    <div className="py-20 text-container">
      <div className="text-center">
        <h3 className="text-3xl sm:text-5xl text-white font-bold">
          Delivering real results for top companies. Some of our{" "}
          <span className="custom-color-2">success stories.</span>
        </h3>
      </div>
      <div className="pt-20 flex flex-col sm:flex-row gap-12">
        <div className="flex flex-col text-center items-center">
          <p className="text-white ">
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <h5 className="mt-4 custom-color-2 font-bold">Kady Baker</h5>
          <p className="text-white italic">Product manager at Bookmark</p>
          <img
            src="/avatar-kady.jpg"
            className="mt-4 w-14 rounded-full border-white border-2"
            alt="person-icon"
          />
        </div>
        {/* SECOND PERSON */}
        <div className="flex flex-col text-center items-center">
          <p className="text-white">
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <h5 className="mt-4 custom-color-2 font-bold">Aiysha Reese</h5>
          <p className="text-white italic">Founder of Manage</p>
          <img
            src="/avatar-aiysha.jpg"
            className="mt-4 w-14 rounded-full border-white border-2"
            alt="person-icon"
          />
        </div>
        <div className="flex flex-col text-center items-center">
          {/* THIRD PERSON */}
          <p className="text-white">
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <h5 className="mt-4 custom-color-2 font-bold">Arthur Clarke</h5>
          <p className="text-white italic">Co-founder of MyPhysio</p>
          <img
            src="/avatar-arthur.jpg"
            className="mt-4 w-14 rounded-full border-white border-2"
            alt="person-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
