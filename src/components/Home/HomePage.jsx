import About from "../About/About";
import Intro from "../About/Intro";
import Experiance from "../Experiance/Experiance";
import Projects from "../Project/Projects";
function HomePage() {
  return (
    <main className="scroll-smooth h-screen mainbox">
      <About />
      <Intro />
      <Experiance />
      <Projects />
    </main>
  );
}

export default HomePage;
