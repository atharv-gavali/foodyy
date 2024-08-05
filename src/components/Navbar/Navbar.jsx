import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {

  const [menu, setManu] = useState("Home");
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <li onClick={() => setManu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <a href='#explore-menu' onClick={() => setManu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setManu("Mobile-app")} className={menu === "Mobile-app" ? "active" : ""}>Mobile-app</a>
        <a href='#footer' onClick={() => setManu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
