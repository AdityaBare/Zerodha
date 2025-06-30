import React from 'react';

function Award() {
    return ( 
       <div className='container mt-5 p-5'>
        <div className='row'> 
            <div className='col-lg-6 col-sm-12 mb-4'> 
                <img src="/largestBroker.svg" alt="Largest Broker" />
            </div>
            <div className='col-lg-6 col-sm-12'>
                <h1>Largest stock broker in India</h1>
                <p className='mt-3'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className="row mt-4">
                    <div className='col-6'>
                        <ul>
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Gov. Securities</p></li>
                        </ul>
                    </div>
                </div>
                <img src="/pressLogos.png" alt="Press" style={{width: "90%"}} />
            </div>
        </div>
       </div>
     );
}

export default Award;
