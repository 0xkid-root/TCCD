import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import "./NavbarSection.css";
import WalletLoginIcon from "../../assets/images/WalletLoginIcon.svg";
import Logo from "../../assets/images/tradeCatalystLogo.svg";
import HeroSection from "./HeroSection";
import LoginCardSection from "./LoginCardSection";

const NavbarSection = () => {
  const { login } = usePrivy();

  return (
    <div className="mainDiv">
      {/* Navbar Container */}
      <div className="navbar-container">
        {/* Logo Wrapper */}
        <div className="logo-wrapper">
          <img src={Logo} alt="Company Logo" className="company-logo" />
        </div>

        {/* Connect Wallet Wrapper */}
        <div className="connect-wrapper" onClick={login}>
          <img src={WalletLoginIcon} alt="Wallet Icon" className="wallet-icon" />
          <button className="connect-button">Login</button>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Login Card Section */}
      <LoginCardSection />
    </div>
  );
};

export default NavbarSection;