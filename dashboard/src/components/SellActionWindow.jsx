import React, { useContext } from "react";
import axios from "axios";
import "./BuyActionWindow.css";

import GeneralContext from "./GeneralContext";
import { useState } from "react";

function SellActionWindow({ uid }) {
  const { closeSellWindow } = useContext(GeneralContext);
  const [sell, setSell] = useState(false);

  const handleSellClick = () => {
    try {
      axios
        .post(`${import.meta.env.VITE_Backend_URL}/sellholding`, {
          name: uid,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.state == true) {
             
                setSell(!sell);
                return closeSellWindow();

          } else {
            alert(
              "Unable to sell: You don't currently hold any shares of this stock."
            );

          }
        });
    } catch (error) {
      alert("Error while selling:"+ error.message);
    }
     setSell(!sell);
    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <h2>{uid}</h2>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default SellActionWindow;
