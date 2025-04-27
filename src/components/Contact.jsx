import React from "react";

const Contact = () => {
  return (
    <section className="bg-gray-900 font-serif text-lime-400 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg border border-violet-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-400">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-gray-700 text-lime-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-gray-400"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="bg-gray-700 text-lime-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-gray-400"
            placeholder="Your Email"
          />
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 transition duration-300 text-white py-3 rounded-md font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
