import React from 'react';

function Education() {
    return (  
        <>
        <div className="container mt-5 mb-5 p-lg-5">
            <div className="row">
                <div className="col-6">
                    <img src="/education.svg" alt="Education" />
                </div>
                <div className="col-6">
                    <h1 className='fs-3 text-muted' style={{height: "1rem"}}>Free and open market education</h1>

                    <p className='text-muted'>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className='fs-6'>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className='text-muted'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href="#" className='fs-6'>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Education;
