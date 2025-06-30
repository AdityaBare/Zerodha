import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return (  
      <div className='container'>
        <div className='row text-center'>
          <img src='/homeHero.png' alt="Hero IMG" className='mb-5 p-4' style={{width: '80%', margin: 'auto'}} />

          <h1 className='mt-5 text-muted' style={{height: "1rem"}}>Invest in everything</h1>

          <p className='fs-6'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>

          <Link to="/signup">
            <button className="btn fs-6 mb-5 btn-lg" style={{margin: "auto", backgroundColor: "#3792cb", color: 'white', width: "170px"}}>
              Sign up for free
            </button>
          </Link> 
        </div>
      </div>
    );
}

export default Hero;
