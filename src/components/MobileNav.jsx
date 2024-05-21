import React, { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div>
        <Button
          className="sm:hidden border rounded-full border-2 py-2 px-6 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
          type="button"
          label="Menu"
          onClick={handleClick}
        />
      </div>

      {/* Render menu items if menu is open */}
      {isMenuOpen ? (
        <div className="fixed top-0 right-0 w-1/2 h-screen pt-10 bg-white border-l shadow-lg z-50">
          <div
            className="absolute top-5 right-5 cursor-pointer font-bold hover:text-red-800"
            onClick={handleClick}
          >
            X
          </div>
          {/* Example menu items */}
          <ul className="flex flex-col p-4">
            <li>
              <NavLink
                to="/"
                className="text-black cursor-pointer py-2 hover-border-transition"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-black cursor-pointer py-2 hover-border-transition"
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-black cursor-pointer py-2">
                <Button
                  type="button"
                  className="mt-4 sm:mt-0 border-black rounded-full border-2 py-2 px-6 text-black cursor-pointer hover:text-white hover:bg-black duration-300"
                  label="Contact Us"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
