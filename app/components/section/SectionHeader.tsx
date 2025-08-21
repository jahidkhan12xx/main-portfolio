import React from "react";

type Props = {
  plainText: string;
  highLightText: string;
};

const SectionHeader = ({ plainText, highLightText }: Props) => {
  return (
    <h2 className="text-[22px] md:text-[35px] px-20 text-center">
      {plainText}{" "}
      <span className="highlight px-2 whitespace-nowrap">{highLightText}</span>
    </h2>
  );
};

export default SectionHeader;
