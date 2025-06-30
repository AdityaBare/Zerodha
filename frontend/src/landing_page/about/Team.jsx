import React from 'react';
import {Link} from 'react-router-dom'
function Team() {
    return ( 
        <>
          <div className="container text-center mt-2 " style={{width:"80%"}}>
            <h1 className='mt-2 fs-1'>People</h1>

            <div className="row">
              <div className="col-lg-1"></div>
                <div className="col-lg-4 col-sm-12">
                    <img src="/nithinKamath.jpg" className='rounded-circle ' style={{width:"70"}} alt="" />
                    <h6 className='fs-5 mt-4'>Nithin Kamath</h6>
                    <p className='text-muted fs-5 mt-4'>Founder, CEO</p>
                </div>
                <div className="col-lg-6 col-sm-12 mt-lg-5 pt-lg-2  text-start " style={{height:"20rem",fontWeight:'medium'}}>
                    <p className='text-muted fs-5' >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className='text-muted fs-5'>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p className='text-muted fs-5'>
                        Playing basketball is his zen.


                    </p>
                    <p className='text-muted'>
                        Connect on <Link to="/">HomePage</Link>/
                        <Link>TradingQnA</Link>/
                        <Link>Twitter</Link>
                    </p>

                </div>
                 <div className="col-lg-2"></div>
            </div>

               
          </div>
        </>
     );
}

export default Team;