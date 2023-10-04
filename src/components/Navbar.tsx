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

  const redirectToMain = () => {
    window.location.href = "/";
  };

  const redirectToSobre = () => {
    window.location.href = "/About/";
  };

  // Verifica a guia atual
  const currentPath = window.location.pathname;

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <button className="navbarbutton" onClick={redirectToMain}>
          <li className="navbarText">Home</li>
        </button>
        {currentPath === "/" && (
          <button
            className="navbarbutton"
            onClick={() => scrollToSelection("arts")}
          >
            <li className="navbarText">Galeria</li>
          </button>
        )}
        <button className="navbarbutton" onClick={redirectToSobre}>
          <li className="navbarText">Sobre</li>
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
