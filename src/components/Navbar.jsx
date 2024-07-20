import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css";


export const Navbar = () => {
  return (
   
//  <nav>
//    <div className="container">
//       <Link to="/" className="title">Website</Link>
//       <div className='menu'>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* For Mint */}
//       <div className="">
//       <div className="nav_block">
//       <ul className='navtext'>
//         <li class="dropbtn1">
//           <NavLink to="/mint">MINT</NavLink>
//         </li>
//         <li>
//          <button class="dropbtn1">Marketplase</button>
//           <div class="dropdown-content">
//             <NavLink to="/marketplase">Marketplase</NavLink>
//             <NavLink to="/purcahsednft">PurchasedNFT</NavLink>
//             <NavLink to="/fetchnft">FetchNFT</NavLink>
//           </div>
//         </li>
//          <li>
//          <button class="dropbtn1">Auction</button>
//           <div class="dropdown-content">
//             <NavLink to="/auction">Auction</NavLink>
//             <NavLink to="/bidder">Bidder</NavLink>
//             <NavLink to="/fetchnft">ClaimNft</NavLink>
//           </div>
//          </li>
//       </ul>
   
//       </div>
//       </div>
  
//       </div>
//     </nav>

              <>

<div className="navbar_section">
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Market Place</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Auction</a></li>
            <li><a class="dropdown-item" href="#"> 3t4t</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>



              </>
   
   
  )
}
