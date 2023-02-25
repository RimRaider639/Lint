import React from "react";
import "../../styles/NavBottom.css";
import { gift } from "./data";
const NavBottom = () => {
  return (
    <div className="bottom_cont">
      <ul id="bottom_category">
        {/* <li>Gifts</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
        <li>Shoes</li>
        <li>Handbags</li>
        <li>Jewelry</li>
        <li>Beauty</li>
        <li>Home</li>
        <li>Bed & Bath</li>
        <li>Conn's LINT</li>
        <li>Brands</li> */}
        {gift?.map((el) => (
          <div id="dropdown" key={el}>
            <li key={el} id="dropbtn">
              {el.text}
            </li>
            <div id="dropcont">
              <div className="big_parent">
                <div id="parent">
                  <h2 className="q">{el.lists.title}</h2>
                  {el.lists.Sidebar?.map((item) => (
                    <div key={item}>
                      <p className="hub">{item}</p>
                      {/* {
                      
                      }console.log(item) */}
                    </div>
                  ))}
                </div>
                <div className="right_grid">
                  {el.lists.alldata?.map((divs) => (
                    <div key={divs.heading}>
                      <h2 className="grid_head">{divs.heading}</h2>
                      {divs.child?.map((fields) => (
                        <p className="hub" key={fields}>
                          {fields}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default NavBottom;
