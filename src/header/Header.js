import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import logo from "../images/IronBankLogo.jpg";
import "./Header.css";
// import { useStValue } from "../StProvider";

function Head1() {
  // const [{ cart }, dispatch] = useStValue();
  return (
    <nav className="header">
      {/*Logo */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>
      <div>
        <span className="header__title">Iron Bank of Kansas City</span>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__lineOne">Hello</span>
            <span className="header__lineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/register" className="header__link">
          <div className="header__option">
            <span className="header__lineOne">New User</span>
            <span className="header__lineTwo">Register</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCart />
            {/* <span className="header__lineTwo header__basketCount">
              {console.log("cart", cart)}
              {cart?.length}
            </span> */}
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Head1;