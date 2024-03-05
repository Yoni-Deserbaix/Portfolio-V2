"use client"
import { useEffect, useState } from "react";
import { projectsData } from "./DataProject";
import { projectsNav } from "./DataProject";
import WorksItems from "./WorkItems";

type Project = {
  id: number;
  image: string;
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
      <div className="work-filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""}  work-item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work-container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
