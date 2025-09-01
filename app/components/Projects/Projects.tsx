import React from "react";
import SectionContainer from "../section/SectionContainer";
import SectionHeader from "../section/SectionHeader";
import projects from "@/data/projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <div className="section-contents mx-6 md:mx-[64px]">
        <SectionHeader
          plainText="Some of my Works"
          highLightText="Best Works"
        />
        <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-11">
          {projects.map((item, index) => (
            <Project
              key={index}
              thumbnil={item.thumbnil}
              title={item.title}
              link={item.link}
              description={item.description}
              languageIcons={item.languageIcons}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;
