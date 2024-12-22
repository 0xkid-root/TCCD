import React from "react";
import "./HeroSection.css";
import videoSrc from "../../assets/images/1050.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="hero-overlay"></div>

      {/* Content Section */}
      <div className="hero-content">
        <h1 className="hero-title">
          Decentralized liquid copy trading protocol <br />
          with secondary market access
        </h1>
        <p className="hero-description">
          TradeCatalyst enables traders and fund managers to create on-chain, highly
          liquid trading and investment strategies with instant secondary market
          access.
        </p>
        <div className="hero-buttons">
          <Link to="https://t.me/tradecatalyst" target="_blank">
            <button className="hero-button">Say Hello!</button>
          </Link>
          <Link to="https://bit.ly/4etjV40" target="_blank">
            <button className="hero-button demo-button">Join Waitlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;