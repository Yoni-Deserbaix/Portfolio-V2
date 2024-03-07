import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillsData } from "./DataSkills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-full pt-28  pb-14  max-lg:pt-14 max-lg:pb-0 bg-[whitesmoke]"
    >
      <div
        className="flex text-start container mt-4 w-4/5 m-auto"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        <h3 className="text-xl font-extrabold">COMPÉTENCES</h3>
      </div>
      <div className="flex flex-col  items-center w-full mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        <div className="flex flex-col gap-7 items-center max-lg:ml-0">
          <h5
            className="text-xl font-bold aos-init"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            FRONTEND
          </h5>
          <div className="rounded-2xl w-[800px] py-4 px-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] max-xl:w-full">
            <div className="flex flex-wrap gap-8 justify-evenly">
              {skillsData
                .filter((language) => language.category === "Frontend")
                .map((language, index) => (
                  <div
                    key={index}
                    className="aos-init"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay={index * 100}
                  >
                    <Image
                      className="hover:scale-110"
                      key={language.id}
                      src={language.image}
                      height={60}
                      width={60}
                      alt={`${language.name}`}
                    />
                    <p className="text-center font-bold text-base pt-2 lg:text-base md:text-xs sm:text-xs">
                      {language.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center max-lg:mr-0">
          <h4 className="text-xl font-bold aos-init"
          data-aos="fade-up"
          data-aos-duration="500">BACKEND</h4>
          <div className="rounded-2xl w-[800px] py-4 px-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] max-xl:w-full">
            <div className="flex flex-wrap gap-8 justify-evenly">
              {skillsData
                .filter((language) => language.category === "Backend")
                .map((language, index) => (
                  <div
                    key={index}
                    className="aos-init"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay={index * 100}
                  >
                    {" "}
                    <Image
                      className="hover:scale-110"
                      key={language.id}
                      src={language.image}
                      height="60"
                      width={60}
                      alt={`${language.name}`}
                    />{" "}
                    <p className="text-center font-bold text-base pt-2 lg:text-base md:text-xs sm:text-xs">
                      {language.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center  max-lg:ml-0 pb-10">
          <h4 className="text-xl font-bold aos-init"
          data-aos="fade-up"
          data-aos-duration="500">OUTILS</h4>
          <div className="rounded-2xl w-[800px] py-4 px-10  shadow-[0_0_10px_rgba(0,0,0,0.1)] max-xl:w-full">
            <div className="flex flex-wrap gap-8 justify-evenly">
              {skillsData
                .filter((language) => language.category === "Tools")
                .map((language, index) => (
                  <div
                    key={index}
                    className="aos-init"
                    data-aos="fade-up"
                    data-aos-duration="300"
                    data-aos-delay={index * 100}
                  >
                    <Image
                      className="hover:scale-110"
                      key={language.id}
                      src={language.image}
                      height="60"
                      width={60}
                      alt={`${language.name}`}
                    />{" "}
                    <p className="text-center font-bold text-base pt-2 lg:text-base md:text-xs sm:text-xs">
                      {language.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
