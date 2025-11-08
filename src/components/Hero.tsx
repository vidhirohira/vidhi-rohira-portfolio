import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grid3x3, ChevronDown } from 'lucide-react';
import { smoothScroll } from '@/lib/animations';
import portfolioData from '@/data/portfolio-data.json';

const Hero = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      {/* Rule of Thirds Grid Overlay */}
      <div className={`rule-of-thirds-grid ${showGrid ? 'active' : ''}`} aria-hidden="true" />

      <div className="container-custom px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left third - Main content aligned to rule of thirds */}
          <div className="md:col-span-2 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              {portfolioData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {portfolioData.personal.tagline}
            </p>
            <p className="text-lg text-foreground/80 max-w-2xl">
              {portfolioData.about.description}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => smoothScroll('projects')}
                size="lg"
                className="focus-visible-ring"
              >
                View My Work
              </Button>
              <Button
                onClick={() => smoothScroll('contact')}
                variant="outline"
                size="lg"
                className="focus-visible-ring"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right third - Grid toggle control */}
          <div className="flex justify-center md:justify-end">
            <div className="text-center space-y-4">
              <Button
                onClick={() => setShowGrid(!showGrid)}
                variant={showGrid ? 'default' : 'outline'}
                size="lg"
                className="focus-visible-ring"
                aria-pressed={showGrid}
              >
                <Grid3x3 className="mr-2 h-5 w-5" />
                {showGrid ? 'Hide' : 'Show'} Rule of Thirds
              </Button>
              <p className="text-sm text-muted-foreground max-w-xs">
                Toggle to see how the hero section follows the rule of thirds composition principle
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => smoothScroll('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce focus-visible-ring rounded-full"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
