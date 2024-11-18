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

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="header-main">
      <div className="header-inner">
        <div
          className="Main-logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
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
            <a onClick={() => scrollToSection("services")}>Services</a>
            <Image
              src={DropDownIcon}
              alt="Dropdown Icon"
              className="dropdown-icon"
            />
            {isServicesMenuOpen && (
              <div className="dropdown-menu">
                {dropItems.map((dropdown, index) => (
                  <a
                    key={index}
                    href="#"
                    className="dropdown-item"
                    onClick={() => scrollToSection("services")}
                  >
                    {dropdown.dropItem}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="tags"
            onClick={() => scrollToSection("skills")}
          >
            Case Studies
          </a>
          <a
            href="#"
            className="tags"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </a>
          <a href="#" className="tags" onClick={() => scrollToSection("About")}>
            About
          </a>
          <a
            href="#"
            className="tags"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </a>
          <button className="header-btn-call">Schedule a Call</button>
        </div>
      </div>
    </div>
  );
}
