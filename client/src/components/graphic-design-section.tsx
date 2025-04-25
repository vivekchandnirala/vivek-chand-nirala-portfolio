import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface DesignWork {
  title: string;
  image: string;
  description: string;
}

const designWorks: DesignWork[] = [
  {
    title: "NCC Event Poster",
    image: "/designs/ncc-poster.jpg",
    description: "Engaging event poster created for NCC annual gathering"
  },
  {
    title: "Digital Art",
    image: "/designs/digital-art.jpg",
    description: "Creative digital artwork showcasing modern design techniques"
  },
  {
    title: "Photo Manipulation",
    image: "/designs/photo-edit.jpg",
    description: "Professional photo manipulation and enhancement"
  },
  {
    title: "Event Memento",
    image: "/designs/memento.jpg",
    description: "Custom memento design for special occasions"
  },
  {
    title: "Marketing Material",
    image: "/designs/marketing.jpg",
    description: "Engaging marketing materials for brand promotion"
  },
  {
    title: "Creative Illustration",
    image: "/designs/illustration.jpg",
    description: "Hand-crafted digital illustrations"
  }
];

export function GraphicDesignSection() {
  const { ref } = useSectionInView("graphic-design");

  return (
    <section
      id="graphic-design"
      ref={ref}
      className="scroll-mt-28 mb-28"
    >
      <SectionTitle>Graphic Design</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {designWorks.map((work, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden cursor-pointer group">
                  <div className="aspect-video relative">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-xl font-bold text-white text-center">
                        {work.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <img
                src={work.image}
                alt={work.title}
                className="w-full rounded-lg"
              />
              <h3 className="text-xl font-bold mt-4">{work.title}</h3>
              <p className="text-muted-foreground mt-2">{work.description}</p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}