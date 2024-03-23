import React from "react";
import Image from "next/image";
import { ProjectType } from "./DataProject";

type WorksItemsProps = {
  item: ProjectType;
};

export default function WorksItems({ item }: WorksItemsProps) {
  return (
    <div
      className="work-card border p-8 rounded-2xl border-solid border-[rgba(0,0,0,0.1)] max-xl:p-4 "
      key={item.id}
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <Image
        src={item.image}
        width={1000}
        height={1000}
        alt="Screenshot of project"
        className="work-img  w-[280px] mb-5 rounded-2xl hover:scale-105 transition duration-300"
      />

      <h3 className="work-title mb-2.5 font-extrabold text-xl">{item.title}</h3>
      <div className="item-languages flex flex-wrap mt-4">
        {item.languages.map((language, index) => (
          <span
            key={index}
            className="language-tag bg-[whitesmoke] text-[#767676] text-xs uppercase transition-all duration-[0.2s] mr-2 px-3 py-1 rounded-lg hover:bg-[#767676] hover:text-[whitesmoke]"
          >
            {language}
          </span>
        ))}
      </div>
      <div className="work-description grid max-w-[280px] px-0 py-3">
        {item.description}
      </div>
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="work-button text-[#767676] inline-flex items-center gap-x-1 pr-5"
        >
          <i className="bx bxl-github work-button-icon text-base transition-[0.4s] translate-x-1 pr-1"></i>
          Code
        </a>
      )}
      {item.demo && (
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="work-button text-[#767676] inline-flex items-center gap-x-1 pr-5"
        >
          <i className="bx bx-right-arrow-alt work-button-icon text-base transition-[0.4s] translate-x-1"></i>
          Demo
        </a>
      )}
    </div>
  );
}
