import React from 'react';

function RightImage({imgSrc,productHeading,productDescription,productLink}) {
    return ( 
        <div className="container mt-4">

        <div className="row ">
         
          <div className="col-lg-6 text-start  " style={{marginTop:"7rem" }}>
          
             <h1 className="mt-lg-5" style={{height:"0.5rem" ,fontSize:"3rem"}}>{productHeading} </h1>
             <p style={{fontSize:"1.2rem ",fontWeight:"500",width:"50%"}}>{productDescription}</p>
             <a href="" style={{fontSize:"1.1rem ",fontWeight:"500"}}>{productLink}<i class="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="col-lg-6  ">
              <img src={imgSrc} alt="" />
          </div>
        </div>
      </div>
     );
}

export default RightImage;