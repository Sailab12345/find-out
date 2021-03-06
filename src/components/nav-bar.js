import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="ui stackable top fixed menu">
        <Link to="/" className="item">
          <div className="text-center bottom-tab-item">H</div>
        </Link>
        <div className="right menu">
          <Link to="/category" className="item">
            <div className="text-center bottom-tab-item">Categories</div>
          </Link>
          <Link to="/shop" className="item">
            <div className="text-center bottom-tab-item">Shops</div>
          </Link>
          <div className="item">Sign-in</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
