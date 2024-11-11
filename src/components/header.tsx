import "@/style/header.css";
import MainLogo from "@/assets/main logo.svg";
import DropwDownIcon from "@/assets/chevron-down.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div className="header-main">
      <div className="header-inner">
        <div className="Main-logo">
          <Image src={MainLogo} alt="Logo image" />
        </div>
        <div className="tags-items">
          <a href="#" className="tags drop-tags">
            Services
            <Image src={DropwDownIcon} alt="" />
          </a>
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
        </div>
      </div>
    </div>
  );
}
