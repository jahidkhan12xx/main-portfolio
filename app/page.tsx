import React from "react";
import Navbar from "./components/Navbar";
import TopBackground from "./components/TopBackground";
import Section from "./components/Section";
import ThemeToggle from "./components/ThemeToggle";

const Home = () => {
  return (
    <div className="relative overflow-clip" id="home">
      <Section />
      <Navbar />
      <ThemeToggle />
      <TopBackground />
    </div>
  );
};

export default Home;
