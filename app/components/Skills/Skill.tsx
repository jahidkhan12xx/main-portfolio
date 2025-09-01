import Image from "next/image";
import React from "react";

const Skill = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[48px]">
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
        className="object-contain"
      />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
