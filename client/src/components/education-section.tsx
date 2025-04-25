
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Card } from "@/components/ui/card";

const educationData = [
  {
    level: "B.Tech CSE",
    institution: "Lovely Professional University",
    year: "2022-2026",
    image: "/education/lpu.jpg",
    achievements: [
      "CGPA: 8.01",
      "Top 50 LPU Students - Parliament Visit",
      "Active NCC Cadet"
    ]
  },
  {
    level: "Intermediate",
    institution: "Your Intermediate School Name",
    year: "2020-2022",
    image: "/education/intermediate.jpg",
    achievements: [
      "Percentage: XX%",
      "House Captain",
      "Sports Captain"
    ]
  },
  {
    level: "Matriculation",
    institution: "Your School Name",
    year: "2019-2020",
    image: "/education/school.jpg",
    achievements: [
      "Percentage: XX%",
      "State Level Athlete",
      "Academic Excellence"
    ]
  }
];

export function EducationSection() {
  const { ref } = useSectionInView("education");

  return (
    <section
      id="education"
      ref={ref}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Education</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video relative">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white text-center">
                      {edu.level}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{edu.institution}</h4>
                  <p className="text-muted-foreground mb-4">{edu.year}</p>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
