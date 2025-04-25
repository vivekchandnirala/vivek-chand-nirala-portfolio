import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isLeft: boolean;
}

export function ExperienceCard({ title, company, period, description, isLeft }: ExperienceCardProps) {
  return (
    <div className={`flex items-center relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Circle on timeline */}
      <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center transform md:translate-x-[-50%] z-10">
        <Briefcase className="h-3 w-3 text-primary" />
      </div>
      
      {/* Spacer (mobile invisible, desktop visible) */}
      <div className={`hidden md:block ${isLeft ? 'md:w-1/2 md:pr-10' : 'md:w-1/2 md:pl-10'}`}></div>
      
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`bg-background border border-border/50 rounded-xl p-6 shadow-sm ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-1/2 ${
          isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
        }`}
      >
        <Badge 
          variant="secondary" 
          className={`inline-flex items-center gap-1 mb-2 ${isLeft ? 'md:ml-auto' : ''}`}
        >
          <Calendar className="h-3 w-3" />
          {period}
        </Badge>
        <h3 className="text-xl font-bold mb-1">
          {title}
        </h3>
        <h4 className="text-base text-muted-foreground mb-4">
          {company}
        </h4>
        <ul className={`space-y-2 ml-5 md:ml-0 ${isLeft ? 'md:mr-5' : ''} list-disc`}>
          {description.map((item, index) => (
            <li key={index} className={`text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
