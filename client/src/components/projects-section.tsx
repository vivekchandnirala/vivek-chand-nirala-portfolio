import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data";

export function ProjectsSection() {
  const { ref } = useSectionInView("projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="py-16 md:py-24"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Projects</SectionTitle>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
