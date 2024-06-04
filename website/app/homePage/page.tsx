"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import './home.css';

export default function Home() {

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll("p:not(.intro), .logo h1");
    const introTag = document.querySelector(".intro");
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
        }, 100);
      });
    }

    //SHUFFLE DELL'INTRODUZIONE
    function animateIntroTag() {
      let currentText = "";
      let index = 0;

      if (introTag) {
        const originalText = introTag.textContent || "";
        const revealText = setInterval(() => {
          if (index < originalText.length) {
            currentText += originalText[index];
            introTag.textContent = currentText;
            index++;
          } else {
            clearInterval(revealText);
          }
        }, 25);
      }
    }

    /*PER IMMAGINE*/
    function animateMasks() {
      const masks = document.querySelectorAll<HTMLElement>(".hero-img .mask");
      const clipPathValues = [
        "polygon(10% 0, 0 0, 0 100%, 10% 100%)",
        "polygon(20% 0, 10% 0, 10% 100%, 20% 100%)",
        "polygon(30% 0, 20% 0, 20% 100%, 30% 100%)",
        "polygon(40% 0, 30% 0, 30% 100%, 40% 100%)",
        "polygon(50% 0, 40% 0, 40% 100%, 50% 100%)",
        "polygon(60% 0, 50% 0, 50% 100%, 60% 100%)",
        "polygon(70% 0, 60% 0, 60% 100%, 70% 100%)",
        "polygon(80% 0, 70% 0, 70% 100%, 80% 100%)",
        "polygon(90% 0, 80% 0, 80% 100%, 90% 100%)",
        "polygon(100% 0, 90% 0, 90% 100%, 100% 100%)",
      ];

      setTimeout(() => {
        masks.forEach((mask, index) => {
          gsap.to(mask, {
            clipPath: clipPathValues[index % clipPathValues.length],
            duration: 1,
            delay: index * 0.1,
          });
        });
      });
    }

    animateElements();
    animateIntroTag();
    animateMasks();
    
  });

  return (
    <main>
      <div className='body'> 
        <nav>
          <div className="logo-container">
            <div className="logo"><h1>TOMS</h1></div>
            <div className="logo-name">studente / / / / / / / / / / /</div>
          </div>
          <div className="nav-buttons">
            <div className="btn">
              <Link href="/work"><button>projects</button></Link>
            </div>
            <div className="btn">
              <Link href="/about"><button>about</button></Link>
            </div>
          </div>
        </nav>

        <div className="sub-nav">
          <p className="intro">
            Hey, sono Tomas Daidone. <br></br>Sono uno studente di informatica & un aspirante programmatore.
          </p>
          <p className="primary"> portfolio 2024</p>
        </div>

        <div className='text-wrapper'>
          <h1>WELCOME !!!</h1>
          <h1>WELCOME !!!</h1>
          <h1>WELCOME !!!</h1>
          <h1>WELCOME !!!</h1>
        </div>

        <div className="hero-img">
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
          <div className="mask"></div>
        </div>

        <div className='footer'>
          <div className="slide-copy">
            <div className="slide-index"><p>y / 05</p></div>
            <div className="slide-name"><p> tomas daidone</p></div>
            
          </div>

          <div className="slide-info">
            <div className="name">
              <p>Progetto</p>
              <p>TOMS</p>
              <br/>
              <p>7 e mezzo</p>
              <br/>
              <p>Contaminazione informatica</p>
            </div>
            <div className="language">
              <p>LINGUAGGI</p>
              <p>javascript, css</p>
              <br/>
              <p>java</p>
              <br/>
              <p>HTML, css</p>
            </div>
            <div className="year">
              <p>ANNO</p>
              <p>2024</p>
              <br/>
              <p>2023</p>
              <br/>
              <p>2021</p>
            </div>

            <div className="type">
              <p>TIPO</p>
              <p>portfolio</p>
              <br/>
              <p>gioco</p>
              <br/>
              <p>quiz</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}