import Hero from "./_components/Hero/page";
import About from "./_components/About/page";
import Project from "./_components/Project/page";
import Skills from "./_components/Skills/page";
import Education_Experience from "./_components/Education_Experience/page";
import Research from "./_components/Research/page"
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Skills />
      <Education_Experience />
      <Research />
    </>
  );
}
