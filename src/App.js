import React from "react";
import { useMediaQuery } from "react-responsive";
import Donations from "./components/Donations";
import Heading from "./components/Heading";
import Projects from "./components/Projects";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 360px)" });
  return (
    <>
      {/* Здесь можно сам текст менять по квери */}
      <section className="project-section">
        <Heading black>{`${
          isMobile
            ? "Те кому необходимо помочь"
            : "Проекты, которым необходимо помочь"
        }`}</Heading>
        <Projects />
      </section>
      <section className="donation-section">
        <Heading>О пожертвованиях</Heading>
        <Donations />
      </section>
    </>
  );
}

export default App;
