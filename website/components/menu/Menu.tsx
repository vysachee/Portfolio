"use client"
import React, { useState, useRef, useEffect } from "react";
import animateLinkHover from "@/app/animateLinkLine";
import Link from "next/link";
import { gsap } from "gsap";
import "./menu.css";

const menuLinks = [
  { path: "/homePage", label: "Home." },
  { path: "/about", label: "About." },
  { path: "/work", label: "Work." },
  { path: "/pcto", label: "PCTO." },
  { path: "/contact", label: "Contacts." },
];

const Menu = () => {

  animateLinkHover(".twitter", "35%");
  animateLinkHover(".instagram", "35%");
  animateLinkHover(".linkedin", "35%");

  const container = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tl = useRef<GSAPTimeline | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        ease: "power3.in0ut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.08,
        ease: "power3.in0ut",
        delay: -0.65,
      });
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isMenuOpen]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="menu-logo" onClick={toggleMenu}>
          <Link href="/homePage" >toms</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>

      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href="/homePage">toms</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>

        <div className="menu-close-icon">
          <p></p>
        </div>

        <div className="menu-copy">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div className="menu-link-item-holder" onClick={toggleMenu}>
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-info">      
            <div className="menu-info-col">

              <div className="twitter">
                <a href="#">&#8599; twitter</a>
                <div className="underline"></div>
              </div>

              <div className="instagram">
                <a href="#">&#8599; instagram</a>
                <div className="underline"></div>
              </div>

              <div className="linkedin">
                <a href="#">&#8599; linkedin</a>
                <div className="underline"></div>
              </div>
            </div>
            
            <div className="menu-info-col">
              <p>&#8599; toms.d27@gmail.com</p>
              <div className="underline"></div>
              <p>191 872 3912</p>
            </div>
          </div>
        </div>

        <div className="menu-preview">
          <p>toms/24</p>
        </div>
      </div>
    </div>
  )
};

export default Menu;