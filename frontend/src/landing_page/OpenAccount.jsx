import React from 'react';
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
         <div className='container   p-3'>
        <div className='row text-center'>

           <h1 className='mt-4 ' style={{height:"1rem"}}>Open a Zerodha account</h1>

           <p className='fs-6 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
         <Link to="/signup">
           <button class="btn fs-6 mb-5 btn-lg" style={{margin:"auto" ,backgroundColor:"#3792cb",color:'white',width:"170px"}}>Sign up for free</button>
        </Link>
        </div>

      </div>
     );
}

export default OpenAccount;