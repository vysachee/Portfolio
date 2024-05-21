"use client"

import React, { useEffect } from "react";
import { gsap } from "gsap";
import animateLinkHover from "../animateLinkLine";
import "./contact.css"

export default function Contact() {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".social-links span, .contact h1,.mail p, .mail h2");
        let animationInitialized = false;
      
        function animateElements() {
            if (animationInitialized) return;
            animationInitialized = true;
        
            elementsToAnimate.forEach((element: Element) => {
                const originalText = element.textContent || "";
                let index = 0;
      
            const shuffleElement = setInterval(() => {
                if (index < originalText.length) {
                    let shuffledText = "";
                    for (let i = 0; i <= index; i++) {
                    shuffledText +=
                        i < index ? originalText[i] : Math.random().toString(36)[2];
                    }
                    if (element) {
                    element.textContent =
                        shuffledText + originalText.substring(index + 1);
                    }
                    index++;
                } else {
                    clearInterval(shuffleElement);
                    if (element) {
                    element.textContent = originalText;
                    }
                }
            }, 60);
        });
    }
      
        animateElements();
      });

    animateLinkHover(".social-links", "82%");
    animateLinkHover(".instagram", "84%");
    animateLinkHover(".linkedin", "83%");

    return ( 
        <main> 
            <div className="contact">
                <h1>CONTACT</h1>
                
                <h3>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</h3>
                
                <div className="contact-sections">
                    <div className="mail">
                        <h2>MAIL</h2>
                        <p>&#8599; toms.d27@gmail.com</p>
                    </div>

                    <div className="social">
                        <h2>SOCIAL MEDIA</h2>
                        <div className="social-links">
                            <div className="twitter">
                                <a href="#"><span>&#8599; Twitter</span></a>
                                <div className="underline"></div>
                            </div>
                            <div className="instagram">
                                <a href="#"><span>&#8599; Instagram</span></a>
                                <div className="underline"></div>
                            </div>
                            <div className="linkedin">
                                <a href="#"><span>&#8599; Linkedin</span></a>
                                <div className="underline"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
