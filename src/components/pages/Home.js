import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Art from '../Art';
import GetStarted from '../GetStarted';
import Loom from '../Loom';
import MidSection from '../MidSection';
import LastSection from '../LastSection';
import Footer from '../Footer';



function Home() {
  return (
    <>
     <HeroSection />
     <Cards />
     <Art />
     <GetStarted />
     <Loom />
     <MidSection />
     <LastSection />
     <Footer />
    </>
  );
}

export default Home;