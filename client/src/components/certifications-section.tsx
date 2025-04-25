import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { CertificationCard } from "@/components/certification-card";
import { certifications } from "@/data";
import { Award, Filter, Grid3X3, ListFilter, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type CertCategory = "All" | "Web Development" | "Programming" | "Cloud" | "AI & Machine Learning" | "Networking" | "Multiple";

export function CertificationsSection() {
  const { ref } = useSectionInView("certifications");
  const [filterCategory, setFilterCategory] = useState<CertCategory>("All");
  const [view, setView] = useState<"grid" | "compact">("grid");
  
  // Get all available categories
  const getAllCategories = () => {
    const categories = new Set<CertCategory>(["All"]);
    
    // Add all categories from Coursera certifications
    certifications.coursera.forEach(cert => {
      if (cert.category) {
        categories.add(cert.category as CertCategory);
      }
    });
    
    // Add all categories from Other certifications
    certifications.others.forEach(cert => {
      if (cert.category) {
        categories.add(cert.category as CertCategory);
      }
    });
    
    return Array.from(categories);
  };
  
  const allCategories = getAllCategories();
  
  // Filter certifications based on category
  const filteredCoursera = filterCategory === "All" 
    ? certifications.coursera 
    : certifications.coursera.filter(cert => cert.category === filterCategory);
    
  const filteredOthers = filterCategory === "All"
    ? certifications.others
    : certifications.others.filter(cert => cert.category === filterCategory);

  return (
    <section
      id="certifications"
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl opacity-75" />
        <div className="absolute -right-20 bottom-20 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl opacity-75" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <SectionTitle>Certifications & Courses</SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <div className="flex items-center gap-2">
              <Button 
                variant={view === "grid" ? "default" : "outline"} 
                size="icon" 
                onClick={() => setView("grid")}
                className="h-9 w-9"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button 
                variant={view === "compact" ? "default" : "outline"} 
                size="icon" 
                onClick={() => setView("compact")}
                className="h-9 w-9"
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 overflow-x-auto pb-2 no-scrollbar"
        >
          <div className="flex space-x-2 min-w-max">
            {allCategories.map((category) => (
              <Badge 
                key={category}
                variant={filterCategory === category ? "default" : "outline"}
                className={cn(
                  "px-3 py-1 cursor-pointer hover:opacity-90 transition-all",
                  filterCategory === category 
                    ? "bg-primary" 
                    : "hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                )}
                onClick={() => setFilterCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </motion.div>
        
        <Tabs defaultValue="coursera" className="mt-8">
          <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-2 h-12">
            <TabsTrigger value="coursera" className="text-sm font-medium h-full">
              <Award className="h-4 w-4 mr-2" /> 
              Coursera Certifications
            </TabsTrigger>
            <TabsTrigger value="others" className="text-sm font-medium h-full">
              <Award className="h-4 w-4 mr-2" /> 
              Industry Certifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="coursera" className="mt-4">
            <div className={cn(
              "grid gap-6",
              view === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            )}>
              {filteredCoursera.length > 0 ? (
                filteredCoursera.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    {...cert}
                    delay={index * 0.1}
                  />
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-12 border border-dashed rounded-lg bg-muted/20">
                  <div className="text-center p-6">
                    <ListFilter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No certifications in this category</h3>
                    <p className="text-muted-foreground">Try selecting a different category filter</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="others" className="mt-4">
            <div className={cn(
              "grid gap-6",
              view === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                : "grid-cols-1"
            )}>
              {filteredOthers.length > 0 ? (
                filteredOthers.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    {...cert}
                    delay={index * 0.1}
                  />
                ))
              ) : (
                <div className="col-span-full flex justify-center items-center py-12 border border-dashed rounded-lg bg-muted/20">
                  <div className="text-center p-6">
                    <ListFilter className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No certifications in this category</h3>
                    <p className="text-muted-foreground">Try selecting a different category filter</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
