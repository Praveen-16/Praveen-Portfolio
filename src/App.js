import Hero from './components/hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GoToTheTop from './components/GoToTheTop';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import NavBar from './components/navbar';
import Footer from './components/footer';


function App() {
  return (
    <>
    <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      <GoToTheTop />
    </>
  );
}

export default App;
