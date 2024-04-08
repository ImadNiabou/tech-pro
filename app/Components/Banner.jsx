"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "../../public/logo-2.svg";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      <div>
        <section>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8  xl:gap-0 lg:py-16 lg:grid-cols-12"
          >
            <img
              className="absolute lg:h-[720px] md:h-[570px] w-full rounded-3xl"
              height={300}
              src="banner-10.jpg"
              alt="mockup"
            />
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="relative md:p-24 mr-auto place-self-center lg:col-span-7"
            >
              <div>
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-200">
                <span className="text-purple">Discover</span> Tech Wonders at
              </h1>
              <Image src={Logo} alt="logo" width={300} className="mb-10" />
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
                From innovative gadgets to cutting-edge tech, TechPro is your
                gateway to the future of technology. Explore Now or speak to our
                tech experts.
              </p>
              <Link
                href="/products"
                className="transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 bg-purple inline-flex items-center 
                justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 
                focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 
                hover:bg-white hover:text-purple mb-3"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/contact"
                className="transition ease-in-out delay-80  hover:-translate-y-1 hover:scale-95 duration-300 inline-flex items-center justify-center px-5 py-3 text-base text-white font-medium text-center hover:text-purple text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
              >
                Contact Sales
              </Link>
              </div>
            </motion.div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Banner;
