import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data";

export function CertificationsSection() {
  const { ref } = useSectionInView("certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Certifications & Courses</SectionTitle>
        
        <div className="mt-12">
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🎓</span>
              </span>
              Coursera
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {certifications.coursera.map((cert, index) => (
                <CertificationCard
                  key={index}
                  title={cert}
                  issuer="Coursera"
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>
          
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                <span className="text-primary">🏆</span>
              </span>
              Other Certifications
            </h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {certifications.others.map((cert, index) => (
                <CertificationCard
                  key={index}
                  title={cert.title}
                  issuer={cert.issuer}
                  delay={index * 0.1}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
