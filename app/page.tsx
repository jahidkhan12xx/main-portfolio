import React from "react";
import Navbar from "./components/Navbar";
import TopBackground from "./components/TopBackground";
import Section from "./components/Section";

const Home = () => {
  return (
    <div className="relative overflow-clip" id="home">
      <Section />

      <Navbar />
      <TopBackground />
    </div>
  );
};

export default Home;
