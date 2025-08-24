import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Hi, I'm <span className="text-primary">Keshav Jha</span> 👋
            </h3>

            <p className="text-muted-foreground">
              I am a passionate <strong>Web Developer</strong> currently pursuing my 
              <strong> B.Tech in Computer Science & Engineering</strong> from 
              <strong> Roorkee Institute of Technology</strong>.
            </p>

            <p className="text-muted-foreground">
              As a fresher, I focus on building modern, responsive, and user-friendly 
              websites and applications. I enjoy exploring new tools and frameworks 
              to improve my skills and stay updated in the fast-paced tech world.
            </p>

            <p className="text-muted-foreground">
              My core skills include <strong>React.js</strong>, <strong>Next.js</strong>, 
              <strong> Tailwind CSS</strong>, <strong>HTML/CSS</strong>, and 
              <strong> PostgreSQL</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1q0CbLZgHjm05q5TFobdJKZwexhVwdmTPb_CAJmx4NEQ/edit?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Content - Skills / Highlights */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Skilled in building responsive and interactive UIs using 
                    React.js, Next.js, Tailwind CSS, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Focus</h4>
                  <p className="text-muted-foreground">
                    Passionate about creating clean, user-friendly designs that 
                    improve usability and provide a seamless experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Knowledge</h4>
                  <p className="text-muted-foreground">
                    Familiar with databases like PostgreSQL and building full-stack 
                    applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
