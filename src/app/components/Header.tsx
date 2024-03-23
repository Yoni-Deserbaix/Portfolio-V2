"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import memojiHeader from "../assets/memoji-header.png";
import AOS from "aos";
import "aos/dist/aos.css";

type NavbarType = {
  left: string;
  transition: string;
};

export default function Header() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false);

  const handleClick = () => {
    setNavbarOpen((current) => !current);
  };

  const openNavbar: NavbarType = {
    left: "0",
    transition: "all 0.5s",
  };

  const closeNavbar: NavbarType = {
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
              className="w-[80px] ml-8 hover:scale-105 transition duration-200 max-lg:mx-[15px] max-lg:my-[10px] max-lg:w-[50px]"
            />
          </a>
        </strong>
        <input
          type="checkbox"
          id="check"
          className="hidden"
          onChange={handleClick}
        />
        <label
          htmlFor="check"
          className="navbar__burger__menu hidden float-right text-[30px] leading-[80px] mr-[40px] cursor-pointer max-lg:block"
        >
          <i
            className="bx bx-menu text-center rounded hover:bg-[whitesmoke] p-1"
            id="burger__icon"
          ></i>
        </label>

        <ul
          className="navbar__ul float-right mr-[25px] max-lg:fixed max-lg:w-full max-lg:h-[100vh] max-lg:bg-[whitesmoke] max-lg:top-20 max-lg:text-center max-lg:flex max-lg:flex-col"
          style={isNavbarOpen ? openNavbar : closeNavbar}
        >
          <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 hover:scale-110 transition duration-200  max-lg:block">
            <a
              className="navbar__a text-lg font-bold  px-[13px] py-[7px] max-lg:text-xl"
              href="#home"
              onClick={handleClick}
            >
              Accueil
            </a>
          </li>
          <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 hover:scale-110 transition duration-200">
            <a
              className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
              href="#about"
              onClick={handleClick}
            >
              A propos
            </a>
          </li>
          <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 hover:scale-110 transition duration-200">
            <a
              className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
              href="#projects"
              onClick={handleClick}
            >
              Projets
            </a>
          </li>
          <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 hover:scale-110 transition duration-200">
            <a
              className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
              href="#skills"
              onClick={handleClick}
            >
              Compétences
            </a>
          </li>
          <li className="navbar__li inline-block leading-[90px] mx-[5px] my-0 hover:scale-110 transition duration-200">
            <a
              className="navbar__a text-lg font-bold px-[13px] py-[7px] max-lg:text-xl"
              href="#contact"
              onClick={handleClick}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
