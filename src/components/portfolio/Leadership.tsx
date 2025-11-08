import { Card } from '@/components/ui/card';
import { Users, Calendar, TrendingUp } from 'lucide-react';
import portfolioData from '@/data/portfolio-data.json';

const Leadership = () => {
  return (
    <section id="leadership" className="section-padding bg-background" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Leadership & Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Active involvement in student organizations and community building initiatives.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolioData.leadership.map((role, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{role.role}</h3>
                  <p className="text-base text-primary font-medium mb-1">{role.organization}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{role.duration}</span>
                  </div>
                </div>
              </div>

              <p className="text-foreground/90 mb-4 leading-relaxed">
                {role.description}
              </p>

              <div className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-border">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-sm font-semibold text-foreground">
                  Impact: <span className="text-primary">{role.impact}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
