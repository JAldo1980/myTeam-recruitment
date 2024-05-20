import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import MobileNav from "./MobileNav";

const Nav = () => {
  const [isSmallWindow, setIsSmallWindow] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallWindow(window.innerWidth < 640); // Adjust this value if I need to..
    };

    // Check window size initially - add event listener
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    // Remove event listener
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <div className="text-container pt-20 pb-20 flex justify-between">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-white cursor-pointer hover-border-transition"
        end
      >
        <img src="logo.svg" className="w-40 h-10" alt="Logo" />
      </NavLink>

      {/* Render MobileNav if condition met! */}
      {isSmallWindow && <MobileNav />}

      {/* Render Home and About links until condition met... */}
      {!isSmallWindow && (
        <div className="hidden sm:flex sm:items-center sm:gap-4">
          <NavLink
            to="/"
            className="text-white cursor-pointer hover-border-transition"
            end
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-white cursor-pointer hover-border-transition"
          >
            About
          </NavLink>

          <NavLink to="/contact">
            <Button
              type="button"
              className="border rounded-full border-2 py-2 px-6 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
              label="Contact"
            ></Button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
