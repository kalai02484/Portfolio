import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigationbar from './components/Navbar.js';
import Home from './components/home.js';
import About from './components/About';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/Skill.js';
import Projects from './components/Projects.js';


function App() {
  return (
      <div className="App">
          <Navigationbar /> 
          <Home />
          <About />
          <Education />
          <Skill />
          <Projects />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
