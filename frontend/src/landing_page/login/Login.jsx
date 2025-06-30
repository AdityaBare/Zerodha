import React, { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import {useNavigate  } from "react-router-dom";
function Login() {
   
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const handleInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
       await axios.post(`${import.meta.env.VITE_Backend_URL}/login`,formData, {
        withCredentials: true
      }).then((res)=>{
        console.log(res.data.message);
       
       

        if(res.data.success== false){
          alert(res.data.message)
        }
        else if(res.data.success==true){
          window.location.href = `${import.meta.env.VITE_Dashboard_URL}`;
        }
        else{
          alert(res.error)
        }
      });
     
    
    
   
  };

  return (
    <div className="container w-50">
      <form className='m-lg-5'  onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name='email'
            value={formData.email}
            onChange={handleInput}
            required
          />
          <div className="form-text">We'll never share your email with anyone else.</div>
          <div className="invalid-feedback">Enter email!</div>
        </div>

     

        <div className="mb-4">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name='phone'
            value={formData.phone}
            placeholder='(+91)'
            onChange={handleInput}
            
          />
          <div className="invalid-feedback">Enter mobile number!</div>
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name='password'
            value={formData.password}
            onChange={handleInput}
            
          />
        </div>

       

        <button   className="btn btn-primary mb-4">Login</button>
       <br />
               <br />
           <p>Create new account? <Link to="/signup">SignUp</Link> </p>
            
             <br /><br />
        
      </form>
      </div>
     );
}

export default Login;