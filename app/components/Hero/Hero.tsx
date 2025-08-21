import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline ">
          <span className="-ml-3">👋</span>
          Hello I'm Zahid Hassan Khan, I'm a{" "}
          <span className=" block text-[27px] highlight mt-2 md:inline md:text-[45px] md:mt-0">
            Fullstack Web Developer
          </span>
        </h1>
        <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">
          Turning ideas into interactive web experiences. I craft responsive
          websites and web apps using the latest web technologies, blending
          clean code with sleek design. Lifelong learner in the world of web
          development.
        </p>
        <a
          href="mailto:jahidkhan12xx@gmail.com"
          className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6 "
        >
          Let's Connect <img className="" src="/arrow_right_icon.svg" alt="" />
        </a>
      </div>
      <div>
        <Image
          src="/profile_light_purple.png"
          alt="profile"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10"
        />
        <Image
          src="/profile_dark_purple.png"
          alt="profile dark"
          width={372}
          height={430}
          className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10"
        />
        <Image
          src="/p4.png"
          alt="profile dark"
          width={350}
          height={350}
          className="hidden md:block min-w-[357px] h-[407px] z-10 mr-[7.7px] my-[6.5px]"
        />
      </div>
    </section>
  );
};

export default Hero;
