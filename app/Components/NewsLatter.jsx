"use client"
import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const NewsLatter = () => {
  return (
    <div>
      <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
      className="2xl:mx-auto 2xl:container mx-4 py-10">
        <div className="w-full relative flex items-center justify-center">
          <div className="bg-[#0B0827] rounded-xl bg-opacity-80  lg:py-16 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
            <h1 className="text-4xl font-semibold leading-9 text-white text-center">
              Don’t miss out!
            </h1>
            <p className="text-base leading-normal text-center text-white mt-6">
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in <br />a week on every friday so subscribe to get
              latest news and updates.
            </p>
            <div className="sm:border border-white rounded-xl flex-col sm:flex-row flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
              <input
                className="border border-white sm:border-transparent rounded-xl text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white"
                placeholder="Email Address"
              />
              <button className="focus:outline-none focus:ring-offset-2 text-white hover:text-gray-400 transition ease-in-out delay-80 rounded-xl focus:ring border border-white sm:border-transparent w-full sm:w-auto py-4 px-6 hover:bg-opacity-75">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLatter;
