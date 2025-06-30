import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";
import Footer from "../Footer";
import Navbar from "../Navbar";

function ProductPage() {
  return (
    <>
      <Hero />
      <hr style={{ width: "70%", margin: "auto" }} />
      <br />
      <br /><br />

      <LeftImage
        imgURL="/kite.png"
        productHeading="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo "
        link2="Learn more "
      />

      <RightImage
        imgSrc="/console.png"
        productHeading="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        productLink="Learn more"
      />

      <LeftImage
        imgURL="/coin.png"
        productHeading="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin "
      />

      <RightImage
        imgSrc="/kiteconnect.png"
        productHeading="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        productLink="Kite Connect"
      />

      <LeftImage
        imgURL="/varsity.png"
        productHeading="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      />

      <Universe />
    </>
  );
}

export default ProductPage;
