import React from 'react';
import '../home/Sats.css';

function Sats() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-3">
                    <h1 className='title'>Trust with confidence</h1>
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="#">Our philosophies.</a>
                    </p>

                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h4>Do better with money</h4>
                    <p className='text-muted'>
                        With initiatives like <a href="#">Nudge</a> and <a href="#">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <img src="/ecosystem.png" alt="Ecosystem" />
                    <div className='row ecoTag'>
                        <a href="#">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="#">Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sats;
