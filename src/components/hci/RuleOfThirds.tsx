import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grid3x3 } from 'lucide-react';

const RuleOfThirds = () => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <section id="rule-of-thirds" className="section-padding bg-secondary/30" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Rule of Thirds & Proportion
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The rule of thirds divides a composition into a 3×3 grid. Placing key elements along 
            these lines or at their intersections creates balanced, visually appealing layouts.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary to-accent/20 border-2 border-border">
            {/* Rule of Thirds Grid */}
            <div className={`rule-of-thirds-grid ${showGrid ? 'active' : ''}`} aria-hidden="true" />

            {/* Content positioned according to rule of thirds */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              {/* Top-left intersection point */}
              <div className="w-1/3">
                <div className="bg-card/90 backdrop-blur p-4 rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-1">Primary Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Key element at intersection
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end">
                {/* Bottom-left intersection */}
                <div className="w-1/3">
                  <div className="bg-card/90 backdrop-blur p-4 rounded-lg border border-border">
                    <h3 className="font-bold text-foreground mb-1">Secondary Element</h3>
                    <p className="text-sm text-muted-foreground">
                      Supporting content
                    </p>
                  </div>
                </div>

                {/* Bottom-right intersection */}
                <div className="w-1/3 text-right">
                  <div className="bg-card/90 backdrop-blur p-4 rounded-lg border border-border inline-block">
                    <h3 className="font-bold text-foreground mb-1">Call to Action</h3>
                    <p className="text-sm text-muted-foreground">
                      Action point
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Toggle Button */}
            <div className="absolute top-4 right-4">
              <Button
                onClick={() => setShowGrid(!showGrid)}
                variant={showGrid ? 'default' : 'secondary'}
                size="sm"
                aria-pressed={showGrid}
              >
                <Grid3x3 className="mr-2 h-4 w-4" />
                {showGrid ? 'Hide' : 'Show'} Grid
              </Button>
            </div>
          </div>

          {/* Explanation */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">How It Works</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Divide the frame into 9 equal parts using 2 horizontal and 2 vertical lines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Place important elements along these lines or at their intersections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Creates more dynamic and interesting compositions than centered layouts</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Design Application</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Hero sections: Place headlines and CTAs at intersection points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Photography: Align subjects with vertical lines for balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>UI layouts: Position key actions at natural focal points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RuleOfThirds;
