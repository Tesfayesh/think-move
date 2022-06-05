import React from "react";
import Header from './components/header/Header'
import Hero from "./components/hero/Hero";
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      
      <Header />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
