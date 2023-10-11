import { useState } from "react";
import "./navbar.css";
import sequenz_logo from "../../assets/the_sequenz_logo.png";
import cartImg from "../../assets/cart_icon.svg";
import searchImg from "../../assets/search_icon.svg";
import profileImg from "../../assets/profile_img.png";
import Image from "../Image";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <header>
      <div className="title_cart_icons_container">
        <p>UNISEX T-SHIRT</p>
        <div className="search_cart_avtar_container">
          <Image src={searchImg} alt="searchImg" outsideClassName="" />
          <button>
            <Image src={cartImg} alt="cartImg" outsideClassName="" />
            <p>15</p>
          </button>
          <button>
            <img src={profileImg} loading="lazy" alt="profileImg" />
          </button>
        </div>
      </div>

      <nav className="logo_menu_contianer">
        <div className="checkbox_menu_logo_container">
          <input type="checkbox" id="check" checked={openMenu} readOnly />
          <label htmlFor="check" className="menu_btn" onClick={handleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </label>
          <div className="logo_name">
            <img src={sequenz_logo} loading="lazy" alt="logoImg" />
          </div>
        </div>

        <div className="search_cart_avtar_container small_screen_search_cart_avtar_container">
          <button>
            <Image src={cartImg} alt="cartImg" outsideClassName="" />

            <p>15</p>
          </button>
          <button>
            <img src={profileImg} loading="lazy" alt="profileImg" />
          </button>
        </div>

        {/* <!-- <div className="search_cart_avtar_container">
      <div>
        <img src="../../assets/search_icon.svg" loading="lazy" />
      </div>
      <button>
        <div>
          <img src="../../assets/cart_icon.svg" loading="lazy" />
        </div>
        <p>15</p>
      </button>
      <button>
        <img src="../../assets/profile_img.png" loading="lazy" />
      </button>
    </div> --> */}
        {}
        <ul className="navs_container" style={{ left: openMenu ? "-100%" : 0 }}>
          <div className="search_small_container sm_screen_search_small_container">
            <Image src={searchImg} alt="searchImg" outsideClassName="" />

            <input type="text" placeholder="Search here ..." />
          </div>
          <li className="hvr-underline-from-center">Home</li>
          <li className="hvr-underline-from-center">Shop</li>
          <Link to="/About">
          <li className="hvr-underline-from-center" 
          
          > About Us </li></Link>
          <li className="hvr-underline-from-center">Contact Us</li>
        </ul>
      </nav>
    </header>
  );
}
