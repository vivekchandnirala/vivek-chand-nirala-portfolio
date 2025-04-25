import { motion } from "framer-motion";
import { SocialIcons } from "@/components/social-icons";
//import { ResumeDownload } from "@/components/resume-download"; // Removed import as the component is not used anymore.
import { userData } from "@/data";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-8">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-bold text-primary mb-2">Vivek Chand Nirala</h2>
            <p className="text-muted-foreground text-sm">
              Full Stack Web Developer & NCC Cadet
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <SocialIcons />
            {/*<ResumeDownload variant="outline" size="sm" />*/} {/*Removed ResumeDownload component*/}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 pt-4 border-t border-border/30 text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Vivek Chand Nirala. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}