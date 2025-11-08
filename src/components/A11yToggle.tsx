import { Contrast } from 'lucide-react';
import { useA11y } from '@/hooks/useA11y';
import { Button } from '@/components/ui/button';

const A11yToggle = () => {
  const { highContrast, toggleHighContrast } = useA11y();

  return (
    <Button
      onClick={toggleHighContrast}
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
      aria-label={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
      title={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
    >
      <Contrast className="h-5 w-5" />
    </Button>
  );
};

export default A11yToggle;
