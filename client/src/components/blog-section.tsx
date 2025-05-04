import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/ui/button";
import { YoutubeIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function BlogSection() {
  const { ref } = useSectionInView("blog");

  return (
    <section
      id="blog"
      ref={ref}
      className="py-16 md:py-24"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>YouTube Channels</SectionTitle>
        
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* LPU-NCC Channel */}
          <Card className="bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/lpu-ncc-thumb.jpg" 
                    alt="LPU-NCC YouTube Channel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <YoutubeIcon className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">LPU-NCC Channel</h3>
                <p className="text-muted-foreground mb-6">
                  Explore NCC activities, training sessions, and events at LPU
                </p>
                <Button 
                  variant="default" 
                  className="bg-red-600 hover:bg-red-700 gap-2"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@LPUNCC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                    Watch Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personal Channel */}
          <Card className="bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="/images/vivek-channel-thumb.jpg" 
                    alt="Vivek Chand Nirala YouTube Channel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <YoutubeIcon className="h-12 w-12 text-red-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Vivek Chand Nirala</h3>
                <p className="text-muted-foreground mb-6">
                  Personal channel featuring tech tutorials, coding tips, and lifestyle content
                </p>
                <Button 
                  variant="default" 
                  className="bg-red-600 hover:bg-red-700 gap-2"
                  asChild
                >
                  <a 
                    href="https://www.youtube.com/@Vivek_Chand_Nirala" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <YoutubeIcon className="h-4 w-4" />
                    Watch Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
