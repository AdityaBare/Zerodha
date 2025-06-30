import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({});
  const [logout,setLogout]=useState(false);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_Backend_URL}/user`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

 const handelLogout = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_Backend_URL}/logout`, {
      withCredentials: true,
    });

    window.location.replace(`${import.meta.env.VITE_Frontend_URL}`);
  } catch (err) {
    console.error("Logout failed:", err);
    alert("Logout failed. Please try again.");
  }
};

  

  return (
    <div className="profile-dropdown transition">
      <div className="icon-profile">
        <div className="icon">
          {" "}
          <p>{user.username?.[0]}</p>{" "}
        </div>

        <div className="username">
          <p>{user.username}</p>
        </div>
        <br />
      </div>

      <ul className="ul">
        <li className="li">View Profile</li>
        <li  className="li">Help Center</li>
        <li  className="li">Upgrade</li>
         <li  className="li" onClick={handelLogout}>Logout</li>
        
      </ul>
    </div>
  );
}

export default Profile;
