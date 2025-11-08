import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import portfolioData from '@/data/portfolio-data.json';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my work in reinforcement learning, web development, and HCI.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:shadow-xl transition-all hover:-translate-y-1">
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline focus-visible-ring rounded"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
