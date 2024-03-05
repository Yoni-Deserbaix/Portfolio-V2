"use client";
import { useEffect, useState } from "react";
import { projectsData } from "./DataProject";
import { projectsNav } from "./DataProject";
import WorksItems from "./WorkItems";
import Projects from "./Projects";

type Project = {
  id: number;
  image: any;
  title: string;
  category: string;
  languages: string[];
  description: string;
  github: string;
  demo: string;
};

const Works = () => {
  const [item, setItem] = useState<{ name: string }>({ name: "Tout" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === "Tout") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    setItem({ name: e.currentTarget.textContent || "" });
    setActive(index);
  };

  return (
    <div>
      <div className="work-filters flex-wrap gap-x-[0.7rem] pb-6  flex items-center justify-center">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index
                  ? "active-work bg-[#767676] text-[whitesmoke] border-none"
                  : ""
              }  work-item cursor-pointer capitalize transition-all duration-[0.2s] border text-[#767676] mt-8 px-3 py-1 rounded-lg border-solid border-[rgba(0,0,0,0.4)] hover:bg-[#767676] hover:text-[whitesmoke] hover:border-none`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work-container grid-cols-[repeat(2,max-content)] gap-12 grid justify-center">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
