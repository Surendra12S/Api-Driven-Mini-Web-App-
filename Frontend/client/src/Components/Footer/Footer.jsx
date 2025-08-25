import React from "react";
import "./Footer.css";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
        <p>Made By Surendra Dasari</p>
      <p>© 2025 GitHub Repo Finder. All rights reserved.</p>
      <div className="SocialIcons" >
       <a href="https://github.com/Surendra12S" ><IoLogoGithub /></a>  
       <a href="https://www.linkedin.com/in/dasari-surendra" ><FaLinkedin /></a>
       <a><FaXTwitter /></a>
      </div>
    </footer>
  );
}
