"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarIcon, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 bg-muted/20">
      <div className="container px-4 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>Lovely Professional University</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>2023 - 2027</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>CGPA: 9.0</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">B.Tech - Computer Science and Engineering</p>
                  <h4 className="font-medium mb-2">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">Data Structures and Algorithms</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">Object-Oriented Programming</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">Database Management Systems</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">Computer Networks</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">Operating Systems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border border-primary/5 hover:border-primary/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle>Sachchidanand Sinha College</CardTitle>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4" />
                      <span>2021 - 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>CGPA: 8.5</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Class 12th - Science with Computer Science</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 mt-8">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "The Bits and Bytes of Computer Networking",
                    issuer: "Google",
                    link: "https://www.coursera.org/account/accomplishments/verify/R6OBJ526ASGA"
                  },
                  {
                    title: "Data Structure and Algorithms",
                    issuer: "Physics Wallah",
                    link: "https://pwskills.com/course/best-full-stack-web-development/?source=pwskills.com&position=course_dropdown&from=home_page"
                  },
                  {
                    title: "Full Stack Web Development",
                    issuer: "Geeks for Geeks",
                    link: "https://www.geeksforgeeks.org/user/amitgupt1x5a/"
                  },
                  {
                    title: "Python Certification",
                    issuer: "HackerRank",
                    link: "https://www.hackerrank.com/certificates/4a5e1ddadcb0"
                  }
                ].map((cert, i) => (
                  <Card key={i} className="border border-primary/5 hover:border-primary/20 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          View Certificate
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}