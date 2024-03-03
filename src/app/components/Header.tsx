"use client"
import { useState } from "react";
import Image from "next/image";
import memojiHeader from '../assets/memoji-header.png';

type NavbarState = {
  left: string;
  transition: string;
};

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleClick = () => {
    setNavbarOpen((current) => !current);
  };

  const openNavbar: NavbarState = {
    left: "0",
    transition: "all 0.5s",
  };

  const closeNavbar: NavbarState = {
    left: "-100%",
    transition: "all 0.5s",
  };

  return (
    // navbar 
    <nav className="bg-[#fff] shadow-[0 0 10px rgba(0, 0, 0, 0.1)] fixed w-full z-[1] left-0 top-0">
      <a href="#home">
        <strong className="logo">
          <Image src={memojiHeader.src} alt="memoji" width={500} height={500} className="absolute w-20 transition-all duration-[0.3s] mx-[30px] my-[5px] hover:scale-105"/>
        </strong>
      </a>
      <input type="checkbox" id="check" onChange={handleClick} />
      <label htmlFor="check" className="navbar__burger__menu">
        <i className="bx bx-menu" id="burger__icon"></i>
      </label>
      <ul className="navbar__ul" style={isNavbarOpen ? openNavbar : closeNavbar}>
        <li className="navbar__li">
          <a className="navbar__a" href="#home" onClick={handleClick}>
            Accueil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#about" onClick={handleClick}>
            A propos
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#projects" onClick={handleClick}>
            Projets
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#skills" onClick={handleClick}>
            Compétences
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
