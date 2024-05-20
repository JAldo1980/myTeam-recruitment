import React, { useState } from "react";
import Button from "./Button";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  }

  return (
    <>
      <div>
        <Button
          className="sm:hidden border rounded-full border-2 py-2 px-6 text-white cursor-pointer hover:text-black hover:bg-white duration-300"
          type="button"
          label="Menu"
          onClick={handleClick} // Pass handleClick function as onClick prop
        />
      </div>

      {/* Render menu items if menu is open */}
      {isMenuOpen ? (
        <div className="absolute top-16 right-0 bg-white border rounded shadow">
          {/* Example menu items */}
          <ul>
            <li>Home</li>
            <li>About</li>
            <NavLink
              to="/contact"
              className="text-white cursor-pointer hover-border-transition"
            >
              <Button
                type="button"
                className="mt-4 sm:mt-0 border-black rounded-full border-2 py-2 px-6 text-black cursor-pointer hover:text-white hover:bg-black duration-300"
                label="Contact Us"
              />
            </NavLink>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MobileNav;
