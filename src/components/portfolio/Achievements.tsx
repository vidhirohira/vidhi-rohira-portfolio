import { Card } from '@/components/ui/card';
import { Trophy, Award, Mountain, Music } from 'lucide-react';
import portfolioData from '@/data/portfolio-data.json';

const Achievements = () => {
  const getIcon = (title: string) => {
    if (title.toLowerCase().includes('trek') || title.toLowerCase().includes('mountain')) {
      return Mountain;
    }
    if (title.toLowerCase().includes('performance') || title.toLowerCase().includes('cultural')) {
      return Music;
    }
    if (title.toLowerCase().includes('rank') || title.toLowerCase().includes('top')) {
      return Award;
    }
    return Trophy;
  };

  return (
    <section id="achievements" className="section-padding bg-secondary/30" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition and accomplishments in competitive coding, hackathons, and extracurricular activities.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.achievements.map((achievement, index) => {
            const Icon = getIcon(achievement.title);
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1 leading-tight">
                      {achievement.title}
                    </h3>
                    <span className="text-xs text-primary font-medium">{achievement.year}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
