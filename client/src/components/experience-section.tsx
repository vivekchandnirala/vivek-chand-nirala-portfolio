import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/data";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";

export function ExperienceSection() {
  const { ref } = useSectionInView("experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <SectionTitle>Professional Experience</SectionTitle>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mt-4"
            >
              My journey as a developer and NCC cadet has equipped me with technical skills and leadership qualities, 
              making me a well-rounded professional ready for new challenges.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <Button asChild variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
              <a href="/resume.pdf" download="Vivek_Chand_Nirala_Resume.pdf">
                <FileTextIcon className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
        
        <div className="mt-12 relative">
          {/* Vertical line for timeline with animation */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10"
          ></motion.div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard 
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                isLeft={index % 2 === 0}
              />
            ))}
            
            {/* Starting point indicator */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute left-0 md:left-1/2 bottom-0 transform md:translate-x-[-50%] translate-y-[30px] flex flex-col items-center"
            >
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground text-xs font-bold">NOW</span>
              </div>
              <div className="text-center mt-3 bg-background rounded-full px-4 py-1 text-sm border border-border shadow-sm">
                Open to Opportunities
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
