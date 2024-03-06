"use client";
import { useState } from "react";
import Image from "next/image";
import memojiHeader from "../assets/memoji-header.png";

type NavbarState = {
  left: string;
  transition: string;
};

export default function Header() {
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
    <nav className="bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] fixed w-full z-[1] left-0 top-0">
      <div className="flex items-center justify-between">
        <strong className="logo">
          <a href="#home">
            <Image
              src={memojiHeader.src}
              alt="memoji"
              width={500}
              height={500}
              className="w-[80px] transition-all duration-[0.3s] mx-[5px] my-[30px] hover:scale-105 max-lg:mx-[15px] max-lg:my-[20px] max-lg:w-[50px]"
            />
          </a>
        </strong>
        <input
          type="checkbox"
          id="check"
          className="hidden"
          onChange={handleClick}
        />
        <label htmlFor="check" className="navbar__burger__menu">
          <i
            className="bx bx-menu float-end mr-8 px-[5px] text-center py-[7px] rounded hover:bg-[whitesmoke] text-[2rem]"
            id="burger__icon"
          ></i>
        </label>
      </div>

      <ul
        className="navbar__ul float-right mr-[25px] max-lg:fixed max-lg:w-full max-lg:h-[100vh] max-lg:bg-[whitesmoke] max-lg:top-20 max-lg:text-center max-lg:flex max-lg:flex-col"
        style={isNavbarOpen ? openNavbar : closeNavbar}
      >
        <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 transition-all-duration[0.3s] hover:scale-105 max-lg:block">
          <a
            className="navbar__a text-lg font-bold  px-[13px] py-[7px] max-lg:text-xl"
            href="#home"
            onClick={handleClick}
          >
            Accueil
          </a>
        </li>
        <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 transition-all-duration[0.3s] hover:scale-105">
          <a
            className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
            href="#about"
            onClick={handleClick}
          >
            A propos
          </a>
        </li>
        <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 transition-all-duration[0.3s] hover:scale-105">
          <a
            className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
            href="#projects"
            onClick={handleClick}
          >
            Projets
          </a>
        </li>
        <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 transition-all-duration[0.3s] hover:scale-105">
          <a
            className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
            href="#skills"
            onClick={handleClick}
          >
            Compétences
          </a>
        </li>
        <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 transition-all-duration[0.3s] hover:scale-105">
          <a
            className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
            href="#contact"
            onClick={handleClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
