import React from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="realtive">
      <nav className="flex   bg-black p-6">
        {/* Responsive Navigation Container */}
        <div className="container mx-auto flex justify-between items-center ">
          {/* Branding Container*/}
          <div className="flex items-center flex-shrink-0">
            <img
              className="logo"
              src="/EABicon.png"
              alt="EAB Icon"
            />
            <h1 className="company-name">EAB Watch</h1>
          </div>
          {/* Desktop Menu Container */}
          <div className="dt-menu-container">
            <NavItem
              className="dt-nav-item"
              to="/report"
            >
              Report Sighting
            </NavItem>
            <NavItem
              className="dt-nav-item"
              to="/sightings"
            >
              View Sightings
            </NavItem>
            <NavItem
              className="dt-nav-item"
              to="/learn-to-report"
            >
              Learn to Report
            </NavItem>
            <NavItem
              className="dt-nav-item"
              to="/about"
            >
              About Us
            </NavItem>
            <NavItem
              className="dt-nav-item"
              to="/eab-info"
            >
              EAB in Oregon
            </NavItem>
          </div>
          {/* Navigation */}

          {/* Hamburger Button */}
          <div className="block mt-1 lg:hidden">
            <button
              onClick={handleToggle}
              className="hamburger-button"
            >
              <svg
                className="fill-current h-5 w-5 md:h-7 md:w-7 "
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Container*/}
      <div className={`mb-menu-container ${isOpen ? "h-1/2" : "h-0"}`}>
        <NavItem
          className="mb-nav-item"
          to="/report"
          onClick={() => setIsOpen(false)}
        >
          Report Sighting
        </NavItem>
        <NavItem
          className="mb-nav-item"
          to="/sightings"
          onClick={() => setIsOpen(false)}
        >
          View Sightings
        </NavItem>
        <NavItem
          className="mb-nav-item"
          to="/learn-to-report"
          onClick={() => setIsOpen(false)}
        >
          Learn to Report
        </NavItem>
        <NavItem
          className="mb-nav-item"
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </NavItem>
        <NavItem
          className="mb-nav-item"
          to="/eab-info"
          onClick={() => setIsOpen(false)}
        >
          EAB in Oregon
        </NavItem>
      </div>
    </div>
  );
};

export default Navbar;
