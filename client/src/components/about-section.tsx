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
          {/* Image Section */}
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="md:w-1/3"
>
  <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[450px] md:h-[500px]">
    <img
      src="/about-profile.jpg"
      alt="Profile"
      className="object-cover w-full h-full"
    />
  </div>
</motion.div>

          {/* Text Section */}
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
                I’m Vivek Chand Nirala, a passionate <strong>Full Stack Web Developer</strong> and creative problem-solver, currently pursuing B.Tech in <strong>Computer Science and Engineering</strong> at <strong>Lovely Professional University</strong>.
              </p>

              <p>
                With a strong foundation in the <strong>MERN stack (MongoDB, Express, React, Node.js)</strong>, I specialize in building modern, responsive, and dynamic web applications. Alongside coding, I also have a deep interest in <strong>graphic design</strong>, working with tools like <strong>Canva, CorelDraw, and Photoshop</strong> to create visually engaging digital content.
              </p>

              <p>
                Over the years, I’ve worked on a variety of real-world projects — from developing the official <strong>LPU NCC website</strong> during my internship, to designing platforms like <strong>Indian Army Portal</strong> and <strong>Hostel Management System</strong>. These experiences have taught me not only technical skills but also how to work under pressure, manage time, and lead with responsibility.
              </p>

              <p>
                What makes my journey unique is my strong foundation in discipline and leadership, built through my active involvement in <strong>NCC</strong> and sports. I’ve attended 10 NCC camps—including <strong>2 National, 3 State Level Camp and Army Attachment</strong>—and hold a <strong>C-Certificate</strong>. As a <strong>State Athlete, House Captain, and Sports Captain</strong> during my school days, I developed teamwork and resilience early on. I was also honored to be among the <strong>Top 50</strong> LPU students selected to visit the <strong>Parliament of India</strong> under the guidance of <strong>Ashok Mittal Sir (MP, Rajya Sabha)</strong>.
              </p>

              <p>
                I’m always excited to take on new challenges, collaborate with like-minded people, and keep learning something new every day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
