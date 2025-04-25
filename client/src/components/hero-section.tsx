import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ArrowDownIcon } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { SocialIcons } from "@/components/social-icons";

export function HeroSection() {
  const { ref } = useSectionInView("home");
  const [typedText, setTypedText] = useState("");
  const fullText = "Welcome to My Portfolio!";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section 
      id="home" 
      ref={ref} 
      className="relative flex flex-col justify-center items-center min-h-screen pt-16 overflow-hidden"
    >
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(37, 99, 235, 0.1))",
        }}
      />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-30">
          {/* Top left circle */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl" />
          {/* Bottom right circle */}
          <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-primary/20 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            {typedText}
            <span className="inline-block w-1 h-8 bg-primary animate-blink" style={{ visibility: typedText.length === fullText.length ? 'hidden' : 'visible' }}></span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Vivek Chand Nirala
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Web Developer & NCC Cadet
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#contact">
              Contact Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6">
            <a href="/resume.pdf" download="Vivek_Chand_Nirala_Resume.pdf">
              <DownloadIcon className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <SocialIcons />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-8"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDownIcon className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
