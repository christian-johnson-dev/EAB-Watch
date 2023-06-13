import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  // Component Logic
  return (
    <div className="mr-4">
      <Link
        to={to}
        className="text-lg no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
      >
        {children}
      </Link>
    </div>
  );
};

export default NavItem;
