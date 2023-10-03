"use client";
import React, { useState } from "react";
import "./Navbar.css";

const NavBar: React.FC = () => {
  const scrollToSelection = (selection: string) => {
    const element = document.getElementById(selection);
    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const [clickCount, setClickCount] = useState(0); // Estado para contar os cliques

  const redirectToMain = () => {
    window.location.href = "/";
  };

  const redirectToSobre = () => {
    window.location.href = "/About/";
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <button className="navbarbutton" onClick={redirectToMain}>
          <li className="navbarText">Home</li>
        </button>
        <button
          className="navbarbutton"
          onClick={() => scrollToSelection("arts")}
        >
          <li className="navbarText">Galeria</li>
        </button>
        <button className="navbarbutton" onClick={redirectToSobre}>
          <li className="navbarText">Sobre</li>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
