import React from "react";
import "./Footer.css";
import footer_image from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  const brandName = "Shopify UCC";
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Company", href: "/company" },
    { label: "Products", href: "/products" },
    { label: "Offices", href: "/offices" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: instagram_icon,
      alt: "Instagram",
      href: "https://www.instagram.com/",
    },
    {
      icon: pintester_icon,
      alt: "Pinterest",
      href: "https://www.pinterest.com/",
    },
    {
      icon: whatsapp_icon,
      alt: "WhatsApp",
      href: "https://wa.me/23399329539",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_image} alt={`${brandName} logo`} />
        <p>{brandName.toUpperCase()}</p>
      </div>

      <ul className="footer-links">
        {footerLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <div className="footer-social-icon">
        {socialLinks.map((social) => (
          <a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon-container"
            title={social.alt}
          >
            <img src={social.icon} alt={social.alt} />
          </a>
        ))}
      </div>

      <div className="footer-copyright">
        <hr />
        <p>
          © {currentYear} {brandName}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
