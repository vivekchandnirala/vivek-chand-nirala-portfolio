import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { userData } from "@/data";

export function AboutSection() {
  const { ref } = useSectionInView("about");

  return (
    <section
      id="about"
      ref={ref}
      className="py-16 md:py-24 bg-muted/30"
    >
      <div className="container px-4 mx-auto">
        <SectionTitle>About Me</SectionTitle>
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-primary/10 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20"></div>
              <svg 
                viewBox="0 0 200 200" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute inset-0 w-full h-full opacity-25"
              >
                <circle cx="100" cy="100" r="100" fill="currentColor" />
                <path 
                  d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" 
                  fill="white" 
                  fillOpacity="0.2" 
                />
                <circle cx="100" cy="85" r="30" fill="white" fillOpacity="0.4" />
                <path 
                  d="M55 165C55 137.386 75.6262 115 100 115C124.374 115 145 137.386 145 165" 
                  stroke="white" 
                  strokeWidth="12" 
                  strokeLinecap="round" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white">
                VCN
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-2/3"
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">{userData.fullName}</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a <strong>B.Tech CSE Student</strong> specializing in Full Stack Development at 
                <strong> Lovely Professional University</strong> (2022–2026) with a CGPA of <strong>8.01</strong>.
              </p>
              
              <p>
                Originally from Bihar and brought up in Agra, I'm a passionate Full Stack Web Developer 
                with strong experience in both frontend and backend development.
              </p>
              
              <p>
                Beyond coding, I serve as the <strong>Social Media Head of LPU NCC</strong> and am an 
                <strong> A-Certificate NCC Cadet</strong>. I'm also a creative Graphic Designer with experience 
                in Canva, CorelDraw, and Adobe Photoshop.
              </p>
              
              <p>
                In my school days, I was a State Athlete, House Captain, and Sports Captain. I've completed 
                10 NCC camps, including National and Army Attachment. I was selected among the 
                <strong> Top 50 LPU students</strong> and visited the Parliament of India under the guidance 
                of Ashok Mittal Sir (MP, Rajya Sabha).
              </p>
              
              <p>
                I actively participate in various events like debates, extempore, group discussions, pitch 
                presentations, and more.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Name</span>
                <span className="font-medium">{userData.fullName}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{userData.email}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="font-medium">{userData.phone}</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Education</span>
                <span className="font-medium">B.Tech CSE (2022-2026)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
