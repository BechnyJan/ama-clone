import React from 'react'
import "./Header.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const resetInput = (e) => {
        e.target.value='';
    }

    const handleAuthentication = () => {
        if(user) {
            auth.signOut(); 
        }
    }

    return (
        <div className="Header">
           <Link to="/"><img className="header__logo"  alt="" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img></Link>
              <div className="header__search">
              <input type="text" onFocus={(e) => resetInput(e)} className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
              </div>
            <div className="header__navLink">
               <Link to={!user && "/login"}><div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello {user ? user.email : 'Guest'}</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div></Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </div>
            <Link to="/checkout">
            <div className="header__optionBasket">
                  <ShoppingBasketIcon className="header__checkout"/>
                  <span class="header__basketCount header__optionLineTwo">{basket?.length}</span>
            </div></Link>
        
        </div>
    )
}

export default Header
