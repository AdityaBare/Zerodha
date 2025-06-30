import React from 'react';

function ConditionSet({data}) {
   
      
    return (  
         <div className="container ">
    
      <div className="row border mt-4 p-5">
        <div className="col">
          <h1></h1>
          <p className="mt-3">{data.index[0][0]}</p>
          <p className="mt-3">{data.index[0][1]}</p>
          <p className="mt-3">{data.index[0][2]}</p>
          <p className="mt-3">{data.index[0][3]}</p>
          <p className="mt-3">{data.index[0][4]}</p>
          <p className="mt-3">{data.index[0][5]}</p>
        </div>
        <div className="col">
          <h3>{data.index[1][0]}</h3>
          <p className="mt-3">{data.Commodity_futures[0]}</p>
          <p className="mt-3">{data.Commodity_futures[1]}</p>
          <p>{data.Commodity_futures[2]}</p>
          <p className="mt-3">{data.Commodity_futures[3]}</p>
          <p className="mt-3">{data.Commodity_futures[4]}</p>
          <p className="mt-3">{data.Commodity_futures[5]}</p>
        </div>
        <div className="col">
          <div className="col">
            <h3>{data.index[1][1]}</h3>
            <p className="mt-3">{data.Commodity_options[0]}</p>
            <p className="mt-3">{data.Commodity_options[1]}</p>
            <p className="mt-3">{data.Commodity_options[2]}</p>
            <p className="mt-3">{data.Commodity_options[3]}</p>
            <p className="mt-3">{data.Commodity_options[4]}</p>
            <p className="mt-3">{data.Commodity_options[5]}</p>
          </div>
        </div>
      </div>
    </div>
    );
}

export default ConditionSet;