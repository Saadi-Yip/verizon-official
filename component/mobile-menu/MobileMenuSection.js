import Link from "next/link";
import React, { useState } from "react";

const MobileMenuSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    home: false,
    blog: false,
    pages: false
  })
  const handleDropdownToggle = (section) => {
    setIsDropdownOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <nav className="mean-nav mobile-menu-min-nav">
          <ul>
            <li>
              <a
                role="button"
                className="nf-nav-link"
              >
                <Link href="/" className="nf-nav-link">Home</Link>
              </a>
            </li>
            <li>
              <Link href="/internet" className="nf-nav-link">internet</Link>
            </li>
            <li>
              <a
                role="button"
                className="nf-nav-link"
              >
                <span>Cable TV</span>
              </a>
            </li>
            <li>
              <a
                role="button"
                className="nf-nav-link"
              >
                <span>Policies</span>
                <i
                  className={`fal ${isDropdownOpen.home ? 'fa-minus' : 'fa-plus'}`}
                  role='button'
                  onClick={() => handleDropdownToggle('home')}
                ></i>
              </a>
              <ul className={`submenu ${isDropdownOpen.home ? 'd-block' : 'd-none'}`}>
                <li>
                  <Link href="/pages/disclaimer">Disclaimer</Link>
                </li>
                <li>
                  <Link href="/pages/privacy-policy" className="nf-sub-nav-link">Privacy-policy</Link>
                </li>
                <li>
                  <Link href="/pages/terms-of-service" className="nf-nav-link">Terms Of Service</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/about" className="nf-nav-link">About Us</Link>
            </li>
            <li>
              <Link href="/pages/verizon" className="nf-nav-link">Verizon</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuSection;
