import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Code2, Wrench, Layers, Lightbulb } from 'lucide-react';
import portfolioData from '@/data/portfolio-data.json';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: portfolioData.skills.languages
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: portfolioData.skills.tools
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: portfolioData.skills.frameworks
    },
    {
      title: 'Concepts',
      icon: Lightbulb,
      skills: portfolioData.skills.concepts
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical skills and expertise across various domains of software development.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
