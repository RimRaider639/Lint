import React, { useState } from "react";
import "../styles/Model.css"
import { BsBoxSeam,BsPlusLg,BsGift } from "react-icons/bs"
import { HiClipboardList } from "react-icons/hi"
import {BsPerson} from "react-icons/bs"
function AccountDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="account-dropdown">
            <div className="fle">
            <button onClick={() => setIsOpen(!isOpen)}><BsPerson/></button>
            <button onClick={() => setIsOpen(!isOpen)}>My Account</button>
            </div>
            
            
            {isOpen && (
                <div className="dropdown-menu">
                    <button className="btn_acc">Sign In</button>
                    <button className="btn_accc">Create Account</button>
                    <span id="dot"><BsBoxSeam /><p>Find My Orders</p></span>
                    <span><BsPlusLg /><p>LINT Rewards+</p></span>
                    <span><HiClipboardList /><p>LINT Rewards+</p></span>
                    <span><BsGift /><p>Find a Registry</p></span>
                </div>
            )}
        </div>
    );
}

export default AccountDropdown;