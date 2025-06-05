"use client"

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export default function Skills() {
  const frontendSkills: Skill[] = [
    { name: "HTML/CSS", percentage: 95, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", percentage: 90, color: "from-yellow-400 to-amber-600" },
    { name: "TypeScript", percentage: 85, color: "from-blue-400 to-blue-600" },
    { name: "React.js", percentage: 90, color: "from-cyan-500 to-blue-500" },
    { name: "Next.js", percentage: 88, color: "from-gray-700 to-gray-900" },
    { name: "Tailwind CSS", percentage: 92, color: "from-cyan-400 to-sky-500" },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", percentage: 85, color: "from-green-500 to-emerald-600" },
    { name: "Express.js", percentage: 88, color: "from-gray-500 to-gray-700" },
    { name: "MongoDB", percentage: 80, color: "from-green-600 to-green-800" },
    { name: "MySQL", percentage: 82, color: "from-blue-600 to-indigo-800" },
    { name: "REST API", percentage: 85, color: "from-indigo-400 to-indigo-600" },
    { name: "Socket.IO", percentage: 75, color: "from-yellow-500 to-amber-600" },
  ];

  const otherSkills: Skill[] = [
    { name: "C++", percentage: 85, color: "from-blue-600 to-blue-800" },
    { name: "Java", percentage: 80, color: "from-red-600 to-red-800" },
    { name: "PHP", percentage: 70, color: "from-purple-500 to-purple-700" },
    { name: "Git/GitHub", percentage: 88, color: "from-gray-600 to-gray-800" },
    { name: "Data Structures", percentage: 90, color: "from-green-500 to-green-700" },
    { name: "Algorithms", percentage: 90, color: "from-orange-600 to-red-600" },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      }
    })
  };

  const SkillCategory = ({ title, skills }: { title: string, skills: Skill[] }) => (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div 
            key={skill.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUpVariants}
            className="relative"
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.percentage}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
          <p className="text-center text-muted-foreground">
            I've developed a diverse skill set across various technologies, with expertise in both frontend and backend development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Programming & Tools" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
}