import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DownloadIcon, ArrowDownIcon, FileTextIcon, VideoIcon } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { SocialIcons } from "@/components/social-icons";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaPalette } from "react-icons/fa";

export function HeroSection() {
  const { ref } = useSectionInView("home");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Professional titles for carousel
  const titles = [
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "PHP Laravel Developer",
    "UI/UX Enthusiast",
    "NCC Cadet"
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState(titles[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Current title being displayed
    const currentTitle = titles[titleIndex];
    
    // If in deleting mode and no text left, move to typing mode with next title
    if (isDeleting && displayTitle === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(100);
      return;
    }
    
    // If typing complete, pause then start deleting
    if (!isDeleting && displayTitle === currentTitle) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
      return () => clearTimeout(timeout);
    }
    
    // Handle typing animation
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
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-gradient-to-b from-background via-background/95 to-primary/5"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] dark:opacity-[0.03]" />
        
        {/* Floating tech icons */}
        {floatingIcons.map(({ Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x, y }}
            animate={{ 
              opacity: [0, 0.7, 0.3],
              x: [x, x + 10, x - 10, x],
              y: [y, y - 10, y + 10, y]
            }}
            transition={{ 
              delay,
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
            className="absolute top-1/2 left-1/2 text-primary/30 dark:text-primary/20"
          >
            <Icon size={index % 2 === 0 ? 48 : 40} />
          </motion.div>
        ))}
        
        {/* Gradient circles */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="container px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y, opacity }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
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
                    <span className="inline-block w-1 h-6 ml-1 bg-primary animate-blink absolute" 
                      style={{ visibility: isDeleting ? 'visible' : 'visible' }}></span>
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Passionate about creating immersive digital experiences through elegant code and thoughtful design. 
                Currently a B.Tech CSE student at Lovely Professional University.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button asChild size="lg" className="rounded-full px-6 bg-primary hover:bg-primary/90">
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
                  <a href="/resume.pdf" download="Vivek_Chand_Nirala_Resume.pdf">
                    <FileTextIcon className="mr-2 h-4 w-4" /> Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5">
                  <a href="#portfolio" onClick={() => alert("Video CV coming soon!")}>
                    <VideoIcon className="mr-2 h-4 w-4" /> Video CV
                  </a>
                </Button>
              </div>
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

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Hero image with decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full"></div>
              
              <motion.div 
                className="absolute inset-4 bg-white dark:bg-black rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                animate={{ 
                  boxShadow: [
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)", 
                    "0 0 20px 5px rgba(99, 102, 241, 0.4)", 
                    "0 0 10px 2px rgba(99, 102, 241, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {/* SVG profile illustration */}
                <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="200" cy="200" r="200" fill="currentColor" fillOpacity="0.05" />
                  <path d="M200 350C255.228 350 300 305.228 300 250C300 194.772 255.228 150 200 150C144.772 150 100 194.772 100 250C100 305.228 144.772 350 200 350Z" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="200" cy="180" r="60" fill="currentColor" fillOpacity="0.2" />
                  <path d="M125 320C125 275.817 158.579 240 200 240C241.421 240 275 275.817 275 320" stroke="currentColor" strokeWidth="24" strokeLinecap="round" className="text-primary" />
                  
                  {/* Decorative elements */}
                  <path d="M120 120L150 150" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-primary" />
                  <path d="M280 120L250 150" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-primary" />
                  <circle cx="320" cy="200" r="15" fill="currentColor" className="text-primary" fillOpacity="0.5" />
                  <circle cx="80" cy="200" r="15" fill="currentColor" className="text-primary" fillOpacity="0.5" />
                  
                  <text x="200" y="400" fill="currentColor" fontSize="24" fontWeight="bold" textAnchor="middle" className="text-primary">VCN</text>
                </svg>
              </motion.div>
              
              {/* Decorative floating elements */}
              <motion.div
                className="absolute w-16 h-16 bg-primary/20 rounded-lg -top-5 -left-5 backdrop-blur-md border border-white/20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }} 
                transition={{ duration: 5, repeat: Infinity }}
              >
                <FaCode className="w-8 h-8 m-4 text-primary" />
              </motion.div>
              
              <motion.div
                className="absolute w-16 h-16 bg-primary/20 rounded-lg -bottom-5 -right-5 backdrop-blur-md border border-white/20"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }} 
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <FaServer className="w-8 h-8 m-4 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="mb-2 text-sm font-medium">Explore More</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDownIcon className="h-6 w-6" />
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Hero section divider wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
