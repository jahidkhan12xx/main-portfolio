import Image from "next/image";
import React from "react";

type Props = {
  thumbnil: string;
  title: string;
  link: {
    label: string;
    url: string;
  };
  description: string;
  languageIcons: string[];
};

const Project = ({
  thumbnil,
  title,
  link,
  languageIcons,
  description,
}: Props) => {
  return (
    <div className="card flex flex-col items-stretch w-full md:max-w-[490px] p-5 md:p-[18px] gap-[30px]">
      <Image
        src={thumbnil}
        alt={title}
        width={392}
        height={230}
        className="w-full h-[230px] object-cover"
      />
      <div className="flex flex-col gap-[11px]">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl md:text-[22px] ">{title}</h3>
          <a
            className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px] "
            href={link.url}
          >
            <span className="hidden md:block">{link.label}</span>
            <img className="block dark:hidden" src="link_arrow.svg" alt="" />
            <img
              className="hidden dark:block"
              src="link_arrow_dark.svg"
              alt=""
            />
          </a>
        </div>
        <p className="line-clamp-2 text-sm md:text-base">{description}</p>
        <div className="flex flex-row gap-[11px]">
          {languageIcons.map((icon, id) => (
            <img key={id} src={icon} alt={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
