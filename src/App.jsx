import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { Skills } from "./components/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Section Hero avec design responsive */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* Sections principales */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Skills />
          {/* <Feedbacks /> */}
        </div>

        {/* Section Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
