"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';

interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
  date: string;
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Real-Time Chat Application",
      description: "A modern chat application with real-time messaging capabilities.",
      longDescription: "Developed a real-time chat app with Socket.io & JWT for instant messaging, secure authentication, and authorization. Integrated online user status, efficient global state management with Zustand, a modern and responsive UI using TailwindCSS & DaisyUI, robust client-server error handling, and seamless public deployment.",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://realtime-chat-app-d3sw.onrender.com/",
      githubLink: "https://github.com/amitgupta7061/Realtime-Chat-App",
      tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT", "TailwindCSS", "DaisyUI", "Zustand"],
      date: "Jan 2025"
    },
    {
      id: 2,
      title: "Doctor Appointment Booking System",
      description: "A full-stack MERN application for booking medical appointments.",
      longDescription: "The Doctor Appointment Booking System is a full-stack web application. This system enables patients to book appointments with doctors, while doctors and admins can manage schedules and profiles. It features three levels of authentication—Patients, Doctors, and Admins. Additionally, integrates an online payment gateway for transactions.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://prescripto-eh9m.onrender.com/",
      githubLink: "https://github.com/amitgupta7061/prescripto",
      tags: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Multer"],
      date: "Oct 2024"
    },
    {
      id: 3,
      title: "BiteRush",
      description: "A responsive food delivery website with modern UI.",
      longDescription: "Architected and developed responsive food delivery website using React.js and advanced web technologies. Implemented core components including a navigation bar, multi-page layout, React Router setup, website header, menu items, food list, footer, and user authentication (Sign In/Sign Up), with responsive UI ensuring compatibility across all devices.",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      demoLink: "https://euphonious-heliotrope-4bb0bc.netlify.app/",
      githubLink: "https://github.com/amitgupta7061/BiteRush",
      tags: ["React.js", "HTML", "CSS", "JavaScript", "React Router", "PHP", "MySQL"],
      date: "June 2024"
    }
  ];

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-center text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden group bg-card border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.date}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="mb-4">
                    <p className={expandedId === project.id ? "" : "line-clamp-3"}>
                      {project.longDescription}
                    </p>
                    {project.longDescription.length > 100 && (
                      <button 
                        onClick={() => toggleExpand(project.id)} 
                        className="text-primary hover:underline text-sm mt-2"
                      >
                        {expandedId === project.id ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5">
                        {tag}
                      </Badge>
                    ))}
                    
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="default" className="w-full gap-1">
                      <ExternalLink size={16} /> Live Demo
                    </Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full gap-1">
                      <Github size={16} /> Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}