import React from "react";

import skills from "@/data/skills.json";
import SectionContainer from "../section/SectionContainer";
import SectionHeader from "../section/SectionHeader";
import Skill from "./Skill";
import Image from "next/image";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <div className="section-contents mx-[22px] md:max-w-screen-lg">
        <SectionHeader plainText="This is my" highLightText="Tech Stack" />
        <div className="card w-full px-[33px] py-[27px] flex flex-wrap flex-col md:flex-row justify-center items-center gap-[19px] md:gap-[33px]">
          {skills.map((skill, id) => (
            <Skill key={id} name={skill.name} icon={skill.icon_ref} />
          ))}
        </div>
      </div>
      <>
        <Image
          src="/tech_stack_grid_dark.svg"
          alt="skills_bg"
          height={373}
          width={569}
          className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[39px]"
        />
        <Image
          src="/tech_stack_grid.svg"
          alt="skills_bg_lighy"
          height={373}
          width={569}
          className="hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]"
        />
      </>
    </SectionContainer>
  );
};

export default Skills;
