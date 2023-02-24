import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCardStackPlus } from "react-icons/rx";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import "../../styles/NavTop.css";
import Hamburger from "./Hamburger";
import NavBottom from "./NavBottom";
import AccountDropdown from "../Model";
const NavTop = () => {
  return (
    <div id="maindiv">
      <div className="container">
        <Hamburger />
        <div className="logo">
          <img src="https://i.ibb.co/d27npvV/Lint-trimmy-1.png" alt="logo" />
        </div>
        <div className="search">
          <input id="inp" type="text" placeholder="Search" />
          <span>
            <FiSearch />
          </span>
        </div>
        <div className="icon_collection">
          <span>
            <RxCardStackPlus />
            <p>Lint rewards+</p>
          </span>
          <span>
            <AiFillDollarCircle />
            <p>Coupons</p>
          </span>
          <span>
            <p id="mod">
              <AccountDropdown />
            </p>
          </span>
          <span>
            <BsBagPlus />
            <p>Bag</p>
          </span>
        </div>
      </div>
      <NavBottom />
    </div>
  );
};

export default NavTop;
