"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import taiwindlogo from "../assets//languages/tailwindcss-color.svg"
export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative h-full pt-20 pb-14 max-lg:pt-14 max-lg:pb-0 bg-[whitesmoke]"
    >
      <div className="flex justify-center items-center">
        <h5 className="text-4xl h-auto font-bold max-lg:text-3xl">
          COMPÉTENCES
        </h5>
      </div>
      <div className="flex flex-col  items-center w-full mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        <div className="flex flex-col gap-7 items-center ml-96 max-lg:ml-0">
          <h5 className="text-xl font-bold">FRONTEND</h5>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {/* {data.languages.frontend.map((language) => (
                <Languages
                  key={language.id}
                  name={language.name}
                  src={language.src}
                />
              ))} */}
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                height="60"
                width={60}
                alt="javascript logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                height="60"
                width={60}
                alt="typescript logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                height="60"
                width={60}
                alt="react logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                height="60"
                width={60}
                alt="nextjs logo"
              />
              <Image
                src={taiwindlogo.src}
                height="60"
                width={60}
                alt="tailwindcss logo"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                height="60"
                width={60}
                alt="sass logo"
              />{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center mr-96 max-lg:mr-0">
          <h4 className="text-xl font-bold">BACKEND</h4>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {/* {data.languages.backend.map((language) => (
                <Languages
                  key={language.id}
                  name={language.name}
                  src={language.src}
                />
              ))} */}
              <img
                src="https://cdn.simpleicons.org/nodedotjs/339933"
                height="60"
                width={60}
                alt="nodejs logo"
              />
              <img
                src="https://skillicons.dev/icons?i=express"
                height="60"
                width={60}
                alt="express logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                height="60"
                width={60}
                alt="cplusplus logo"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center ml-96 max-lg:ml-0">
          <h4 className="text-xl font-bold">Outils</h4>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {/* {data.languages.database.map((language) => (
                <Languages
                  key={language.id}
                  name={language.name}
                  src={language.src}
                />
              ))} */}
              <img
                src="https://cdn.simpleicons.org/git/F05032"
                height="60"
                width={60}
                alt="git logo"
              />
              <img
                src="https://cdn.simpleicons.org/qt/41CD52"
                height="60"
                width={60}
                alt="qt logo"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                height="60"
                width={60}
                alt="linux logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
