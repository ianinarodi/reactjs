import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <h2>BRAINLINGUAL</h2>
          </Link>
        </li>
        <li>
          <Link to="/category/Books">Books</Link>
        </li>
        <li>
          <Link to="/category/Courses">Courses</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;