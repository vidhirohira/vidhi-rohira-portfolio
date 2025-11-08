import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

const VisualPrinciples = () => {
  const [showAnnotations, setShowAnnotations] = useState(false);

  return (
    <section id="visual-principles" className="section-padding bg-background" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visual Design Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Effective visual design relies on fundamental principles. Toggle the inspector to see these principles applied in practice.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-4xl mx-auto mb-8 text-center">
          <Button
            onClick={() => setShowAnnotations(!showAnnotations)}
            size="lg"
            variant={showAnnotations ? 'default' : 'outline'}
            aria-pressed={showAnnotations}
          >
            {showAnnotations ? <EyeOff className="mr-2 h-5 w-5" /> : <Eye className="mr-2 h-5 w-5" />}
            {showAnnotations ? 'Hide' : 'Show'} Design Inspector
          </Button>
        </div>

        {/* Example Card with Annotations */}
        <div className="max-w-3xl mx-auto relative">
          <Card className="p-8 bg-card border-border relative overflow-visible">
            {/* Hierarchy Annotations */}
            {showAnnotations && (
              <>
                <div className="absolute -left-16 top-8 text-right">
                  <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    Hierarchy: H2
                  </span>
                  <div className="h-px w-12 bg-primary ml-auto mt-1" />
                </div>
                <div className="absolute -left-16 top-20 text-right">
                  <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    Typography: Bold
                  </span>
                  <div className="h-px w-12 bg-primary ml-auto mt-1" />
                </div>
              </>
            )}

            <h3 className="text-2xl font-bold text-foreground mb-4 relative">
              Design Principles in Action
            </h3>

            {showAnnotations && (
              <div className="absolute -left-16 top-32 text-right">
                <span className="inline-block bg-secondary text-foreground text-xs px-2 py-1 rounded">
                  Contrast: Text/BG
                </span>
                <div className="h-px w-12 bg-primary ml-auto mt-1" />
              </div>
            )}

            <p className="text-base text-muted-foreground mb-6 leading-relaxed relative">
              This example card demonstrates key visual design principles. Notice how elements are organized, 
              aligned, and styled to create a cohesive and accessible interface.
            </p>

            {/* Alignment Grid */}
            {showAnnotations && (
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" aria-hidden="true">
                <span className="absolute -left-12 top-1/2 -translate-y-1/2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded whitespace-nowrap">
                  Alignment
                </span>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4 relative">
              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                {showAnnotations && (
                  <span className="absolute -top-8 left-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    Consistency
                  </span>
                )}
                <h4 className="font-semibold text-foreground mb-2">Consistent Spacing</h4>
                <p className="text-sm text-muted-foreground">
                  All cards use the same padding and margin values
                </p>
              </div>

              <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                {showAnnotations && (
                  <span className="absolute -top-8 right-4 bg-accent text-accent-foreground text-xs px-2 py-1 rounded">
                    Balance
                  </span>
                )}
                <h4 className="font-semibold text-foreground mb-2">Visual Balance</h4>
                <p className="text-sm text-muted-foreground">
                  Equal weight distribution across the layout
                </p>
              </div>
            </div>

            {showAnnotations && (
              <div className="absolute -right-20 bottom-8">
                <div className="h-px w-16 bg-primary mb-1" />
                <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                  Spacing: 1rem
                </span>
              </div>
            )}
          </Card>

          {/* Principles List */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { title: 'Hierarchy', desc: 'Visual importance through size, weight, and position' },
              { title: 'Consistency', desc: 'Repeated patterns create familiarity' },
              { title: 'Contrast', desc: 'Differentiation through color and typography' },
              { title: 'Balance', desc: 'Equal visual weight distribution' },
              { title: 'Alignment', desc: 'Elements aligned to invisible grid' },
              { title: 'Typography', desc: 'Clear, readable text hierarchy' }
            ].map((principle) => (
              <Card key={principle.title} className="p-4 bg-card border-border">
                <h4 className="font-semibold text-foreground mb-1">{principle.title}</h4>
                <p className="text-xs text-muted-foreground">{principle.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualPrinciples;
