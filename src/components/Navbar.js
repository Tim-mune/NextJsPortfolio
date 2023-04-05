import { motion } from "framer-motion";
import { AiOutlineBars } from "react-icons/ai";
import { NavLinks } from "@/utils/Links";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";
const Navbar = () => {
  return (
    <div
      id="home"
      className="flex justify-between items-center p-2 sticky top-0 bg-gray-900 bg-opacity-95"
    >
      <section>
        <Link href="#home" className="font-Dancing underline text-base">
          Timmy nesh
        </Link>
      </section>
      <section className="flex justify-center items-center">
        <div className="mx-4 sm:hidden ss:hidden xs:hidden md:block lg:block xl:block ">
          {NavLinks.map((item, index) => {
            return (
              <Link
                className="font-mont hover:opacity-80 hover:-translate-y-1 mx-4 tracking-widest"
                key={index}
                href={item.to}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden  xs:block sm:block ss:block xl:hidden lg:hidden md:hidden">
          <button>
            <AiOutlineBars className="h-[30px] w-[30px] hover:rotate-180 hover:scale-95" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
