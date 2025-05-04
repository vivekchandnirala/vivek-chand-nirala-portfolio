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
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-primary/5"
    >
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <SectionTitle>Experience</SectionTitle>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mt-4 mx-auto"
          >
            My journey as a developer and NCC cadet has equipped me with technical skills and leadership qualities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-3 top-0 h-full w-0.5 bg-primary/20" />
              <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary" />

              <div className="pl-8 pr-4">
                <div className="bg-card hover:bg-card/80 transition-colors p-6 rounded-lg border border-border/50 hover:border-primary/20">
                  <span className="text-sm text-primary font-medium mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-muted-foreground font-medium mb-4">
                    {exp.company}
                  </h4>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}