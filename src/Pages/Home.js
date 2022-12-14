import React from "react";
import { Banner } from "../components/Banner";
// import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
