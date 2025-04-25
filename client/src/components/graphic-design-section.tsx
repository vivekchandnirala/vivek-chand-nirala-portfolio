
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

// Add your design works here with proper image paths
const designWorks = [
  {
    title: "NCC Event Poster",
    category: "Poster Design",
    image: "/designs/ncc-poster.jpg",
    description: "Engaging event poster created for NCC annual gathering"
  },
  {
    title: "Digital Art",
    category: "Digital Design",
    image: "/designs/digital-art.jpg",
    description: "Creative digital artwork showcasing modern design techniques"
  },
  {
    title: "Photo Manipulation",
    category: "Photo Editing",
    image: "/designs/photo-edit.jpg",
    description: "Professional photo manipulation and enhancement"
  },
  {
    title: "Event Memento",
    category: "Memento Design",
    image: "/designs/memento.jpg",
    description: "Custom memento design for special occasions"
  },
  {
    title: "Marketing Material",
    category: "Branding",
    image: "/designs/marketing.jpg",
    description: "Engaging marketing materials for brand promotion"
  },
  {
    title: "Creative Illustration",
    category: "Illustration",
    image: "/designs/illustration.jpg",
    description: "Hand-crafted digital illustrations"
  }
];

export function GraphicDesignSection() {
  const { ref } = useSectionInView("graphic-design");
  const [selectedWork, setSelectedWork] = useState<typeof designWorks[0] | null>(null);

  return (
    <section
      id="graphic-design"
      ref={ref}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Graphic Design Portfolio</SectionTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mt-4 mb-12"
        >
          Showcasing my creative work in poster design, photo manipulation, and digital art
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {designWorks.map((work, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedWork(work)}
              className="cursor-pointer"
            >
              <Card className="overflow-hidden group">
                <div className="aspect-square relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">{work.title}</h3>
                    <p className="text-white/80 text-sm">{work.category}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedWork && (
            <div>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedWork.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{selectedWork.category}</p>
                <p className="text-muted-foreground">{selectedWork.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
