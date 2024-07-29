import React from 'react'; // createContext for themes
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import { ThemeProvider } from './ThemeContext';


function App() {

// Do not include "const {theme} = useTheme();" here ==> Cannot destructure property 'theme' of '(0 , _ThemeContext__WEBPACK_IMPORTED_MODULE_9__.useTheme)(...)' as it is undefined.

  return (
    <div>
        <ThemeProvider>
        
        <Navbar />

        <Element name="home" >
          <Home />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <Element name="top">
          <ScrollToTop />
        </Element>

        <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;
