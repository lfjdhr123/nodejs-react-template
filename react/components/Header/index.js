import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const Header = props => {
  return (
    <div className="header-container">
      <Link className="header-item" to="/increase">
        Increase
      </Link>
      <Link className="header-item" to="/decrease">
        Decrease
      </Link>
    </div>
  );
};
export default Header;
