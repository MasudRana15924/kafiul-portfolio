import React from 'react';
import Banner from './Banner';
import About from './About';
import Education from './Education';
import Stats from './Stats';
import Freelancing from './Freelancing';
import Touch from './Touch';
import Works from './Works';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <About></About>
          <Education></Education>
          <Works></Works>
          <Stats></Stats>
          <Freelancing></Freelancing>
          <Touch></Touch>
        
        </div>
    );
};

export default Home;