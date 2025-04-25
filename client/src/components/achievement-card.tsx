import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  title: string;
  delay?: number;
}

export function AchievementCard({ title, delay = 0 }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Trophy className="h-5 w-5 text-primary" />
            </div>
            <p className="text-foreground">
              {title}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
