import React from "react";

const Contact = () => {
  return (
    <div
      className="text-container grid 
      grid-cols-1 gap-6 pb-60
      sm:grid-cols-2 sm:pb-40 sm:gap-12"
    >
      <div>
        <h1 className="text-4xl livvic-semibold sm:text-start sm:text-7xl text-white font-bold">
          Contact
        </h1>
        <p className="mt-4 text-white">
          Get in contact with us today to discuss how we can help you find the
          best talent!
        </p>
      </div>

      <div className="grid">
        <div className=" p-8 rounded-lg shadow-lg w-full max-w-md">
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
