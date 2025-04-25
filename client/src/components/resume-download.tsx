import { Button, ButtonProps } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

interface ResumeDownloadProps extends ButtonProps {}

export function ResumeDownload({ variant = "default", size, ...props }: ResumeDownloadProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild
      {...props}
    >
      <a href="/resume.pdf" download="Vivek_Chand_Nirala_Resume.pdf">
        <DownloadIcon className="mr-2 h-4 w-4" />
        <span>Download CV</span>
      </a>
    </Button>
  );
}
