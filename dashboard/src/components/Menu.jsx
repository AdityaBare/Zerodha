import React from "react";
import { useState, useContext, useEffect  } from "react";
import { Link } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import GeneralContext from "./GeneralContext";
import axios from "axios";

const Menu = () => {
  const generalContext = useContext(GeneralContext);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileeDropdownOpen, setIsProfileeDropdownOpen] = useState(false);
   const [user, setUser] = useState({});


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_Backend_URL}/user`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data);
      });
  }, []);



  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    !isProfileeDropdownOpen?generalContext.openProfileeDropdown():generalContext.closeProfileeDropdown()

    setIsProfileeDropdownOpen(!isProfileeDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/image.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link 
              style={{textDecoration:"none"}}
              to="/"
              onClick={()=>handleMenuClick(0)}
            >
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
              <Link 
              style={{textDecoration:"none"}}
              to="/orders"
              onClick={()=>handleMenuClick(1)}
            >
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
         
          </li>
          <li>
             <Link 
              style={{textDecoration:"none"}}
              to="/holdings"
              onClick={()=>handleMenuClick(2)}
            >
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
         
    
          </li>
          <li>
                 <Link 
              style={{textDecoration:"none"}}
              to="/positions"
              onClick={()=>handleMenuClick(3)}
            >
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
         
         
          </li>
          <li>
             <Link 
              style={{textDecoration:"none"}}
              to="/funds"
              onClick={()=>handleMenuClick(4)}
            >
              <p className={selectedMenu===4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
           
          </li>
         
        </ul>
        <hr />
          <GeneralContextProvider>
              
        
         <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{user.username?.[0]}</div>
          <p className="username">{user.username}</p>
        </div>
      
         </GeneralContextProvider>
      </div>
    </div>
  );
};

export default Menu;
