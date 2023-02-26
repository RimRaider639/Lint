import React from "react";
import { FiSearch } from "react-icons/fi";
import { RxCardStackPlus } from "react-icons/rx";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsBagFill } from "react-icons/bs";
import "../../styles/NavTop.css";
import Hamburger from "./Hamburger";
import NavBottom from "./NavBottom";
import AccountDropdown from "../Model";
import { useDispatch, useSelector } from "react-redux";
import {Flex} from "@chakra-ui/react"
import { getCartItems } from "../../redux/cart/cart.actions";
import {Link, useLocation} from "react-router-dom"
const NavTop = () => {

  const dispatch = useDispatch()
  const {total, items} = useSelector(store=>store.cartManager)
  const loc = useLocation()
  React.useEffect(()=>{
    dispatch(getCartItems())
  }, [])
  return (
    // maindiv
    <div id="maindiv">
       
      <div className="container">
        <Hamburger />
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
            
            <Flex position="absolute" color="white" mt="8px" ml="12px">{total.items}</Flex>
            <Link to="/cart">
              <BsBagFill />
            </Link>
            <p>₹{total.price}</p>
          </span>
        </div>
      </div>
      <NavBottom />
    </div>
  );
};

export default NavTop;
