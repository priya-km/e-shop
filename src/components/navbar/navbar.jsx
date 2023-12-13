import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

const NavBar = () => {
  return (
      <div className='navbar'>
          <div className="nav-logo">
            <img src={logo} alt="" /> {/* inserting the logo image */}
            <p>E-Shop</p>
          </div>
          <ul className="nav-menu">
            <li>Shop<hr/></li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
          <div className="nav-login-cart">
              <button>Login</button>
              <img src={cart_icon} alt="" /> {/* inserting the cart icon image */}
              {/* Adding a counter of items in the cart to the cart icon */}
              <div className="nav-cart-count">0</div>
          </div>
      </div>
  )
}

export default NavBar