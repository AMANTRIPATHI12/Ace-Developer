import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkwekyy");

  if (state.succeeded) {
    return (
      <section className="bg-gray-900 font-serif text-lime-400 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg border border-violet-600 text-center">
          <h2 className="text-2xl font-bold text-violet-400 mb-4">Thank You!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-900 font-serif text-lime-400 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg border border-violet-600">
        <h2 className="text-2xl font-bold mb-6 text-center text-violet-400">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Honeypot field */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="bg-gray-700 text-lime-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-gray-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            required
            placeholder="Your Message"
            rows="5"
            className="bg-gray-700 text-lime-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600 placeholder-gray-400"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          {/* Google reCAPTCHA */}
          <div className="g-recaptcha" data-sitekey="6LepVTUrAAAAAD9obqnOGbObOrjEVDglqACk-07R"></div>

          {/* Hidden field for Formspree to verify reCAPTCHA */}
          <input type="hidden" name="_captcha" value="true" />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-violet-600 hover:bg-violet-700 transition duration-300 text-white py-3 rounded-md font-semibold"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
