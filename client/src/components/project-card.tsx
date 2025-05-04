import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Code, Github } from "lucide-react";
import { 
  FaReact, FaNodeJs, FaPhp, FaBootstrap, FaHtml5, FaCss3Alt, FaPython, FaCode
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiMysql, SiJavascript, SiLaravel
} from "react-icons/si";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  delay?: number;
}

// Tech stack icon mapping
const techIconMap: { [key: string]: JSX.Element } = {
  "React": <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  "Express": <SiExpress className="text-black dark:text-white" />,
  "MongoDB": <SiMongodb className="text-[#47A248]" />,
  "PHP": <FaPhp className="text-[#777BB4]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "Bootstrap": <FaBootstrap className="text-[#7952B3]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "HTML": <FaHtml5 className="text-[#E34F26]" />,
  "CSS": <FaCss3Alt className="text-[#1572B6]" />,
  "Python": <FaPython className="text-[#3776AB]" />,
  "Laravel": <SiLaravel className="text-[#FF2D20]" />,
  "Render": <FaCode className="text-[#46E3B7]" />,
  "CLI": <Code className="text-primary" />
};

// Helper function to get project background and gradient
function getProjectBackground(title: string) {
  // Different gradients for different projects
  switch(title) {
    case "LPU NCC Website":
      return "from-blue-500/20 to-indigo-500/20 via-purple-500/20";
    case "Indian Army Website":
      return "from-green-500/20 to-emerald-600/20";
    case "Hostel Management System":
      return "from-orange-500/20 to-red-500/20";
    case "Anant Bhavyatra":
      return "from-pink-500/20 to-rose-500/20";
    case "ATM Simulator":
      return "from-cyan-500/20 to-blue-500/20";
    case "University Management System":
      return "from-violet-500/20 to-purple-500/20";
    default:
      return "from-primary/20 to-primary/5";
  }
}

// Function is no longer needed since we use the global techIconMap

function getProjectImageSvg(title: string) {
  // Dynamic SVG illustration for each project
  let svgContent;
  
  switch(title) {
    case "LPU NCC Website":
      const imageUrl = "/projects/lpu-ncc-website.png";  // Replace this with the correct path to your image
      return (
        <div className="w-full h-full">
          <img src={imageUrl} alt="LPU NCC Website" className="w-full h-full object-cover rounded-lg" />
        </div>
      );
      break;
      
    case "Indian Army Website":
      const imageUrlIndianArmy = "/projects/indian-army-website.png";  // Replace with correct path
      return (
        <div className="w-full h-full">
          <img src={imageUrlIndianArmy} alt="Indian Army Website" className="w-full h-full object-cover rounded-lg" />
        </div>
      );
      break;
      
    case "Hostel Management System":
      const imageUrlHostel = "/projects/hostel-management-system.png";  // Replace with correct path
      return (
        <div className="w-full h-full">
          <img src={imageUrlHostel} alt="Hostel Management System" className="w-full h-full object-cover rounded-lg" />
        </div>
      );
      break;
      
    case "Anant Bhavyatra":
      const imageUrlAnant = "/projects/anant-bhavyatra.png";  // Replace with correct path
      return (
        <div className="w-full h-full">
          <img src={imageUrlAnant} alt="Anant Bhavyatra" className="w-full h-full object-cover rounded-lg" />
        </div>
      );
      break;
      
    case "ATM Simulator":
      svgContent = (
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="200" height="120" rx="8" fill="currentColor" fillOpacity="0.1"/>
          <rect x="50" y="40" width="100" height="60" rx="4" fill="white" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <rect x="60" y="50" width="80" height="20" rx="2" fill="white" fillOpacity="0.3" stroke="currentColor" strokeWidth="2"/>
          <rect x="60" y="80" width="15" height="10" rx="2" fill="currentColor"/>
          <rect x="82.5" y="80" width="15" height="10" rx="2" fill="currentColor"/>
          <rect x="105" y="80" width="15" height="10" rx="2" fill="currentColor"/>
          <rect x="127.5" y="80" width="15" height="10" rx="2" fill="currentColor"/>
        </svg>
      );
      return svgContent;
      break;
      
    case "University Management System":
      const imageUrlUniversity = "/projects/university-management-system.png";  // Replace with correct path
      return (
        <div className="w-full h-full">
          <img src={imageUrlUniversity} alt="University Management System" className="w-full h-full object-cover rounded-lg" />
        </div>
      );
      break;
  
    default:
      svgContent = (
        <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="200" height="120" rx="8" fill="currentColor" fillOpacity="0.1"/>
          <rect x="70" y="40" width="60" height="40" rx="4" fill="white" fillOpacity="0.2" stroke="currentColor" strokeWidth="2"/>
          <path d="M75 50H125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M75 60H125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M75 70H105" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
      return svgContent;
  }
}

export function ProjectCard({ title, description, technologies, link, delay = 0 }: ProjectCardProps) {
  const bgGradient = getProjectBackground(title);
  
  // Define icon map inside the component
  const iconMap: { [key: string]: JSX.Element } = {
    "React": <FaReact className="text-[#61DAFB]" />,
    "Node.js": <FaNodeJs className="text-[#339933]" />,
    "Express": <SiExpress className="text-black dark:text-white" />,
    "MongoDB": <SiMongodb className="text-[#47A248]" />,
    "PHP": <FaPhp className="text-[#777BB4]" />,
    "MySQL": <SiMysql className="text-[#4479A1]" />,
    "Bootstrap": <FaBootstrap className="text-[#7952B3]" />,
    "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
    "HTML": <FaHtml5 className="text-[#E34F26]" />,
    "CSS": <FaCss3Alt className="text-[#1572B6]" />,
    "Python": <FaPython className="text-[#3776AB]" />,
    "Laravel": <SiLaravel className="text-[#FF2D20]" />,
    "Render": <FaCode className="text-[#46E3B7]" />,
    "CLI": <Code className="text-primary" />
  };
  
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
        <div className={`h-40 bg-gradient-to-br ${bgGradient} flex items-center justify-center p-4 relative overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center text-primary">
            {getProjectImageSvg(title)}
          </div>
        </div>
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
          <div className="flex flex-wrap gap-3 mt-4">
            {technologies.map((tech, index) => {
              const icon = iconMap[tech] || <Code className="text-primary" />;
              return (
                <Badge key={index} variant="outline" className="text-xs flex gap-1 items-center px-2 py-1 border-primary/30 bg-primary/5">
                  <span className="mr-1">{icon}</span> {tech}
                </Badge>
              );
            })}
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/10 pt-4">
          {link ? (
            <Button variant="default" size="sm" className="w-full gap-2" asChild>
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
