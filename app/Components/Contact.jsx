"use client";
import React, { useState } from "react";
import { createContact } from "../../sanity/contact-utils";
import toast, { Toaster } from 'react-hot-toast';
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

function Contact() {
  const notify = () => toast;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state to true
    setIsLoading(true);

    try {
      // Call the createContact function to add contact information to Sanity
      await createContact(name, email, issue);

      // Reset the form inputs
      setName("");
      setEmail("");
      setIssue("");
      toast.success("Issue sent");
    } catch (error) {
      console.error("Error submitting form:", error.message);
      toast.error("Error submitting form");
    } finally {
      // Set loading state back to false after submission
      setIsLoading(false);
    }
  };

  return (
    <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"} className="max-w-2xl mx-auto mt-[60px] p-6 bg-white ">
      <h1 className="text-4xl font-bold text-purple mb-10 text-center">
        Contact Us
      </h1>
      <div className="shadow-lg p-14 rounded-xl">
       
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:bordpurple"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple"
              required
            />
          </div>

          {/* Issue Input */}
          <div className="mb-6">
            <label
              htmlFor="issue"
              className="block text-gray-700 font-bold mb-2"
            >
              Describe Your Issue:
            </label>
            <textarea
              id="issue"
              name="issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              placeholder="Enter your issue"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple resize-none"
              rows="4"
              required
            />
          </div>

          {/* Submit Button with Loading State */}
          <button onClick={notify}
            type="submit"
            className="w-full transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 text-lg w-full  font-semibold text-center bg-purple
          text-white py-2 px-4 rounded-lg hover:text-purple hover:bg-white border border-purple"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
            <Toaster/>
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
