"use client"

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/10">
                  <Image src={'./photo.jpeg'} height={100} width={100} className='h-full w-full' alt='image'/>
                </div>
              </div>
              <div className="absolute inset-0 border border-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & Problem Solver</h3>
            <p className="text-muted-foreground mb-6">
              I'm a Computer Science Engineering student at Lovely Professional University with a passion for building 
              innovative web applications and solving complex problems. With a strong foundation in both frontend and 
              backend technologies, I create responsive, user-friendly applications with clean, efficient code.
            </p>
            <p className="text-muted-foreground mb-6">
              As a Teaching Assistant at Coding Ninja, I've mentored over 500 students, helping them master programming 
              concepts and algorithms. My experience has honed my ability to communicate technical concepts clearly and 
              solve challenging problems efficiently.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Problem Solving</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Web Development</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Algorithms</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Responsive Design</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Self-learning</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Adaptability</Badge>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">9.0</span>
                <span className="text-sm text-muted-foreground">CGPA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">500+</span>
                <span className="text-sm text-muted-foreground">Students Mentored</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">1000+</span>
                <span className="text-sm text-muted-foreground">Doubts Resolved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}