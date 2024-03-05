import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";

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
      </main>
    </div>
  );
}
