import Hero from "./sections/hero/Hero";
import Contact from "./sections/contact/Contact";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="#services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
