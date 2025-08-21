import React from "react";

import skills from "@/data/skills.json";
import SectionContainer from "../section/SectionContainer";
import SectionHeader from "../section/SectionHeader";
import Skill from "./Skill";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mx-[22px] ">
        <SectionHeader plainText="This is my" highLightText="Tech Stack" />
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon_ref} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;
