"use client"
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import './loader.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLink, setShowLink] = useState(false); // Aggiunto stato per mostrare/nascondere il link

  useEffect(() => {
    const counter = document.querySelector(".counter p");

    function shuffleText(finalText: string, duration: number, callback?: () => void) {
      let i = 0;
      const shuffleInterval = setInterval(() => {
        if (counter && i < duration) {
          counter.innerHTML = Math.random().toString(36).substring(2, 8);
          i++;
        } else {
          clearInterval(shuffleInterval);
          if (counter) counter.innerHTML = finalText;
          if (callback) callback();
        }
      }, 100);
    }

    function removeLetters() {
      let text = counter ? counter.innerHTML : null;
      const removeInterval = setInterval(() => {
        if (text && text.length > 0) {
          text = text.substring(0, text.length - 1);
          if (counter) counter.innerHTML = text;
        } else {
          //finisce la rimozione
          clearInterval(removeInterval);
          setShowLink(true); //fa vedere il link dopo la rimozione
        }
      }, 100);
    }

    if (isLoading) {
      gsap.to(counter, {
        innerHTML: 100 + "%",
        duration: 3,
        snap: "innerHTML",
        ease: "none",
        onComplete: () => {
          setTimeout(
            () =>
              shuffleText("TOMS/24", 20, () => {
                setTimeout(removeLetters, 500);
              }),
            500
          );
        },
      });
      setIsLoading(false);
    }

  }, [isLoading]);


  function fadeOutLoader() {
    const loader = document.querySelector(".loader");
    if (loader) {
      gsap.to(loader, {
        opacity: 0,
        pointerEvents: "none",
        duration: 1,
      });
    }
  }

  return (
    <main>
      <div className='body-loader'>
        <div className="loader">
          <div className="counter"><p>0</p></div>
          <div className='redirect' >
            {showLink && ( // Condiziona la visualizzazione del link
              <Link href="/homePage" onClick={fadeOutLoader}><p>START</p></Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}