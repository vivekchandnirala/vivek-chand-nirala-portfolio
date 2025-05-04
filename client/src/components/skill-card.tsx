import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  name: string;
  delay?: number;
}

function getSkillIconURL(name: string): string {
  switch (name.toLowerCase()) {
    case "c++": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg";
    case "java": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
    case "javascript": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
    case "python": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
    case "sql":
    case "mysql": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg";

    // Frontend
    case "html5": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
    case "css3": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
    case "bootstrap": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg";
    case "react.js":
    case "react": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";

    // Backend
    case "node.js":
    case "node": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg";
    case "express.js":
    case "express": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg";
    case "php": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg";
    case "laravel": return "https://banner2.cleanpng.com/20180920/viw/kisspng-laravel-software-framework-web-framework-phpunit-laravel-logo-1713936591560.webp";

    // Tools
    case "vs code": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";
    case "github": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
    case "canva": return "https://img.icons8.com/color/48/canva.png";
    case "intellij": return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg";
    case "adobe photoshop": return "https://img.icons8.com/color/48/adobe-photoshop--v1.png";
    case "coreldraw": return "https://img.icons8.com/color/48/coreldraw.png";

    // Cloud
    // case "aws":
    // case "aws (intermediate)": return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1djj7gSrAd2wlRZ9kBJ9F7VS9TPnzwEegg&s";
    case "render":
    case "render (deployment)": return "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg";
    case "vercel":
    case "vercel (intermediate)": return "https://www.svgrepo.com/show/354513/vercel-icon.svg";
    case "Netlify":
    case "Netlify (deployment)": return "https://images.seeklogo.com/logo-png/27/1/netlify-logo-png_seeklogo-273744.png";
    // Default
    default: return "https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg";
  }
}

export function SkillCard({ name, delay = 0 }: SkillCardProps) {
  const iconURL = getSkillIconURL(name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={iconURL}
          alt={name}
          width={36}
          height={36}
          className="mb-3 transition-all group-hover:scale-110"
        />
        <Badge variant="outline" className="text-sm font-medium">
          {name}
        </Badge>
      </div>
    </motion.div>
  );
}
