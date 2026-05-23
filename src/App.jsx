import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Projects,
  // Education,
  Contact,
  Footer,
  Timeline,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      {/* <Education /> */}
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
