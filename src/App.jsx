import { About } from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import Tech_stack from "./components/Tech_stack";


function App() {
  return (
    <div className="relative">
      {/* Hero section (with exploding beam inside it) */}
      <section className="relative z-10 bg-black">
        <Hero />
      </section>

      {/* Stars + Shooting Stars appear globally behind everything else */}
      <StarsBackground />
      <ShootingStars />

      {/* Other sections will show stars */}
      <About />
     < Tech_stack />
      <Projects />
      
    </div>
  );
}

export default App;
