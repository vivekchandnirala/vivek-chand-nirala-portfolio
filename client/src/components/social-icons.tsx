import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Linkedin, Github, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { userData } from "@/data";

export function SocialIcons() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: userData.linkedIn,
      color: "hover:text-[#0077B5] hover:border-[#0077B5]"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: userData.github,
      color: "hover:text-[#333] dark:hover:text-white hover:border-[#333] dark:hover:border-white"
    },
    // {
    //   name: "Instagram",
    //   icon: <Instagram className="h-5 w-5" />,
    //   url: userData.instagram,
    //   color: "hover:text-[#E4405F] hover:border-[#E4405F]"
    // },
    // {
    //   name: "Facebook",
    //   icon: <Facebook className="h-5 w-5" />,
    //   url: userData.facebook,
    //   color: "hover:text-[#1877F2] hover:border-[#1877F2]"
    // },
    {
      name: "YouTube",
      icon: <Youtube className="h-5 w-5" />,
      url: userData.youtube,
      color: "hover:text-[#FF0000] hover:border-[#FF0000]"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:${userData.email}`,
      color: "hover:text-primary hover:border-primary"
    },
  ];

  return (
    <div className="flex items-center flex-wrap gap-3">
      <TooltipProvider>
        {socialLinks.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`rounded-full h-10 w-10 border border-border transition-colors ${social.color}`}
                  asChild
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        ))}
      </TooltipProvider>
    </div>
  );
}
