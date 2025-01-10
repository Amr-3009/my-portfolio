import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
    </BrowserRouter>
  );
}

export default App;
