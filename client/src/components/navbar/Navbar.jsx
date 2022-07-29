import "./navbar.css"
import {Link, useNavigate} from "react-router-dom"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";


const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = ()=>{
      navigate("/login")
  }

 

  

  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
            <span className="logo">AK Booking</span>

          </Link>
            {user ? user.username : (
               <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
                
                
            </div>)}
            <button className="navButton" onClick={handleClick} >Logout</button>
            
        </div>
    </div>
  )
}

export default Navbar