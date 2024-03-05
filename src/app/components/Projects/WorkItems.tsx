import React from "react";
import Image from "next/image";
type Project = {
  id: number;
  image: any;
  title: string;
  languages: string[];
  description: string;
  github: string;
  demo: string;
};

type WorksItemsProps = {
  item: Project;
};

const WorksItems: React.FC<WorksItemsProps> = ({ item }) => {
  return (
    <div
      className="work-card"
      key={item.id}
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <Image src={item.image} alt="" className="work-img" />

      <h3 className="work-title">{item.title}</h3>
      <div className="item-languages">
        {item.languages.map((language, index) => (
          <span key={index} className="language-tag">
            {language}
          </span>
        ))}
      </div>
      <div className="work-description">{item.description}</div>
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className="work-button"
        >
          <i className="bx bxl-github work-button-icon"></i>
          Code
        </a>
      )}
      {item.demo && (
        <a
          href={item.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="work-button"
        >
          <i className="bx bx-right-arrow-alt work-button-icon"></i>Demo
        </a>
      )}
    </div>
  );
};

export default WorksItems;
