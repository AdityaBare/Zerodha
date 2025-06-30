import React from 'react';
function Charges() {
    return ( 
       <div className="container">
        <div className="row">
  <div className="col-lg-6">


        
        <h2 className='mt-5'>Charges explained</h2>
        <h4>
            Securities/Commodities transaction tax
        </h4>
        <p>
            Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.
        </p>
        <p>
            When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.
        </p>
       <h4>
        Transaction/Turnover Charges
       </h4>
       <p>
        Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.
       </p>
       <p>
        BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)
       </p>
       <p>
        BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.
       </p>

       <p>
        BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.
       </p>
       <p>
        BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.
       </p>
       <h4>
        Call & trade
       </h4>
       <p>
        Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.
       </p>
       <h4>
        Stamp charges
       </h4>
       <p>
        Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.
       </p>
         </div>

         <div className="col-lg-6 col-sm-12">
            <h4>GST</h4>
<p>Tax levied by the government on the services rendered. 18% of (brokerage + SEBI charges + transaction charges)</p>

<h4>SEBI Charges</h4>
<p>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

<h4>DP (Depository Participant) Charges</h4>
<p>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>


<h4>Pledging Charges</h4>
<p>₹30 + GST per pledge request per ISIN.</p>

<h4>AMC (Account Maintenance Charges)</h4>
<ul>
  <li>For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. <a href="#">Learn more about BSDA</a>.</li> <br />
  <li>For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (every 90 days). <a href="#">Learn more about AMC</a>.</li>
</ul>

<h4>Corporate Action Order Charges</h4>
<p>₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

<h4>Off-Market Transfer Charges</h4>
<p>₹25 per transaction.</p>

<h4>Physical CMR Request</h4>
<ul>
  <li>First CMR request is free.</li> <br />
  <li>₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</li>
</ul>

<h4>Payment Gateway Charges</h4>
<p>₹9 + GST (Not levied on transfers done via UPI)</p>

<h4>Delayed Payment Charges</h4>
<p>Interest is levied at 18% per year or 0.05% per day on the debit balance in your trading account. <a href="#">Learn more</a>.</p>

<h4>Trading Using 3-in-1 Account with Block Functionality</h4>
<ul>
  <li>Delivery & MTF Brokerage: 0.5% per executed order.</li> <br />
  <li>Intraday Brokerage: 0.05% per executed order.</li>
</ul>

         </div>
</div>
       </div>
     );
}

export default Charges;