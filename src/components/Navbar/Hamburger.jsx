import React, { useState } from 'react';
import '../../styles/Hamburger.css';
import { FiSearch } from "react-icons/fi"
import { RxCardStackPlus } from "react-icons/rx"
import { AiFillDollarCircle } from "react-icons/ai"
import { BsBagPlus, BsPerson } from "react-icons/bs"
function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='cont'>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        {/* <span className="line"></span> 
         <span className="line"></span> */}
      </button>
      {menuOpen && (
        <nav className="navigation">
          <button className="close" onClick={toggleMenu}>
            <span>&times;</span>
          </button>
          <ul>
          <div className="side_search">
                    <input type="text" placeholder="Search" />
                    <span><FiSearch /></span>
                </div>
          <span><RxCardStackPlus /><li>Lint Rewards</li></span>
          <span><AiFillDollarCircle /><li>Coupons</li></span>  
            <span><BsPerson /><li>My Account</li></span>     
            <span><BsBagPlus /><li>Bag</li></span> 
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Hamburger;
