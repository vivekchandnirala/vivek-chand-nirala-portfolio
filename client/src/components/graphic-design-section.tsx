
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Add your design works here
const designWorks = [
  {
    title: "NCC Event Poster",
    category: "Poster Design",
    image: "/designs/ncc-poster.jpg",
    description: "Event poster created for NCC annual gathering"
  },
  {
    title: "College Brochure",
    category: "Brochure Design",
    image: "/designs/college-brochure.jpg",
    description: "Brochure design for college events and activities"
  },
  {
    title: "Photo Manipulation Art",
    category: "Photo Editing",
    image: "/designs/photo-art.jpg",
    description: "Creative photo manipulation artwork"
  },
  {
    title: "Event Memento",
    category: "Memento Design",
    image: "/designs/memento.jpg",
    description: "Custom memento design for special events"
  },
  {
    title: "Digital Illustration",
    category: "Illustration",
    image: "/designs/illustration.jpg",
    description: "Digital illustration artwork"
  },
  {
    title: "Marketing Poster",
    category: "Poster Design",
    image: "/designs/marketing.jpg",
    description: "Marketing campaign poster design"
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
          Showcasing my creative work in poster design, momentos, and photo editing
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              <Card className="overflow-hidden border-2 hover:border-primary/50">
                <div className="aspect-square relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-white font-bold text-xl mb-2">{work.title}</p>
                    <p className="text-white/80 text-sm mb-2">{work.category}</p>
                    <p className="text-white/70 text-sm">{work.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl">
          {selectedWork && (
            <div>
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{selectedWork.title}</h3>
              <p className="text-muted-foreground mt-2">{selectedWork.description}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
