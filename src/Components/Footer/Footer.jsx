import React from "react";
import footer_image from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Separator } from "@/components/ui/separator";

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
    <footer className="mt-auto border-t bg-background">
      <div className="container flex flex-col items-center gap-8 py-10 md:gap-10 md:py-14">
        <div className="flex flex-col items-center gap-3">
          <img
            src={footer_image}
            alt={`${brandName} logo`}
            className="h-16 w-auto md:h-20"
          />
          <p className="text-xl font-semibold md:text-2xl">
            {brandName.toUpperCase()}
          </p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-muted-foreground md:gap-8 md:text-base lg:gap-12">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-colors hover:bg-secondary/80"
              title={social.alt}
            >
              <img src={social.icon} alt={social.alt} className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="w-full max-w-md text-center">
          <Separator className="mb-4" />
          <p className="text-sm text-muted-foreground">
            © {currentYear} {brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
