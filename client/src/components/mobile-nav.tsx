import { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export function MobileNav({ isOpen, setIsOpen, activeSection }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Fragment>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-background border-l border-border z-50 md:hidden p-5 overflow-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-primary">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="rounded-full"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav>
              <ul className="space-y-3">
                {navItems.map(({ name, href }) => (
                  <li key={name}>
                    <a
                      href={href}
                      className={`block py-2 text-lg ${
                        activeSection === name.toLowerCase()
                          ? "text-primary font-medium"
                          : "text-foreground/80"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </Fragment>
      )}
    </AnimatePresence>
  );
}
