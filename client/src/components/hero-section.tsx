import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileTextIcon, VideoIcon } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { SocialIcons } from "@/components/social-icons";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaPalette } from "react-icons/fa";

// 📷 Import your image
import vivekImg from "@/img/vivek.jpg";

export function HeroSection() {
  const { ref } = useSectionInView("home");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titles = [
    "Full Stack Web Developer",
    "Graphic Designer",
    "Problem Solver",
    "NCC Cadet",
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = titles[titleIndex];

    if (isDeleting && displayTitle === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(100);
      return;
    }

    if (!isDeleting && displayTitle === currentTitle) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayTitle(currentTitle.substring(0, displayTitle.length - 1));
      } else {
        setDisplayTitle(currentTitle.substring(0, displayTitle.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayTitle, isDeleting, titleIndex, typingSpeed, titles]);

  const floatingIcons = [
    { Icon: FaCode, delay: 0, x: -40, y: -80 },
    { Icon: FaServer, delay: 0.1, x: 40, y: -60 },
    { Icon: FaMobileAlt, delay: 0.2, x: -60, y: 20 },
    { Icon: FaDatabase, delay: 0.3, x: 60, y: 40 },
    { Icon: FaPalette, delay: 0.4, x: 0, y: -120 },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5 relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]" />

        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x, y }}
            animate={{
              opacity: [0, 0.7, 0.3],
              x: [x, x + 10, x - 10, x],
              y: [y, y - 10, y + 10, y],
            }}
            transition={{
              delay,
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-1/2 left-1/2 text-primary/30 dark:text-primary/20"
          >
            <Icon size={index % 2 === 0 ? 48 : 40} />
          </motion.div>
        ))}

        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="container px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-center text-center order-2 lg:items-start lg:text-left lg:order-1 py-12 lg:py-0"

          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Full Stack Web Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Hi, I'm <span className="text-primary">Vivek Chand Nirala</span>
              </h1>

              <div className="h-12 mb-6">
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                  <span>I'm a </span>
                  <span className="text-primary font-semibold relative">
                    {displayTitle}
                    <span
                      className="inline-block w-1 h-6 ml-1 bg-primary animate-blink absolute"
                      style={{ visibility: isDeleting ? "visible" : "visible" }}
                    ></span>
                  </span>
                </h2>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg mb-8 z-10">
                Passionate about creating immersive digital experiences through elegant code and thoughtful design.
                Currently a B.Tech CSE student at Lovely Professional University.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
           className="flex flex-row sm:flex-row gap-4 mt-2"
            >
              <Button asChild size="lg" className="rounded-full px-6 bg-primary hover:bg-primary/90">
                <a href="#contact">Contact Me</a>
             </Button>

             <Button asChild variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
                <a
                 href="https://drive.google.com/file/d/1Ty3gVbvIdcT8hk34HRcQGZkB4Ow2K64v/view?usp=sharing"
                  target="_blank"
                 rel="noopener noreferrer"
               >
                  Resume
                </a>
              </Button>

             <Button asChild variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
                <a href="https://drive.google.com/file/d/1eDyLEsSiVUNF8kEzW95CVvj7BuCIgbXe/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <VideoIcon className="mr-2 h-4 w-4" /> Video CV
               </a>
             </Button>
            </motion.div>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-10"
            >
              
              <SocialIcons />
              
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
  <div className="absolute -inset-6 md:-inset-10 lg:-inset-12 bg-gradient-to-br from-primary/10 to-primary/02 rounded-full blur-2xl scale-110"></div>


              <motion.img
                src={vivekImg}
                alt="Vivek Chand Nirala"
                className="absolute inset-4 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                animate={{
                  boxShadow: [
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                    "0 0 20px 5px rgba(99, 102, 241, 0.4)",
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
