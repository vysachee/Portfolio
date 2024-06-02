"use client";
import "./work.css";
import React from "react";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";


interface CardType {
    url: string;
    id: number;
}
  
export default function Work() {
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
          url: "/img-one.jpg",
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
        <div className="work-text">
            <h1>
                Work
            </h1>
            <p> 
                Durante questi 5 anni ho imparato diversi linguaggi di programmazione 
                tra cui Visual basic, Javascript, CSS, C, Java, PHP 
                che mi hanno permesso di sviluppare diversi progetti.
                <br/>
                <br/>
                <center>Qui trovate alcuni dei progetti che ho creato durante il mio percorso:</center>
            </p>

            <HorizontalScrollCarousel />

        </div>        
    );
}
