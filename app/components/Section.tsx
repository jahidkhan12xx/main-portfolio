import React from "react";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";

type Props = {};

const Section = (props: Props) => {
  return (
    <main className="flex flex-col gap-[142px] w-full md:max-w-screen-lg pt-[236px] md:pt-60 mx-auto">
      <Hero />
      <Skills />
    </main>
  );
};

export default Section;
