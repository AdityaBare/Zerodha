import React from "react";

function Hero() {
  return (
    <div
      className="containet pb-5"
      style={{ height: "auto", backgroundColor: "#3B82D9" }}
    >
      <div
        className="d-flex justify-content-between p-3  "
        style={{ width: "78%", margin: "auto" }}
      >
        <p className="text-white fs-4 mt-lg-5">Support Portal</p>
        <p className="mt-lg-5">
          <a href="" className="text-white border-bottom fs-5 ">
            {" "}
            Track tickets
          </a>
        </p>
      </div>
      <div className="row p-lg-3  mt-lg-3  p-sm-5">
        <div className="col-lg-1  col-sm-0"></div>
        <div className="col-lg-5 text-white text-start col-sm-12 ps-lg-5 ">
          <h3 className="mb-5">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input
            type="text"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected..                              &#x1F50E;  "
            className=" form-control w-sm-100  "
            style={{ height: "4rem" }}
          />
     
          <div className="flex mt-4 ">
            <a href="" className="text-white border-bottom ">
              Track account opening
            </a>
            <a href="" className="text-white m-5	 border-bottom ">
              Track segment activation
            </a>
            <a href="" className="text-white	m-5  border-bottom ">
              {" "}
              Intraday margins
            </a>
            <a href="" className="text-white	 border-bottom ">
              Kite user manual
            </a>
          </div>
        </div>
        <div className="col-lg-6 text-white text-start col-sm-12  ml-lg-3  ">
          <h3 className="mt-sm-4">Featured</h3>
          <a href="" className="text-white  fs-5 border-bottom ">
            1.Surveillance measure on scrips - June 2025
          </a>
          <br />
          <br />
          <a href="" className="text-white fs-5	 border-bottom ">
            2.Rights Entitlements listing in June 2025
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
