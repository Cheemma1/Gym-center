import { X } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
const MobileNav = ({ open, setOpen, currentUser, handleLogout }) => {
  return (
    <div className="nav">
      
      <div className="nav-mobile">
      <span className="close">
          <X onClick={() => setOpen(!open)} weight="fill" />
        </span>
      
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>Pricing</li>
          <li>Community</li>
        </ul>

        <div className="btn-container">
          {currentUser ? (
            <button className="up-btn" onClick={handleLogout}>
              signout
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="login-btn">Login</button>
              </Link>
              <Link to={"/signup"}>
                <button className="login-btn">Sign up</button>
              </Link>
            </>
          )}
        </div>
      </div>
  </div>
  );
};

export default MobileNav;
