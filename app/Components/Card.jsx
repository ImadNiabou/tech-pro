"use client";
import Link from "next/link";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Card = ({ product }) => {
  return (
    <Link href={`/details/${product.slug}`}>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        className="relative rounded-xl shadow-md w-[320px] max-w-sm cursor-pointer hover:scale-105 transition-all duration-500 hover:shadow-2xl"
      >
        <div className="relative h-76  rounded-xl overflow-hidden aspect-ratio-1 ">
          <img src={product.image} />
        </div>

        <div className="p-4 space-y-2">
          <h1 className="text-purple font-semibold text-2xl">{product.name}</h1>
          <p className="text-xl text-gray-500">{product.description}</p>
          <br />
        </div>
        <div className="absolute bottom-0 right-0 p-2 rounded-br-xl bg-[#f5f3ff] shadow-md">
          <span className="text-purple text-lg">{product.price}$</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Card;
