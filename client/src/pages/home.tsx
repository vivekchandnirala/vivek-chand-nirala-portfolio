import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";

// Placeholder component -  Replace with actual implementation
// const GraphicDesignSection = () => <div>Graphic Design Section</div>;


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        {/* <GraphicDesignSection /> */}
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}