"use client"

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, ExternalLink, Mail , CloudDownload} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--x', `${x}`);
      heroRef.current.style.setProperty('--y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), hsl(var(--primary)/0.15), transparent 30%)'
      }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container px-4 py-32 md:py-0 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-primary">Hi, I&apos;m </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#283048] to-[#859398]">Amit Kumar Gupta</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & Problem Solver
          </h2>
          
          <div className="flex justify-center gap-4 mb-10">
            <a href="https://github.com/amitgupta7061" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/amit-kumar-gupta-96649729a/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://leetcode.com/u/a_mmitt/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">LeetCode</span>
              </Button>
            </a>
            <a href="mailto:amitgupta561710@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToContact} className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600">
              Contact Me
            </Button>
            <Button variant="outline" className='flex gap-1' onClick={() => {
              window.open(
                "https://res.cloudinary.com/dclklp0mb/raw/upload/v1743148501/rhvem77ljxvtu42g0md7.pdf",
                "_blank",
                "noopener,noreferrer"
              );
            }}>Resume <CloudDownload/></Button>
          </div>
        </motion.div>
      </div>
      
      <button 
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </button>
    </section>
  );
}