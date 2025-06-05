"use client"

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrophyIcon, CalendarDaysIcon, CodeIcon, GitBranchIcon } from 'lucide-react';

export default function Achievements() {
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true, margin: "-100px" });

  const achievements = [
    {
      id: 1,
      title: "LeetCode Knight Badge",
      description: "Achieved Knight Badge by solving 500+ problems with 1908 contest rating, placing in top 10%.",
      icon: <TrophyIcon className="w-10 h-10 text-orange-500" />,
      link: "https://leetcode.com/u/a_mmitt/",
      label: "View Profile"
    },
    {
      id: 2,
      title: "LeetCode Streak",
      description: "Maintained a 200+ day LeetCode streak showcasing dedication to consistent learning.",
      icon: <CalendarDaysIcon className="w-10 h-10 text-emerald-500" />,
      link: "https://leetcode.com/u/a_mmitt/",
      label: "View Profile"
    },
    {
      id: 3,
      title: "GeeksforGeeks Problem Solving",
      description: "Solved 250+ problems on GeeksforGeeks and served as a campus ambassador.",
      icon: <CodeIcon className="w-10 h-10 text-green-500" />,
      link: "https://www.geeksforgeeks.org/user/amitgupt1x5a/",
      label: "View Profile"
    },
    {
      id: 4,
      title: "Hackathon Management",
      description: "Contributed to technical management of college-level hackathon Bits & Bites 2.0.",
      icon: <GitBranchIcon className="w-10 h-10 text-blue-500" />,
      link: "#",
      label: "Event Details"
    }
  ];

  const counters = [
    { value: 500, label: "Problems Solved", suffix: "+" },
    { value: 200, label: "Day Streak", suffix: "+" },
    { value: 1908, label: "Contest Rating", suffix: "" },
    { value: 10, label: "Top Percentile", suffix: "%" }
  ];

  useEffect(() => {
    if (isInView) {
      document.querySelectorAll('.counter-value').forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; // ms
        const increment = target / (duration / 16); // 60fps
        
        let current = 0;
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            if (current > target) current = target;
            counter.textContent = Math.floor(current).toString() + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString() + suffix;
          }
        };
        
        updateCounter();
      });
    }
  }, [isInView]);

  return (
    <section id="achievements" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            My <span className="text-primary">Achievements</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <div ref={counterRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/5 rounded-lg p-6 text-center"
            >
              <h3 
                className="counter-value text-4xl font-bold text-primary mb-2" 
                data-target={counter.value}
                data-suffix={counter.suffix}
              >
                0
              </h3>
              <p className="text-muted-foreground">{counter.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-primary/5 hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center p-6 md:p-8 bg-primary/5 md:w-1/4">
                      {item.icon}
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline" className="bg-primary/5">Achievement</Badge>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                        >
                          {item.label}
                          <span className="text-xs">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}