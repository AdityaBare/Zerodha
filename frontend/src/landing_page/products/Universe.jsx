import React from 'react';

function Universe() {
    return ( 
        <div className="container text-center mt-5">
            <p style={{ marginTop: "10rem", fontSize: "1.4rem" }}>
                Want to know more about our technology stack? Check out the <a href="#">Zerodha.tech</a> blog.
            </p>
            <h1 className='mt-5' style={{ height: "0.5rem" }}>
                The Zerodha Universe
            </h1>
            <p className='fs-5 mb-5'>
                Extend your trading and investment experience even further with our partner platforms
            </p>

            <div className="row text-center ps-5 pe-5 mt-5">

                <div className="col-lg-4 col-sm-6 mb-5">
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/zerodhaFundhouse.png" alt="Zerodha Fundhouse" />
                        <p className='p-5 text-muted'>
                            Our asset management venture that is creating simple and transparent index funds to help you save for your goal.
                        </p>
                    </div>
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/streakLogo.png" alt="Streak" />
                        <p className='p-5 text-muted'>
                            Systematic trading platform that allows you to create and backtest strategies without coding.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-5">
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/sensibullLogo.svg" alt="Sensibull" />
                        <p className='p-5 text-muted'>
                            Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/smallcaseLogo.png" alt="Smallcase" />
                        <p className='p-5 text-muted'>
                            Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-6 mb-5">
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/goldenpiLogo.png" alt="GoldenPi" />
                        <p className='p-5 text-muted'>
                            Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                        </p>
                    </div>
                    <div>
                        <img style={{ width: "50%", margin: "auto" }} src="/dittoLogo.png" alt="Ditto" />
                        <p className='p-5 text-muted'>
                            Personalized advice on life and health insurance. No spam and no mis-selling.
                        </p>
                    </div>
                </div>

            </div>

            <button className="btn fs-6 mb-5 btn-lg" style={{ margin: "auto", backgroundColor: "#3792cb", color: 'white', width: "170px" }}>
                Sign up for free
            </button>
        </div>
    );
}

export default Universe;
