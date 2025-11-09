import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { AboutSection, EducationSection, ProjectsSection, SkillsSection, ContactSection } from './components/Sections';

function App() {
  return (
    <div className="font-inter text-neutral-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
