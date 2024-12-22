import React, { useState, useEffect } from "react";
import { usePrivy } from "@privy-io/react-auth";
import "./WelcomePage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDisconnect, useAccount} from 'wagmi';
import tradeCatalystLogo from "../../assets/images/tradeCatalystLogo.svg";
import tradeCatalystYellow from "../../assets/images/tradeCatalystIcon.svg"

const WelcomePage = () => {
  const { logout } = usePrivy();
  const {address: userAddress} = useAccount()
  const {disconnect} = useDisconnect();
  const navigate = useNavigate();
  // console.log("user address is here:", userAddress);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(userAddress);
    toast.success("Address copied!");
  };

  const handleLogoutClick = async (event) => {
    event.preventDefault();
    try {
      await logout();
      // disconnect()
      setTimeout(() => {
        navigate("/");
      }, 100);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const handleTelegramClick = () => {
    window.open("https://bit.ly/4etjV40", "_blank");
  };

  return (
    <div className="welcome-container">
      <img
        src={tradeCatalystLogo}
        alt="TradeCatalyst Logo"
        className="welcome-logo"
      />
      <h1>Welcome to TradeCatalyst</h1>

      <p className="request-whitelist">
        We are still in closed beta and onboarding is whitelisted. Please fill
        out this form to get whitelisted for closed beta.
      </p>

      <div className="address-container">
        <input
          value={userAddress || ""}
          readOnly
          className="address-textarea"
        />
        <button className="copy-button" onClick={copyToClipboard}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>

      <div className="button-container">
        <button className="action-button" style={{backgroundColor:"#FFDE02", color:"#000"}} onClick={handleLogoutClick}>
          <ArrowBackIcon
            style={{ fontSize: 24, marginRight: 8, color: "black" }}
          />
          Go back
        </button>
        <button className="action-button" onClick={handleTelegramClick}>
          
          Get Whitelisted
        </button>
      </div>
      <p style={{fontSize:"14px"}}>
        <span className="note">Please Note:</span> TradeCatalyst will never email you or
        contact you through any other means to collect private key, wallet
        address or ask for money.
      </p>

      <ToastContainer autoClose={2000} hideProgressBar={true} />
    </div>
  );
};

export default WelcomePage;
