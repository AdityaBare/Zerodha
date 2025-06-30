import React from 'react';
function Hero() {
    return (
        <>
         <div className="container text-center " style={{marginTop:"5rem" ,width:"80%"}}>
          <h1 className='fs-1 '  style={{margin:"8rem"}}>We pioneered the discount broking model in India.
Now, we are breaking ground with our technology.</h1>
         </div>
   <hr className='ms-5 me-5'/>
         <div className="row p-5 " style={{marginLeft:"auto"}}>
          <div className="col-lg-2"></div>
          <div className="col-lg-4 text-start text-muted ">
            <p className='fs-6'>
We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.            </p>
<p className='fs-6'>
  Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
</p>
<p className='fs-6'>
  Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
</p>


          </div>
          <div className="col-lg-4 text-start text-muted ">
            <p className='fs-6'>
  In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
</p>
<p className='fs-6'>
  <a href="">Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
</p>
<p className='fs-6'>
  And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="">blog</a> or see what the media is <a href=""> saying about us</a> or learn more about our business and product <a href="">philosophies</a>.
</p>
            
          </div>
          <div className="col-lg-2"></div>
         </div>
        </>
      );
}

export default Hero;