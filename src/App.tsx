import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import HowIThink from "./components/HowIThink";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RecruiterView from "./components/RecruiterView";

export default function App() {
  return (
    <div className="min-h-screen bg-base-bg text-base-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <HowIThink />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <RecruiterView />
    </div>
  );
}
