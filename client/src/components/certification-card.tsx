import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  delay?: number;
}

export function CertificationCard({ title, issuer, delay = 0 }: CertificationCardProps) {
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
        <CardHeader className="pb-2">
          <CardDescription className="text-primary flex items-center gap-2">
            <Award className="h-4 w-4" />
            {issuer}
          </CardDescription>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center mt-2">
            <div className="w-full h-2 bg-muted rounded-full">
              <div className="h-full bg-primary rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
