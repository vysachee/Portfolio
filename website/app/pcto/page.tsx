"use client"

import "./pcto.css"

import React, { useEffect } from "react";
import animateLinkHover from "../animateLinkLine";
import Link from "next/link";

export default function Pcto() {

  return (
    <main>
        
            <div className="pcto-text">
                <h1>
                    PCTO
                </h1>
                <div className="pcto-divider">
                </div>
                
                <div className="showtell">
                    <br/>
                    <h2>
                        \\ SHOW & TELL
                    </h2>
                    <div className="pcto img-showtell"/>
                    <div className="content1">
                        <p>
                            Durante il mio 4° anno ho partecipato ad un progetto in collaborazione con l'Università di Pavia.<br/>
                            Qui io e i miei compagni abbiamo seguito un corso pomeridiano sullo storytelling e abbiamo creato un video che raccontava della storia di Garibaldi e dell'amputazione della sua gamba,
                            doppiando le voci dei personaggi.
                        </p>
                    </div>
                    <br/>
                    <Link href="https://set.unipv.it/" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> SHOW & TELL </button></Link>
                    <br/><br/>
                </div>

                <div className="pon">
                    <br/>
                    <h2>
                        \\ PON English in Action
                    </h2>
                    <div className="pcto img-pon">
                    </div>
                    <p>
                        Nel PON di English in Action io e i miei compagni abbiamo fatto diversi lavori legati al mondo cinematografico.
                        <br/>
                        tra i lavori svolti abbiamo creato un e-book digitale con esercizi di ascolto e comprensione in inglese.
                    </p>
                    <br/>
                    <Link href=" https://my.visme.co/view/6xq8jpj3-untitled-project#s1" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> English in Action </button></Link>
                    <br/><br/>
                </div>

                <div className="heartbrain">
                    <br/>
                    <h2>
                        \\ HEARTBRAIN
                    </h2>
                    <div className="pcto img-heartbrain">
                    </div>
                    <p>
                        HeartBrain è un laboratorio di innovazione al servizio di scuole, università e aziende.
                        Durante le due settimane alla HeartBrain ho dovuto creare un sito web insieme ad alcuni studenti dell'istituto L.Cossa
                        Qui ho acquisito competenze nell'ambito dello sviluppo web e ho compreso le difficoltà di soddisfare le richieste del cliente.
                    </p>
                    <br/>
                    <Link href="https://heartbrain.group/" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> HEARTBRAIN</button></Link>
                    <br/><br/>
                </div>
                
                <div className="policlinico">
                    <h2>
                        \\ POLICLINICO SAN MATTEO 
                    </h2>
                    <div className="pcto img-sanmatteo">
                    </div>
                    <p>
                        Al Policlinico San Matteo ho lavorato nell'assistenza tecnica. <br/>
                        Fin da subito si è notato un clima di lavoro inclusivo,
                        è stata un'esperienza molto piacevole ed istruttiva che mi ha permesso di approfondire, non solo la parte software, 
                        ma soprattutto la parte hardware
                        dei diversi dispositivi ed il loro installamento. 
                    </p>
                    <br/>
                    <Link href="https://www.sanmatteo.org/site/home.html" rel="noopener noreferrer" target="_blank"><span>&#8599; </span><button> POLICLINICO</button></Link>
                    <br/><br/>
                </div>
            </div>

    </main>
  );
}