import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { FaCode, FaJava, FaDatabase, FaAws, FaPhp, FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiMysql, SiPython, SiMongodb, SiCanva, SiAdobephotoshop, SiExpress, SiLaravel, SiCplusplus } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface SkillCardProps {
  name: string;
  delay?: number;
}

// Function to get the appropriate icon for each skill
function getSkillIcon(name: string) {
  const iconSize = 36;
  const iconStyle = {className: "mb-3 transition-all group-hover:scale-110"};
  
  // Map skill names to their respective icons
  switch(name.toLowerCase()) {
    // Languages
    case "c++": return <SiCplusplus size={iconSize} {...iconStyle} color="#00599C" />;
    case "java": return <FaJava size={iconSize} {...iconStyle} color="#007396" />;
    case "javascript": return <SiJavascript size={iconSize} {...iconStyle} color="#F7DF1E" />;
    case "python": return <SiPython size={iconSize} {...iconStyle} color="#3776AB" />;
    case "sql": return <SiMysql size={iconSize} {...iconStyle} color="#4479A1" />;
    
    // Frontend
    case "html5": return <FaHtml5 size={iconSize} {...iconStyle} color="#E34F26" />;
    case "css3": return <FaCss3Alt size={iconSize} {...iconStyle} color="#1572B6" />;
    case "bootstrap": return <FaBootstrap size={iconSize} {...iconStyle} color="#7952B3" />;
    case "react.js": return <FaReact size={iconSize} {...iconStyle} color="#61DAFB" />;
    
    // Backend
    case "node.js": return <FaNodeJs size={iconSize} {...iconStyle} color="#339933" />;
    case "express.js": return <SiExpress size={iconSize} {...iconStyle} color="#000000" />;
    case "php": return <FaPhp size={iconSize} {...iconStyle} color="#777BB4" />;
    case "laravel": return <SiLaravel size={iconSize} {...iconStyle} color="#FF2D20" />;
    
    // Databases
    case "mongodb": return <SiMongodb size={iconSize} {...iconStyle} color="#47A248" />;
    case "mysql": return <SiMysql size={iconSize} {...iconStyle} color="#4479A1" />;
    
    // Tools
    case "vs code": return <VscCode size={iconSize} {...iconStyle} color="#007ACC" />;
    case "github": return <FaGithub size={iconSize} {...iconStyle} color="#181717" />;
    case "canva": return <SiCanva size={iconSize} {...iconStyle} color="#00C4CC" />;
    case "intellij": return <FaCode size={iconSize} {...iconStyle} color="#000000" />;
    case "adobe photoshop": return <SiAdobephotoshop size={iconSize} {...iconStyle} color="#31A8FF" />;
    case "coreldraw": return <FaCode size={iconSize} {...iconStyle} color="#DD0531" />;
    
    // Cloud
    case "aws (intermediate)": return <FaAws size={iconSize} {...iconStyle} color="#FF9900" />;
    case "render (deployment)": return <FaCode size={iconSize} {...iconStyle} color="#46E3B7" />;
    
    // Default
    default: return <FaCode size={iconSize} {...iconStyle} color="#6366F1" />;
  }
}

export function SkillCard({ name, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group bg-background border border-border/50 rounded-lg p-6 shadow-md hover:shadow-lg hover:border-primary/50 transition-all flex flex-col items-center justify-center text-center"
    >
      {getSkillIcon(name)}
      <Badge variant="secondary" className="text-sm font-medium px-3 py-1 group-hover:bg-primary group-hover:text-white transition-colors">
        {name}
      </Badge>
    </motion.div>
  );
}
