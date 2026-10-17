import Header from './components/Header';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Philosophy from './components/Philosophy';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <main className="bg-bg-main text-text-primary">
      <CustomCursor />
      <Header />
      <Hero />
      <TechStrip />
      <About />
      <Projects />
      <Philosophy />
      <Skills />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
