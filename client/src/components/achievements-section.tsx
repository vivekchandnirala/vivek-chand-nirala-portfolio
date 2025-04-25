import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { AchievementCard } from "@/components/achievement-card";
import { achievements } from "@/data";

export function AchievementsSection() {
  const { ref } = useSectionInView("achievements");

  return (
    <section
      id="achievements"
      ref={ref}
      className="py-16 md:py-24"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Competitions, Hackathons, & Achievements</SectionTitle>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
