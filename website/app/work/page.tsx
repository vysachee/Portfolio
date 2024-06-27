"use client";
import "./work.css";
import React from "react";
export default function Work() {

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
                Qui trovate alcuni dei progetti che ho creato durante il mio percorso:
            </p>
            
            
            <div className="block-container2">
                <h2>
                    \\ Toms
                </h2>
                <div className="block2 block2-1">
                </div>
                <div className="toms">
                    <br/>
                    <p>
                        Ho creato questo sito web nel mio ultimo anno utilizzando Javascript e CSS.<br/><br/>
                        È stato sicuramente il progetto più grande ed anche più impegnativo dei miei 5 anni alle scuole superiori, e oltre ad aver aumentato le mie conoscenze 
                        in entrambi questi linguaggi di programmazione, ho anche capito quanto sia impegnativo creare un sito web da zero.<br/><br/>
                        Contro ogni mia aspettativa la parte più complicata è stata quella di design, (in particolare centrare i div).<br/>
                        Ho inoltre utilizzato GSAP per le animazioni presenti sul sito, una libreria JavaScript molto potente e versatile utilizzata per creare animazioni web.

                    </p>
                </div>


                <h2>
                    <br/><br/>
                    // 7 e mezzo
                </h2>
                <div className="block2 block2-2">
                </div>
                
                <div className="sette">
                    <p>
                        Questo progetto è stato realizzato interamente in Java durante in quarta superiore.<br/><br/>
                        Il gioco del 7 e mezzo è un popolare gioco di carte italiano in cui i giocatori cercano 
                        di avvicinarsi il più possibile a 7,5 punti senza superarlo, 
                        utilizzando un mazzo di 40 carte italiane. <br/>
                        <br/>Le carte numeriche valgono il loro valore nominale e le figure mezzo punto. 
                        Uno dei giocatori assume il ruolo del banco e distribuisce una carta coperta a ciascun giocatore e a se stesso. 
                        I giocatori possono chiedere altre carte o stare, cercando di non sballare superando 7,5. <br/>
                        <br/>
                        Dopo che tutti hanno giocato, il banco rivela le sue carte e gioca secondo le stesse regole. 
                        Si confrontano poi i punteggi e vince chi ha il punteggio più alto senza superare 7,5.    
                    </p>
                    <br/>
                    <a download href="/SevenHalf.zip"><span>&#8595; DOWNLOAD 7 e MEZZO</span></a>
                    <br/><br/>
                </div>

                
                    
                <h2>
                <br/><br/>
                    // Contaminazione Informatica
                </h2>
                <div className="block2 block2-3">
                </div>
                
                <div className="cont-if">
                    <p>
                    La classe è stata invitata a partecipare al progetto “Contaminazione informatica” dell'istituto Volta di Pavia, 
                    il cui obiettivo è promuovere la cultura digitale tra gli studenti, sviluppare competenze informatiche trasversali e 
                    avvicinarli alle professioni del digitale.<br/><br/>
                     Le attività previste includono workshop e laboratori pratici su diverse tecnologie,
                    come la creazione di siti su argomenti matematici, nonché la partecipazione a concorsi e gare di informatica. <br/><br/>
                    I risultati attesi sono un aumento della consapevolezza degli studenti sulle tematiche digitali, 
                    lo sviluppo di competenze informatiche utili nel mondo del lavoro e un maggiore interesse verso le professioni digitali.
                    </p>
                    <br/>
                    <br/>
                    <a download href="/Cont-inf.zip"><span>&#8595; Download Contaminazione informatica</span></a>
                    <br/><br/>
                </div>
            </div>

        </div>        
    );
}
