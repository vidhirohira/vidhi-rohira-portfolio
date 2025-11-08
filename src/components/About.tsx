import { GraduationCap, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import portfolioData from '@/data/portfolio-data.json';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {portfolioData.about.description}
            </p>
            
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <GraduationCap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Education</h3>
                  <p className="text-foreground font-medium">
                    {portfolioData.about.education.degree}
                  </p>
                  <p className="text-muted-foreground">
                    {portfolioData.about.education.institution}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {portfolioData.about.education.duration}
                  </p>
                  <p className="text-primary font-semibold mt-2">
                    CGPA: {portfolioData.about.education.cgpa}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Location</h3>
                  <p className="text-foreground">{portfolioData.personal.location}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl bg-gradient-to-br from-secondary via-card to-secondary/50 border-2 border-primary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-48 h-48 rounded-full bg-primary/10 border-4 border-primary/30 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">VR</span>
                </div>
                <p className="text-sm text-muted-foreground">Profile photo placeholder</p>
                <p className="text-xs text-muted-foreground mt-1">Replace with your photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
