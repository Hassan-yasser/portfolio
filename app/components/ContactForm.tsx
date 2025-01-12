import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <form>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          placeholder="Your message"
          name="message"
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold text-white rounded-md uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-300">
        Send a message
      </button>
      <button className="px-6 ms-5 mb-10 py-3 text-sm font-bold rounded-md text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-300">
        <Link           href="/Hasan-Alhossiny-CV.pdf"
          target="_blank"
          download={`My_CV`}>Download</Link>
      </button>
    </form>
  );
};

export default ContactForm;