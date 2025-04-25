import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { SkillCard } from "@/components/skill-card";
import { skills } from "@/data";

export function SkillsSection() {
  const { ref } = useSectionInView("skills");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-16 md:py-24"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <div className="mt-12">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">💻</span>
              </span>
              Languages
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.languages.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🎨</span>
              </span>
              Frontend
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.frontend.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🔧</span>
              </span>
              Backend
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.backend.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🗄️</span>
              </span>
              Databases
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.databases.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🛠️</span>
              </span>
              Tools
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.tools.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">☁️</span>
              </span>
              Cloud/DevOps
            </h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.cloud.map((skill, index) => (
                <SkillCard key={index} name={skill} delay={index * 0.1} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
