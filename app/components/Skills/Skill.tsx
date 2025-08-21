import React from "react";

const Skill = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[48px]">
      <img src={icon} alt={name} />
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default Skill;
