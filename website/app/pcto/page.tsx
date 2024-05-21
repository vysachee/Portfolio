"use client"

import "./pcto.css"

import React, { useEffect } from "react";
import animateLinkHover from "../animateLinkLine";
import Link from "next/link";

export default function Pcto() {

    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".pcto-text h1, .heartbrain h2, .policlinico h2,.heartbrain span, .policlinico span");
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

  return (
    <main>
        
            <div className="pcto-text">
                <h1>
                    PCTO
                </h1>
                <div className="pcto-divider">
                    <h3>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / </h3>
                </div>
                
                <div className="heartbrain">
                    <h2>
                        \\ HEARTBRAIN
                    </h2>
                    <p>
                        HeartBrain è un laboratorio di innovazione al servizio di scuole, università e aziende.<br></br>
                        Durante le due settimane alla HeartBrain ho dovuto creare un sito web insieme ad alcuni studenti dell'istituto L.Cossa<br></br>
                        Qui ho acquisito competenze nell'ambito dello sviluppo web e ho compreso le difficoltà di soddisfare le richieste del cliente.
                    </p>
                    <br></br>
                    <Link href="https://heartbrain.group/" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> HEARTBRAIN</button></Link>
                </div>
                
                <div className="policlinico">
                    <h2>
                        \\ POLICLINICO SAN MATTEO 
                    </h2>
                    <p>
                        Al Policlinico San Matteo ho lavorato nell'assistenza tecnica. <br></br>
                        Fin da subito si è notato un clima di lavoro inclusivo,
                        è stata un'esperienza molto piacevole ed istruttiva che mi ha permesso di approfondire, non solo la parte software, 
                        ma soprattutto la parte hardware
                        dei diversi dispositivi ed il loro installamento. 
                    </p>
                    <br></br>
                    <Link href="https://www.sanmatteo.org/site/home.html" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> POLICLINICO</button></Link>
                </div>
            </div>

    </main>
  );
}