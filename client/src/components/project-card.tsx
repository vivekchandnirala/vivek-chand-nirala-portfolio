import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  delay?: number;
}

export function ProjectCard({ title, description, technologies, link, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col border-border/50 hover:border-primary/50 transition-colors overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <Code className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-muted-foreground mb-4">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/10 pt-4">
          {link ? (
            <Button variant="outline" size="sm" className="w-full gap-2" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>View Project</span>
              </a>
            </Button>
          ) : (
            <Button variant="outline" size="sm" className="w-full gap-2" disabled>
              <Github className="h-4 w-4" />
              <span>Coming Soon</span>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
