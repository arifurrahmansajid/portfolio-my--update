import { useState } from "react";
import "./style.css";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          MD.ARIFUR RAHMAN SAJID
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
          
           <i className="fa-solid fa-bars-staggered mobile-menu"><HiOutlineMenuAlt3 /></i>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <i><FaXmark /></i>
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#projects">Projects</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
