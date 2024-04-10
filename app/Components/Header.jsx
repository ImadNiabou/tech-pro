"use client";
import { React, useState} from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import useCartStore from "../../cartStore";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);
  return (
    <div className="p-3 border-b-2 border-[#f5f3ff]">
      <div className="max-w-7xl mx-auto flex justify-between">
        {/* logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="img logo" width={200} />
        </Link>
        <ul className="hidden md:flex gap-8 flex gap-10 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-purple transition ease-in-out delay-80 duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-purple transition ease-in-out delay-80 duration-300"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              href="/#questions"
              className="hover:text-purple transition ease-in-out delay-80 duration-300"
            >
              Questions
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-purple transition ease-in-out delay-80 duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
              {/* responsive menu */}
      <div className="md:hidden ">
        <h2
          className="flex gap-1 text-gray-700 text-[18px] font-medium cursor-pointer hover:bg-purple my-3
            hover:text-white px-3 pb-2 py-1 rounded-md transition-all duration-500 ease-in-out"
       onClick={()=>setToggle(!toggle)} ><HiOutlineMenu />

          {!toggle ? 
            <IoMdArrowDropdown className="mt-1" /> : 
            <IoMdArrowDropup className="mt-1" />}
        </h2>
        {toggle ? (
                  <ul className="flex flex flex-col  gap-10 items-center">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-purple transition ease-in-out delay-80 duration-300"
                    >
                      Home{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="hover:text-purple transition ease-in-out delay-80 duration-300"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="hover:text-purple transition ease-in-out delay-80 duration-300"
                    >
                      Store
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-purple transition ease-in-out delay-80 duration-300"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
        ) : null}
      </div>
        {/* icons */}

        <div className="flex gap-2 items-center relative">
          <Link href="/cart" className="flex items-center">
            <div className="flex">
              <FaCartShopping
                className="text-[24px] text-gray-900 hover:text-purple justify-center
          items.-center cursor-pointer hover:scale-110 transition-transform duration-300 "
              />
              <div className="bg-red-600 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
                {totalItems}
              </div>
            </div>
          </Link>
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
