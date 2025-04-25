import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/data";

export function ExperienceSection() {
  const { ref } = useSectionInView("experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Experience</SectionTitle>
        
        <div className="mt-12 relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          
          <div className="space-y-12">
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
          </div>
        </div>
      </div>
    </section>
  );
}
