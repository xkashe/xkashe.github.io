import React from 'react';
import Header from 'sections/Header';
import Videos from 'sections/Videos';
import Edits from 'sections/Edits';
import GlobalStyles from './GlobalStyles';
import About from 'sections/About';
import Footer from 'sections/Footer';

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <Videos />
    <Edits />
    <About />
    <Footer />
  </>
);

export default App;
