import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  name: string;
  delay?: number;
}

export function SkillCard({ name, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-background border border-border/50 rounded-lg p-4 shadow-sm hover:border-primary/50 transition-colors flex items-center justify-center"
    >
      <Badge variant="secondary" className="text-sm font-medium px-3 py-1">
        {name}
      </Badge>
    </motion.div>
  );
}
