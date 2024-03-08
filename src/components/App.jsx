import React from 'react';
import Header from 'sections/Header';
import Edits from 'sections/Edits';
import VFX from 'sections/VFX';
import Videos from 'sections/Videos';
import GlobalStyles from './GlobalStyles';
import About from 'sections/About';
import Footer from 'sections/Footer';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Videos />
    <VFX />
    <Edits />
    <About />
    <Footer />
  </>
);

export default App;
