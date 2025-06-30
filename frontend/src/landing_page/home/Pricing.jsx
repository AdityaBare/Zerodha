import React from 'react';
import "../home/Pricing.css";

function Pricing() {
    return (  
        <div className='container p-5 mb-5'>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className="col-lg-5 mt-sm-5">
                    <div className="row">
                        <div className="col-4 offers col-sm-3 border">                        
                            <img src="/pricing0.svg" alt="Free account" />
                            <p>Free account opening</p>
                        </div>
                        <div className="col-4 offers col-sm-3 border">
                            <img src="/pricing0.svg" alt="Equity & mutual funds" />
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col-4 offers col-sm-3 border">
                            <img src="/intradayTrades.svg" alt="Intraday" />
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
                <a href="#">See pricing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    );
}

export default Pricing;
