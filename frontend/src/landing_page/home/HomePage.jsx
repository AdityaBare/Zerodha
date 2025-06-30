import React from 'react';
import Pricing from './Pricing';
import Sats from './Sats';
import Hero from './Hero';
import OpenAccount from '../OpenAccount'

import Award from './Award'
import Education from './Education'

function HomePage() {
    return (
        <>
        
        <Hero/>
        <Award/>
        <Sats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        
        </>
      );
}

export default HomePage;