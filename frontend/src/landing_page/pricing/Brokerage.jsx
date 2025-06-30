import React, { useState } from "react";
import { equal, f, c, com } from "./Data.js";

import ConditionSet from "./ConditionSet.jsx";
function Brokerage() {
 const [data, setData] = useState(equal);

  const changeData = (key) => {
    setData(key);
  };


  return (
   <>
     <div className="d-flex flex-row justify-content-evenly">
        <h3
          onClick={() => {
            return changeData(equal);
          }}
          style={{cursor:"pointer"}}
        >
          Equity
        </h3>
        <h3
          onClick={() => {
            return changeData(f);
          }}
            style={{cursor:"pointer"}}
        >
          F&Q
        </h3>
        <h3
          onClick={() => {
            return changeData(c);
          }}
            style={{cursor:"pointer"}}
        >
          Currency
        </h3>
        <h3
          onClick={() => {
            return changeData(com);
          }}
            style={{cursor:"pointer"}}
        >
          Commodity
        </h3>
      </div>
   <ConditionSet data={data}  />

   
   </>
  );
}

export default Brokerage;
