
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Add your design works here
const designWorks = [
  {
    title: "Event Poster Design",
    category: "Poster",
    image: "/designs/poster1.jpg", // You'll need to add these images
    description: "Creative event poster design"
  },
  // Add more designs here
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
              <Card className="overflow-hidden">
                <div className="aspect-video relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-medium">{work.title}</p>
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
