import Image from "next/image";
import React from "react";

const TopBackground = () => {
  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative">
          <div className="circle-icon top-0 left-[171px] md:top-28 md:left-72">
            <Image src="js.svg" alt="rocket" width={23} height={23} />
          </div>
          <div className="circle-icon top-[162px] -left-3 md:top-72 md:left-0">
            <Image src="mongo.svg" alt="rocket" width={30} height={30} />
          </div>
          <div className="circle-icon top-60 left-[149px] md:top-[500px] md:left-72">
            <Image src="github_icon.svg" alt="rocket" width={23} height={23} />
          </div>
          <div className="hidden  md:circle-icon md:top-[400px] md:left-[700px]">
            <Image src="postgresql.svg" alt="rocket" width={23} height={23} />
          </div>
          <div className="hidden  md:circle-icon md:top-[100px] md:left-[600px]">
            <Image src="sql.svg" alt="rocket" width={23} height={23} />
          </div>
        </div>
      </div>
      <img
        src="/top_highlight.svg"
        alt="Top dark mode background highlight"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2"
      />
      <img
        src="/top_highlight_mobile.svg"
        alt="Top dark mode background highlight mobile"
        width={429}
        height={465}
        className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2"
      />
      <div
        style={{ backgroundImage: "url('/top_bg_light.svg')" }}
        className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] hidden dark:hidden md:block"
      ></div>
      <div
        style={{ backgroundImage: "url('/top_bg_mobile_light.svg')" }}
        className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] dark:hidden md:hidden"
      ></div>
      <div
        style={{ backgroundImage: "url('/top_bg_dark.svg')" }}
        className="absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] hidden  md:dark:block"
      ></div>
      <div
        style={{ backgroundImage: "url('/top_bg_mobile_dark.svg')" }}
        className="absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] hidden dark:block dark:md:hidden"
      ></div>
    </>
  );
};

export default TopBackground;
