"use client"

import "./about.css"

import React, { useEffect } from "react";
import animateLinkHover from "../animateLinkLine";
import Link from "next/link";

export default function About() {

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll(".resume span, .about-text h1");
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
  
  animateLinkHover(".resume", "100%");

  return (
    <main>
      
        <div className="about-text">
          <h1>
            ABOUT   
          </h1>
          <div className="about-divider">
            <h3>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / </h3>
          </div>
          
          <h2>Hey sono Tomas Daidone, sono uno studente dell'indirizzo informatica dall'Italia.<br></br> 
            La programmazione mi ha sempre affascinato e in questi anni, imparandola, questa passione ha continuato a crescere.<br></br> 
            Oltre alla programmazione mi piace molto disegnare, praticare sport e leggere. <br></br> 
            Uno dei miei sogni è quello di girare per il mondo e riuscire a visitare paesi come il Giappone e l'Irlanda.
          </h2>
        </div>

        
        <div className="resume">
            <div>
              <Link href="/CV.pdf" rel="noopener noreferrer" target="_blank"> <span>&#8595; Curriculum</span></Link>
            <div className="underline"></div>
          </div>
        </div>
      
    </main>
  );
}
