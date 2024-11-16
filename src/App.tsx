import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import CryptoList from './components/CryptoList';
import News from './components/News';
import Learn from './components/Learn';
import Portfolio from './components/Portfolio';
import Community from './components/Community';
import Security from './components/Security';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
      <Layout>
        <Hero />
        <Features />
        <CryptoList />
        <Portfolio />
        <News />
        <Learn />
        <Community />
        <Security />
        <About />
        <Contact />
      </Layout>
  );
}

export default App;