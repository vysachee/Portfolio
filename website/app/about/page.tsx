"use client";

import "./about.css";
import { motion, useTransform, useScroll } from "framer-motion";
import animateLinkHover from "../animateLinkLine";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface CardType {
  url: string;
  id: number;
}

export default function About() {
  
  animateLinkHover(".resume", "100%");
  

  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
      <section ref={targetRef} className="horizontal-scroll-section">
        <div className="horizontal-scroll-container">
          <motion.div style={{ x }} className="horizontal-scroll-content">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };

  const Card = ({ card }: { card: CardType }) => {
    return (
      <div key={card.id} className="horizontal-scroll-card">
        <div
          style={{
            background: `url(${card.url}) no-repeat 50% 50%`,
            backgroundSize: "cover",
          }}
          className="horizontal-scroll-card-image"
        ></div>
        <div className="horizontal-scroll-card-content"></div>
      </div>
    );
  };

  const cards: CardType[] = [
    {
      url: "/imgprova.jpg",
      id: 1,
    },
    {
      url: "/img-two.jpg",
      id: 2,
    },
    {
      url: "/img-three.jpg",
      id: 3,
    },
    {
      url: "/img-four.jpg",
      id: 4,
    },
    {
      url: "/img-five.jpg",
      id: 5,
    },
  ];

  return (
    <main>
      <div className="about-text">
        <h1>ABOUT</h1>
        <h2>

          <br/>
          Hey sono Tomas Daidone, sono uno studente al 5° anno dell'istituto Istituto Tecnico Industriale Statale G. Cardano nell'indirizzo informatica.
          <br/>
          <br/>
          Ho scelto questo indirizzo perchè la programmazione mi ha sempre affascinato e in questi anni,
          imparandola, questa passione ha continuato a crescere e, in futuro, questo campo sarà ancora più evoluto perciò saranno ricercate più persone 
          specializzate nel mondo dell'informatica.
          <br/>
        </h2>
        <HorizontalScrollCarousel />
        <h2>
          Oltre alla programmazione mi piace molto disegnare, passione che ho fin da piccolo e che sviluppo nel mio tempo libero.
          <br/>
          Altre passioni che ho sono la lettura e gli sport, in particolare il basket, la pallavolo e l'atletica leggera.
          <br/>
          Uno dei miei sogni, una volta finite le superiori, è quello di girare per il mondo e conoscere persone di culture diverse dalla mia.
          <br/>
          <br/>
          <center>Qui trovate il mio curriculum e diverse certificazioni che ho ottenuto nel corso di questi 5 anni:</center>
        </h2>
      </div>

      <div className="resume">
        <div>
          <Link href="/CV.pdf" rel="noopener noreferrer" target="_blank">
            <span>&#8595; Curriculum</span>
          </Link>
          <div className="underline"></div>
        </div>
      </div>

      <div className="blocks-container">
          <div className="block block-1">
            <h1>B2 First.</h1>
          </div>

          <div className="block block-2">
            <h1>IGCSE.</h1>
          </div>
            
          <div className="block block-3">
            <h1>Rischio basso.</h1>
          </div>
      </div>
    </main>
  );
}
