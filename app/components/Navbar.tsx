"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setActiveSection("home");
  }, []);

  const scrollToButton = useCallback((secID: string) => {
    const section = document.getElementById(secID);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);
  return (
    <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-background card-shadow p-3 md:hidden rounded "
      >
        {!isOpen ? (
          <HiMenuAlt2 className="text-3xl text-black dark:text-white" />
        ) : (
          <IoClose className="text-3xl text-black dark:text-white" />
        )}
      </button>
      <nav
        className={cn(
          "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out ",
          {
            "opacity-100": isOpen,
            "opacity-0 md:opacity-100": !isOpen,
          }
        )}
      >
        <ul className="flex  flex-col justify-center items-end md:flex-row cursor-pointer md:gap-3  duration-300 ease-in-out">
          <li>
            <div
              onClick={() => {
                setActiveSection("home");
                scrollToButton("home");
                setIsOpen(false);
              }}
              className={cn(
                "rounded p-1 md:px-2 duration-300 ease-in-out hover:bg-primary hover:text-white ",
                {
                  "bg-primary text-white": activeSection === "home",
                }
              )}
            >
              Home
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setActiveSection("skills");
                scrollToButton("skills");
                setIsOpen(false);
              }}
              className={cn(
                "rounded p-1 md:px-2 duration-300 ease-in-out hover:bg-primary hover:text-white ",
                {
                  "bg-primary text-white": activeSection === "skills",
                }
              )}
            >
              Skills
            </div>
          </li>
          <li>
            <div
              onClick={() => {
                setActiveSection("projects");
                scrollToButton("projects");
                setIsOpen(false);
              }}
              className={cn(
                "rounded p-1 hover:bg-primary hover:text-white  md:px-2 duration-300 ease-in-out ",
                {
                  "bg-primary text-white": activeSection === "projects",
                }
              )}
            >
              Projects
            </div>
          </li>

          <li>
            <div
              onClick={() => {
                setActiveSection("contact-me");
                scrollToButton("contact-me");
                setIsOpen(false);
              }}
              className={cn(
                "rounded p-1 md:px-2 hover:bg-primary hover:text-white duration-300 ease-in-out  whitespace-nowrap",
                {
                  "bg-primary text-white": activeSection === "contact-me",
                }
              )}
            >
              Contact Me
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
