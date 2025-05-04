import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { navItems } from "@/lib/constants";
import { useTheme } from "@/components/theme-provider";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]);
  const headerBgDark = useTransform(scrollY, [0, 50], ["rgba(10, 10, 17, 0)", "rgba(10, 10, 17, 0.9)"]);

  const { theme } = useTheme(); // Get current theme from context

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setHasScrolled(window.scrollY > 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme-related styles to the header when theme changes
    const header = document.querySelector("header");
    if (header) {
      header.classList.remove("light", "dark");
      header.classList.add(theme);

      if (theme === "dark") {
        header.style.backgroundColor = "rgba(10, 10, 17, 0.9)";
      } else {
        header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      }
    }
  }, [theme]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${hasScrolled ? "shadow-md" : "shadow-none"}`}
        style={{
          backgroundColor: theme === "dark" ? headerBgDark.get() : headerBg.get(),
        }}
      >
        <div className="container mx-auto py-3 px-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-primary">VCN</h1>
          </a>
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex mr-2">
              <ul className="flex items-center gap-1">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className={`relative px-3 py-2 text-sm transition rounded-md hover:text-primary ${
                        activeSection === name.toLowerCase() ? "text-primary" : "text-foreground/80"
                      }`}
                    >
                      {name}
                      {activeSection === name.toLowerCase() && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                          layoutId="navbar-indicator"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(true)}
              className="rounded-full"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} />
    </>
  );
}
