import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function useSectionInView(sectionId: string, threshold = 0.5) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
  });
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      setActiveSection(sectionId);
    }
  }, [isInView, sectionId]);

  return { ref, activeSection };
}
