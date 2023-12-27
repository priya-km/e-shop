import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const [menu, setMenu] = useState("shop"); /* the default red line / nav bar selection is the shop */

  return (
      <div className='navbar'>
          <div className="nav-logo">
            <img src={logo} alt="" /> {/* inserting the logo image */}
            <p>E-Shop</p>
          </div>
          <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to="/">Shop</Link>{menu === "shop" ? <hr/> : <></>}</li> {/* if the menu is on/equals shop then provide the hr <hr/> tag, if not then it is just an empty bracket <></> */}
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: "none" }} to="/womens">Women</Link>{menu === "womens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: "none" }} to="mens">Men</Link>{menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: "none" }} to="/kids">Kids</Link>{menu === "kids" ? <hr/> : <></>}</li>
          </ul>
          <div className="nav-login-cart">
              <Link to="/login"><button>Login</button></Link>
              <Link to="/cart"><img src={cart_icon} alt="" /></Link> {/* inserting the cart icon image */}
              {/* Adding a counter of items in the cart to the cart icon */}
              <div className="nav-cart-count">0</div>
          </div>
      </div>
  )
}

export default NavBar