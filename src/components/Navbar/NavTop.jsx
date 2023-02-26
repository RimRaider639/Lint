import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCardStackPlus } from "react-icons/rx";
import { AiFillDollarCircle } from "react-icons/ai";
import "../../styles/NavTop.css";
import AccountDropdown from "../Model";
import {Link, useLocation} from "react-router-dom"
import {Flex, Box} from "@chakra-ui/react"
import Bag from "./Bag";
const NavTop = () => {

  return (

       
      <div className="container">
        

      <div className="logo">
      <Link to='/' >  <img src="https://i.ibb.co/d27npvV/Lint-trimmy-1.png" alt="logo" /></Link>
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
            
            <Bag/>
            
          </span>
        </div>
          
        
      </div>
      
  );
};

export default NavTop;
