import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import GuiRequirements from '@/components/hci/GuiRequirements';
import VisualPrinciples from '@/components/hci/VisualPrinciples';
import RuleOfThirds from '@/components/hci/RuleOfThirds';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Skills from '@/components/portfolio/Skills';
import Achievements from '@/components/portfolio/Achievements';
import Leadership from '@/components/portfolio/Leadership';
import Contact from '@/components/Contact';
import A11yToggle from '@/components/A11yToggle';
import { observeElements } from '@/lib/animations';

const Index = () => {
  useEffect(() => {
    // Initialize intersection observer for scroll animations
    const cleanup = observeElements();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        
        {/* HCI Demonstrations Section */}
        <div id="hci">
          <GuiRequirements />
          <VisualPrinciples />
          <RuleOfThirds />
        </div>
        
        {/* Portfolio Content */}
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>
      
      <Footer />
      <A11yToggle />
    </div>
  );
};

export default Index;
