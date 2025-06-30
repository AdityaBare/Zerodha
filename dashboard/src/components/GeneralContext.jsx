import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";
import Profile from "./Profile";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
   openProfileeDropdown:()=>{},
   closeProfileeDropdown:()=>{}
  
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [profileDropdown,setProfileDropdown] = useState(false);

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };
   const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };
   const handleOpenProfile = (uid) => {
     setProfileDropdown(true);
    setSelectedStockUID(uid);

  };

  const handleCloseProfile = () => {
    setProfileDropdown(false);
    setSelectedStockUID('');
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
          openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        openProfileeDropdown:handleOpenProfile,
        closeProfileeDropdown :handleCloseProfile

      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
     {profileDropdown && <Profile />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;