import React from 'react';
import logo from './logo.svg';
import './App.css';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LightDarkSwitch } from './styled-components/light-dark-switch';
import {Hero} from './components/Hero'
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Box } from '@mui/material';
import GoogleFontLoader from 'react-google-font';
import { motion } from 'framer-motion';




function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(theme => !theme)
  }

  return (
    <>
    <GoogleFontLoader
        fonts={[
          {
            font: 'Roboto',
            weights: [400, '400i'],
          },
          {
            font: 'Roboto Mono',
            weights: [400, 700],
          },
          {
            font: 'Didact Gothic',
            weights: [700, 700],
          },
          {
            font: 'Arimo',
            weights: [400, 700],
          },
          // 
          {
            font: 'Open Sans',
            weights: [400, 700],
          },
          {
            font: 'Alegreya Sans',
            weights: [400, 700],
          }
        ]}
        subsets={['cyrillic-ext', 'greek']}
      />

            {/* <p style={{ fontFamily: 'Roboto Mono, monospaced' }}>This will be in Roboto Mono!</p>
            <p style={{ fontFamily: 'Roboto, sans-serif' }}>This will be in Roboto!</p>
            <p style={{ fontFamily: 'Didact Gothic, sans-serif' }}>DIDACT GOTHIC</p> */}
        <ThemeProvider theme={theme? darkTheme: lightTheme}>
          <CssBaseline />
          <Navbar toggleTheme={toggleTheme}/>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default App;
