import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

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
      {/* Animated circle on timeline */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary/60 to-primary/20 border-4 border-background flex items-center justify-center transform md:translate-x-[-50%] z-10 shadow-lg shadow-primary/10"
      >
        <Briefcase className="h-4 w-4 text-primary-foreground" />
      </motion.div>
      
      {/* Connector line for mobile view */}
      <div className="absolute left-5 top-10 bottom-0 w-0.5 h-[calc(100%-40px)] bg-primary/10 md:hidden"></div>
      
      {/* Spacer (mobile invisible, desktop visible) */}
      <div className={`hidden md:block ${isLeft ? 'md:w-1/2 md:pr-10' : 'md:w-1/2 md:pl-10'}`}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30, x: isLeft ? -10 : 10 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className={`bg-background/70 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-md transition-all duration-300 ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-1/2 ${
          isLeft ? 'md:mr-auto md:text-right md:rounded-tr-none' : 'md:ml-auto md:text-left md:rounded-tl-none'
        } hover:border-primary/20`}
      >
        <div className={`flex items-center gap-2 mb-4 ${isLeft ? 'md:justify-end' : 'justify-start'}`}>
          <Badge 
            variant="secondary" 
            className="inline-flex items-center gap-1 bg-primary/10 text-primary"
          >
            <Calendar className="h-3 w-3" />
            {period}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-1 text-foreground/90">
          {title}
        </h3>
        
        <h4 className="text-base text-primary/80 font-medium mb-4">
          {company}
        </h4>
        
        <div className={`space-y-3 mt-6 ${isLeft ? 'md:ml-auto' : ''}`}>
          {description.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: isLeft ? 10 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : 'flex-row'}`}
            >
              <CheckCircle2 className={`h-5 w-5 text-primary/60 mt-0.5 flex-shrink-0 ${isLeft ? 'md:ml-3' : 'mr-3'}`} />
              <p className={`text-muted-foreground ${isLeft ? 'md:text-right' : ''}`}>
                {item}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Corner accent */}
        <div className={`absolute ${isLeft ? 'md:-right-3 md:top-0' : 'md:-left-3 md:top-0'} hidden md:block h-6 w-6 bg-primary/20 rounded-full blur-md`}></div>
      </motion.div>
    </div>
  );
}
