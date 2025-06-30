import React, { useEffect } from 'react';
import TopBar from './TopBar'
import Dashboard from './Dashboard'

import axios from 'axios';


function Home() {


//    useEffect(() => {
//     axios.get(`${import.meta.env.VITE_Backend_URL}/authentication`, {
//       withCredentials: true,
//     }).then(res => {
//       if (!res.data.success) {
//         window.location.replace(`${import.meta.env.VITE_Frontend_URL}`);
//       }
//     }).catch(() => {
//       window.location.replace(`${import.meta.env.VITE_Frontend_URL}`);
//     });
//   }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_Backend_URL}/user`, {
        withCredentials: true,
      })
      .then((res) => {
         console.log(res.data)

         if(!res.data){return  window.location.replace(`${import.meta.env.VITE_Frontend_URL}`);}
      });
  }, []);
  
    return ( 
        <>
         <TopBar/>
         <Dashboard/>
        </>
     );
}

export default Home;