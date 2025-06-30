import React from 'react';

function LeftImage({ imgURL, productHeading, productDescription, link1, link2 }) {
    return ( 
        <div className="container mt-5">
            <div className="row p-3 mt-5">
                <div className="col-lg-6">
                    <img src={imgURL} alt="Product visual" />
                </div>
                <div className="col-lg-6 text-start mt-5">
                    <h1 style={{ height: "0.5rem", fontSize: "3rem" }}>{productHeading}</h1>
                    <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>{productDescription}</p>

                    <div className="row mb-3">
                        <a className='col-sm-12 col-lg-6' style={{ fontSize: "1.1rem", fontWeight: "500" }} href="#">{link1}<i className="fa-solid fa-arrow-right"></i></a>
                        <a className='col-sm-12 col-lg-6' style={{ fontSize: "1.1rem", fontWeight: "500" }} href="#">{link2}<i className="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div style={{ display: "inline" }}>
                        <a href="#"><img src="/googlePlayBadge.svg" alt="Google Play" style={{ width: "25%" }} /></a>
                        <a href="#"><img src="/appstoreBadge.svg" alt="App Store" style={{ width: "22%", marginLeft: "2rem" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftImage;
