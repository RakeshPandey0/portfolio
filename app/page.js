import Hero from "./_components/Hero/page";
import About from "./_components/About/page";
import Project from "./_components/Project/page";
import Skills from "./_components/Skills/page";
import Education_Experience from "./_components/Education_Experience/page";
import Research from "./_components/Research/page";
import Events from "./_components/Events/page";
import Certifications from "./_components/Certifications/page";
import Contact from "./_components/Contact/page";
export default function Home() {
  return (
    <main>
      <section id="hero" className="min-h-screen scroll-mt-28"><Hero /></section>
      <section id="about" className="min-h-screen scroll-mt-28"><About /></section>
      <section id="project" className="min-h-screen scroll-mt-28"><Project /></section>
      <section id="skills" className="min-h-screen scroll-mt-28"><Skills /></section>
      <section id="education" className="min-h-screen scroll-mt-28"><Education_Experience /></section>
      <section id="research" className="min-h-screen scroll-mt-28"><Research /></section>
      <section id="events" className="min-h-screen scroll-mt-28"><Events /></section>
      <section id="certifications" className="min-h-screen scroll-mt-28"><Certifications /></section>
      <section id="contact" className="min-h-screen scroll-mt-28"><Contact /></section>
    </main>
  );
}
