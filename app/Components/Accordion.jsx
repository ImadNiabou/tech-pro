"use client";
import * as React from "react";
import { Accordion } from "flowbite-react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

export default function AccordionExpandDefault() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      className="max-w-7xl mx-auto mt-18"
    >
      <div className="max-w-7xl mx-auto">
      <Accordion>
      <Accordion.Panel>
        <Accordion.Title className="text-purple font-bold text-xl p-8 outline-none">What is TechPro?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 px-8 py-4">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400 px-8 py-4">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-purple"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="p-8">Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 px-8 py-4">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400 px-8 py-4">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-purple hover:underline dark:text-cyan-500 px-8 py-4">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className="p-8">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400 px-8 py-4">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400 px-8 py-4">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400 px-8 py-4">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-purple hover:underline dark:text-purple">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-purple"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
      </div>
    </motion.div>
  );
}
