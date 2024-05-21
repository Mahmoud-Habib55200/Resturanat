import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurant } from "react-icons/md";

const MenueLinks = () => (
  <>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#pages">Pages</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#landing">Landing</a></li>
    </ul>
  </>
);

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar__image">
        <img src={images.gericht} alt="" />
      </div>

      <div className="app__navbar__links">
        <MenueLinks />
      </div>

      <div className="app__navbar__sign">
        <p>Login / Regestration</p>
        <div />
        <p>Book Table</p>
      </div>

      <div className="app__navbar__smallScreen">
        <GiHamburgerMenu width={27} className="icon__bar" color="#fff" onClick={() => setToggleMenu(true)} />

        {
          ToggleMenu && (

            <div className="app__navbar__smallScreen__overlay flex__center slide-bottom">
              <MdOutlineRestaurant width={27} color="#fff" className="icon__close" onClick={() => setToggleMenu(false)} />
                <ul className="app__navbar__smallScreen__links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#pages">Pages</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#landing">Landing</a></li>
              </ul>
              
              <div className="app__navbar__mobilScreen__sign">
                <p>Login / Regestration</p>
                <p>Book Table</p>
              </div>
            </div>
            

          )
        }

      </div>
    </nav>
  )

};

export default Navbar;
