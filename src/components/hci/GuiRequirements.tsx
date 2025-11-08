import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { CheckCircle2, Palette, MessageSquare } from 'lucide-react';

const GuiRequirements = () => {
  const [functionalDemo, setFunctionalDemo] = useState(false);
  const [aestheticColor, setAestheticColor] = useState(0);
  const [communicableState, setCommunicableState] = useState<'idle' | 'loading' | 'success'>('idle');

  const colors = ['bg-primary', 'bg-secondary', 'bg-accent'];
  
  const handleCommunicableDemo = () => {
    setCommunicableState('loading');
    setTimeout(() => setCommunicableState('success'), 1500);
    setTimeout(() => setCommunicableState('idle'), 3000);
  };

  return (
    <section id="gui-requirements" className="section-padding bg-secondary/30" data-animate>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            GUI Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A well-designed GUI must satisfy three core requirements. Interact with each demo below to understand these principles.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Functional Requirements */}
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Functional</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              The interface must enable users to complete tasks efficiently and effectively. 
              Controls should work reliably and produce expected outcomes.
            </p>

            <div className="bg-secondary/50 p-4 rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground mb-3">Interactive Demo:</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">
                  Toggle is {functionalDemo ? 'ON' : 'OFF'}
                </span>
                <Switch
                  checked={functionalDemo}
                  onCheckedChange={setFunctionalDemo}
                  aria-label="Functional demo toggle"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                This switch demonstrates functional control - it reliably changes state when clicked.
              </p>
            </div>
          </Card>

          {/* Aesthetic Requirements */}
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Aesthetic</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Visual design must be pleasing and support usability through proper spacing, 
              color contrast, typography, and visual hierarchy.
            </p>

            <div className="bg-secondary/50 p-4 rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground mb-3">Interactive Demo:</p>
              <Button
                onClick={() => setAestheticColor((aestheticColor + 1) % colors.length)}
                className={`w-full ${colors[aestheticColor]}`}
              >
                Change Theme Color
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Notice the consistent spacing, readable typography, and balanced color palette.
              </p>
            </div>
          </Card>

          {/* Communicable Requirements */}
          <Card className="p-6 bg-card border-border hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Communicable</h3>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              The interface must provide clear feedback and guidance. Users should always 
              know what's happening and what actions are available.
            </p>

            <div className="bg-secondary/50 p-4 rounded-lg border border-border">
              <p className="text-sm font-medium text-foreground mb-3">Interactive Demo:</p>
              <Button
                onClick={handleCommunicableDemo}
                disabled={communicableState === 'loading'}
                className="w-full"
              >
                {communicableState === 'idle' && 'Start Process'}
                {communicableState === 'loading' && 'Processing...'}
                {communicableState === 'success' && '✓ Success!'}
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                The button clearly communicates its state: idle, loading, and success.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuiRequirements;
