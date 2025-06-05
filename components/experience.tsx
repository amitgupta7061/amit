"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/10 rounded-full"></div>
            
            {/* Experience item */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-0 mb-16 md:mb-0"
            >
              <div className="hidden md:block absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-4 h-4 rounded-full bg-primary"></div>
              
              <Card className="md:w-[calc(50%-20px)] md:ml-auto md:-mr-0 relative shadow-lg hover:shadow-xl transition-all border border-primary/5 hover:border-primary/20">
                <div className="absolute -left-9 md:hidden bg-muted-foreground/5 p-1 rounded-full">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <BriefcaseIcon className="w-3 h-3 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap justify-between items-start mb-1">
                    <CardTitle className="text-xl">Teaching Assistant</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      <span>Oct 2024 - Jan 2025</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BriefcaseIcon className="w-4 h-4 mr-1" />
                    <span>Coding Ninja</span>
                    <span className="mx-2">•</span>
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    <span>Remote</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mentored students in C++, Java, assisting with debugging, code optimization, and DSA problem-solving.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Led doubt-solving sessions, provided explanations for complex topics, and reviewed assignments for accuracy and quality.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Mentored 500+ students, resolving 1000+ doubts through guidance, debugging, and conceptual explanations.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}