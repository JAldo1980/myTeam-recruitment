import React from "react";

const Contact = () => {
  return (
    <div className="text-container pb-60">
      <div>
        <h1 className="text-4xl livvic-semibold sm:text-start sm:text-7xl text-white font-bold">
          Contact
        </h1>
        <p className="mt-4 text-white">
          Get in contact with us today to discuss how we can help you find the
          best talent!
          <br></br>
          <span className="custom-color text-2xl font-bold">Ask us about:</span>
        </p>
      </div>

      <div className="grid mt-8 sm:grid-cols-2">
        {/*  */}
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex gap-6 items-center">
            <img src="icon-person.svg" alt="person-icon" />
            <div className="flex flex-col">
              <h4 className="custom-color font-bold text-xl">
                The quality of our talent network
              </h4>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src="icon-cog.svg" alt="cog-icon" />
            <div className="flex flex-col">
              <h4 className="custom-color font-bold text-xl">
                Usage &amp; implementation of our software
              </h4>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <img src="icon-chart.svg" alt="chart-icon" />
            <div className="flex flex-col">
              <h4 className="custom-color font-bold text-xl">
                How we help drive innovation
              </h4>
            </div>
          </div>
        </div>
        {/*  */}
        <div className=" p-8 rounded-lg shadow-lg w-full max-w-md mt-10">
          <form action="#" method="post" className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border border-gray-300 rounded-lg p-3 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg p-3 text-lg"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="border border-gray-300 rounded-lg p-3 text-lg"
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="border border-gray-300 rounded-lg p-3 text-lg"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border border-gray-300 rounded-lg p-3 text-lg h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-100 hover:bg-pink-200 text-black font-semibold py-3 rounded-lg"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
