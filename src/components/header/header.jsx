/** @format */

import React, { useState } from "react";
import Menu from "@mui/icons-material/Menu";
function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true);
  };
  return (
    <div>
      <div className="header">
        <div className="headertext">
          <h4>Royans Therapy</h4>
        </div>
        <Menu onClick={handleMenuOpen} />
      </div>
      <div className={menuOpen ? "navlinks" : "hide"}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
    </div>
  );
}

export default Header;
