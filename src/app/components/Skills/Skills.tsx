import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { skillsData } from "./DataSkills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-full pt-20 pb-14 max-lg:pt-14 max-lg:pb-0 bg-[whitesmoke]"
    >
      <div className="flex justify-center items-center">
        <h5 className="text-xl font-extrabold">
          COMPÉTENCES
        </h5>
      </div>
      <div className="flex flex-col  items-center w-full mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        <div className="flex flex-col gap-7 items-center max-lg:ml-0">
          <h5 className="text-xl font-bold">FRONTEND</h5>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {skillsData
                .filter((language) => language.category === "Frontend")
                .map((language) => (
                  <Image
                    key={language.id}
                    src={language.image}
                    height="60"
                    width={60}
                    alt={`${language.name}`}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center max-lg:mr-0">
          <h4 className="text-xl font-bold">BACKEND</h4>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {skillsData
                .filter((language) => language.category === "Backend")
                .map((language) => (
                  <Image
                    key={language.id}
                    src={language.image}
                    height="60"
                    width={60}
                    alt={`${language.name}`}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 items-center  max-lg:ml-0">
          <h4 className="text-xl font-bold">Outils</h4>
          <div className="rounded-2xl w-[800px] py-2.5 px-10 bg-gradient-to-b from-secondary to-third shadow-xl max-xl:w-full">
            <div className="flex gap-8 w-full max-[400px]:gap-4">
              {skillsData
                .filter((language) => language.category === "Tools")
                .map((language) => (
                  <Image
                    key={language.id}
                    src={language.image}
                    height="60"
                    width={60}
                    alt={`${language.name}`}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
