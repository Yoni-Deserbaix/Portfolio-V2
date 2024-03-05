import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
