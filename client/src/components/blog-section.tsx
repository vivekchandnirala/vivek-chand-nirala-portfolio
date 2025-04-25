import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/ui/button";
import { YoutubeIcon, Newspaper } from "lucide-react";

export function BlogSection() {
  const { ref } = useSectionInView("blog");

  return (
    <section
      id="blog"
      ref={ref}
      className="py-16 md:py-24"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>Blog & YouTube</SectionTitle>
        
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
            <p className="text-muted-foreground mb-8">
              I'm working on creating valuable content to share my knowledge and experiences. 
              Stay tuned for upcoming blog posts and YouTube videos on web development, 
              design, and my journey as an NCC cadet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="gap-2">
                <Newspaper className="h-4 w-4" />
                Future Blog
              </Button>
              <Button variant="outline" className="gap-2">
                <YoutubeIcon className="h-4 w-4" />
                Future Channel
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
