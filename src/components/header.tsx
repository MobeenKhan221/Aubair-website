"use client";
import "@/style/header.css";
import MainLogo from "@/assets/main logo.svg";
import DropDownIcon from "@/assets/chevron-down.svg";
import HamburgerIcon from "@/assets/menu-cion-hamburger.svg";
import Image from "next/image";
import { useState } from "react";

const dropItems = [
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
  { dropItem: "service1" },
];
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  return (
    <div className="header-main">
      <div className="header-inner">
        <div className="Main-logo">
          <Image src={MainLogo} alt="Logo image" />
        </div>

        {/* Hamburger icon for mobile screens */}
        <div className="hamburger-icon" onClick={toggleMobileMenu}>
          <Image src={HamburgerIcon} alt="Menu" className="HamIcon" />
        </div>

        {/* Conditional rendering of navigation links */}
        <div className={`tags-items ${isMobileMenuOpen ? "active" : ""}`}>
          <div
            className="tags drop-tags"
            onClick={toggleServicesMenu}
            onMouseEnter={() => setServicesMenuOpen(true)}
            onMouseLeave={() => setServicesMenuOpen(false)}
          >
            Services
            <Image
              src={DropDownIcon}
              alt="Dropdown Icon"
              className="dropdown-icon"
            />
            {isServicesMenuOpen && (
              <div className="dropdown-menu">
                {dropItems.map((dropdown, index) => (
                  <a key={index} href="#" className="dropdown-item">
                    {dropdown.dropItem}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="tags">
            Case Studies
          </a>
          <a href="#" className="tags">
            Blog
          </a>
          <a href="#" className="tags">
            About
          </a>
          <a href="#" className="tags">
            Contact Us
          </a>
          <button className="header-btn-call">Schedule a Call</button>
        </div>
      </div>
    </div>
  );
}
