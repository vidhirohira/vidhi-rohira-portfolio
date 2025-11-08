import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container-custom px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vidhi Rohira. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Designed with accessibility and HCI principles in mind.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:rohiravidhi@gmail.com"
              className="text-foreground hover:text-primary transition-colors focus-visible-ring rounded"
              aria-label="Email Vidhi Rohira"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+919619184233"
              className="text-foreground hover:text-primary transition-colors focus-visible-ring rounded"
              aria-label="Call Vidhi Rohira"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/vidhi-rohira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors focus-visible-ring rounded"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/vidhirohira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors focus-visible-ring rounded"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
