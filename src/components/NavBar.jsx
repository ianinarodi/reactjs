import React from "react";
import CartWidget from "./CartWidget";
import "./navbar.css";
import ToggleButton from "./ToggleButton/ToggleButton";

function NavBar() {
  const styleH3 = { backgroundColor: "pink", color: "black" };
  let tiendaTitulo = <h3 style={styleH3}>BRAINLINGUAL</h3>;
  return (
    <nav className="nav-menu">
      <ul className="nav-list">
      <h2> {tiendaTitulo} </h2>
        <li>
          <a>Libros en Inglés </a>
        </li>
        <li>
          <a>Cursos de Inglés </a>
        </li>
        <li>
          <CartWidget />
        </li>
        <ToggleButton icon="😀" />
        <ToggleButton icon="🛒" />
      </ul>
    </nav>
  );
}

export default NavBar;