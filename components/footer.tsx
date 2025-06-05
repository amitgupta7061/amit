import { ThemeToggle } from '@/components/theme-toggle';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-12 border-t border-primary/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold tracking-tighter mb-2">
              <span className="text-primary">Amit</span>
              <span className="text-zinc-700"> Gupta</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              A passionate Full Stack Developer and problem solver, creating 
              innovative web applications with modern technologies.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4 items-center">
              <a 
                href="https://github.com/amitgupta7061" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/amit-kumar-gupta-96649729a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="https://leetcode.com/u/a_mmitt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </a>
              <a 
                href="mailto:amitgupta561710@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <ThemeToggle />
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Amit Kumar Gupta. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}