import Image from "next/image";
import { Flex } from "@chakra-ui/layout";
import { Social } from "@/utils/social";
import Link from "next/link";
import { useState } from "react";
const About = () => {
  const [SeeAll, setSeeAll] = useState(false);
  return (
    <div
      id="about"
      className="flex flex-col justify-evenly items-center mt-[20px] flex-1  p-4 min-h-screen"
    >
      <section className=" w-2/3 mt-4 p-4">
        <Image src="" alt="my photo" className="rounded-full" />
      </section>
      <section className="flex flex-col items-center justify-center mt-8  w-full ">
        <div className=" flex flex-1 gap-16">
          {Social.map((item, index) => {
            return (
              <Link
                className="flex flex-col justify-center items-center font-Dancing gap-4 active:text-teal-500 font-light tracking-widest hover:-translate-y-2 duration-300 hover:opacity-80 hover:shadow-gray-200 shadow-md rounded-xl"
                key={index}
                href={item.url}
                target="_blank"
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </section>
      <section className="flex items-center justify-center m-2">
        <div className="w-2/3 flex items-center justify-center p-2 ">
          <p className="text-center font-mont line-clamp-none tracking-wider">
            My name is Timothy Munene, and I am a full stack developer. With a
            passion for technology and a love for coding, I have dedicated
            myself to mastering the skills necessary to create cutting-edge web
            applications. Through my expertise in both front-end and back-end
            development, I am able to create seamless user experiences and
            scalable solutions. I am committed to staying up-to-date with the
            latest technologies and trends in the industry to provide my clients
            with the best possible solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
