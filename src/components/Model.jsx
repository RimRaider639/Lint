import React, { useState } from "react";
import "../styles/Model.css"
import { BsBoxSeam,BsPlusLg,BsGift } from "react-icons/bs"
import { HiClipboardList } from "react-icons/hi"
import {BsPerson} from "react-icons/bs"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import { cart } from "../redux/cart/cart.actionTypes";
function AccountDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const istoken=localStorage.getItem("token")
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleClick=()=>{
        if(istoken){
            localStorage.removeItem("token")
            dispatch({type:cart.RESET})
            navigate("/")
        }else{
            navigate("/signin")
        }
    }
    const handlecreate=()=>{
        navigate("/register")
    }
    return (
        <div className="account-dropdown">
            <div className="fle">
            <button onClick={() => setIsOpen(!isOpen)}><BsPerson/></button>
            <button onClick={() => setIsOpen(!isOpen)}>My Account</button>
            </div>
            
            
            {isOpen && (
                <div className="dropdown-menu">
                    <button className="btn_acc" onClick={handleClick} >{istoken?"Sign Out" : "Sign In"}</button>
                   {
                    istoken?null:<button className="btn_accc" onClick={handlecreate} >Create Account</button>
                   }
                   {
                    istoken? <div> <span id="dot"><BsBoxSeam /><p>Find My Orders</p></span>
                    <span><BsPlusLg /><p>LINT Rewards+</p></span>
                    <span><HiClipboardList /><p>LINT Rewards+</p></span>
                    <span><BsGift /><p>Find a Registry</p></span> </div>:null
                   }
                </div>
            )}
        </div>
    );
}

export default AccountDropdown;