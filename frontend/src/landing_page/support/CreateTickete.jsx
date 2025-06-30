import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <h3 className="text-muted mt-5 fs-4">
        To create a ticket, select a relevant topic
      </h3>

      <div className="row text-start mt-5">
        <div className="col-md-4 createTicket">
          <h4 ><i class="fa-solid fa-plus"></i>&nbsp;Account Opening</h4>
          <a href="">Resident individual</a>
          <a href="">Minor</a>
          <a href="">Non Resident Indian (NRI)</a>
          <a href="">Company, Partnership, HUF and LLP</a>
          <a href="">Glossary</a>
        </div>
        <div className="col-md-4  createTicket">
          <h4 ><i class="fa-regular fa-circle-user"></i>&nbsp;Your Zerodha Account</h4>
          <a href="">Your Profile</a>
          <a href="">Account modification</a>
          <a href="">
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a href="">Nomination</a>
          <a href="">Transfer and conversion of securities</a>
        </div>
        <div className="col-md-4 createTicket">
          <h4 >  Kite</h4>

          <a href="">IPO</a>
          <a href="">Trading FAQs</a>
          <a href="">Margin Trading Facility (MTF) and Margins</a>
          <a href="">Charts and orders</a>
          <a href="">Alerts and Nudges</a>
        </div>
      </div>
      <div className="row text-start">
        {/* Funds */}
        <div className="col-md-4 createTicket">
          <h4>💳 Funds</h4>
          <a href="#">Add money</a>
          <br />
          <a href="#">Withdraw money</a>
          <br />
          <a href="#">Add bank accounts</a>
          <br />
          <a href="#">eMandates</a>
        </div>

        {/* Console */}
        <div className="col-md-4 createTicket">
          <h4>📊 Console</h4>
          <a href="#">Portfolio</a>
          <br />
          <a href="#">Corporate actions</a>
          <br />
          <a href="#">Funds statement</a>
          <br />
          <a href="#">Reports</a>
          <br />
          <a href="#">Profile</a>
          <br />
          <a href="#">Segments</a>
        </div>

        {/* Coin */}
        <div className="col-md-4 createTicket">
          <h4>⏱️ Coin</h4>
          <a href="#">Mutual funds</a>
          <br />
          <a href="#">National Pension Scheme (NPS)</a>
          <br />
          <a href="#">Features on Coin</a>
          <br />
          <a href="#">Payments and Orders</a>
          <br />
          <a href="#">General</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
