import React from "react";
import Image from "next/image";
import { skillsData } from "./DataSkills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative h-full pt-28 pb-14 max-lg:pt-14  max-md:py-24 bg-[whitesmoke]"
    >
      <div className="container mt-4 w-4/5 m-auto">
        <h3 className="text-xl font-extrabold">COMPÉTENCES</h3>
      </div>
      <div className="flex flex-col items-center w-full mt-20 gap-28 max-xl:gap-14 max-lg:mt-10">
        {["Frontend", "Backend", "Tools"].map((category, index) => (
          <div className="flex flex-col gap-7 items-center" key={index}>
            <h4 className="text-xl font-bold">{category}</h4>
            <div className="rounded-2xl w-[800px] py-4 px-10 shadow-[0_0_10px_rgba(0,0,0,0.1)] max-xl:w-full">
              <div className="flex flex-wrap gap-8 justify-evenly">
                {skillsData
                  .filter((language) => language.category === category)
                  .map((language, index) => (
                    <div key={index}>
                      <Image
                        className="hover:scale-110 transition duration-200"
                        src={language.image}
                        height={60}
                        width={60}
                        alt={language.name}
                      />
                      <p className="text-center font-bold text-base pt-2 lg:text-base md:text-xs sm:text-xs">
                        {language.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
