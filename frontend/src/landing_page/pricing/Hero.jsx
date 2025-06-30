import React from "react";

function Hero() {
  return (
    <div className="container text-center">
      <h1 style={{ marginTop: "7rem", fontSize: "3rem", height: "0.4rem" }}>
        Charges
      </h1>
      <p className="fs-5 text-muted" style={{ marginBottom: "15rem" }}>
        List of all charges and taxes
      </p>

      <div className="row">
        <div className="col-lg-4 col-sm-12">
          <img src="/pricing0.svg" style={{ width: "55%" }} alt="Free equity delivery" />
          <h1 className="mt-5 fs-1">Free equity delivery</h1>
          <p className="text-muted fs-5">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-sm-12">
          <img src="/intradayTrades.svg" style={{ width: "55%" }} alt="Intraday and F&O" />
          <h1 className="mt-5 fs-1">Intraday and F&O trades</h1>
          <p className="text-muted fs-5">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
            currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>

        <div className="col-lg-4 col-sm-12">
          <img src="/pricing0.svg" style={{ width: "55%" }} alt="Free direct MF" />
          <h1 className="mt-5 fs-1">Free direct MF</h1>
          <p className="text-muted fs-5">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
