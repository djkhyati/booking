import React from 'react'

export default function Header() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Reviews.js">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Membership.js">Memberships</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Gift Cards</a></li>
            <li><a className="dropdown-item" href="#">My Bookings</a></li>
            <li><a className="dropdown-item" href="#">Loyalty Points</a></li>
          </ul>
        </li>
        
         <div className="cart">
         <i className="fa-solid fa-cart-shopping"></i>
         </div>
      </ul>
    
    </div>
  </div>
</nav>
</div>
  )
}
