"use client"

import React, { useEffect } from "react";
import animateLinkHover from "../animateLinkLine";
import "./contact.css"

export default function Contact() {

    animateLinkHover(".twitter2", "82%");
    animateLinkHover(".instagram2", "84%");
    animateLinkHover(".linkedin2", "83%");

    return ( 
        <main> 
            <div className="contact">
                <h1>CONTACT</h1>
                
                <div className="contact-sections">
                    <div className="mail">
                        <h2>MAIL</h2>
                        <p>&#8599; toms.d27@gmail.com</p>
                    </div>

                    <div className="social">
                        <h2>SOCIAL MEDIA</h2>
                        <div className="social-links">
                            <div className="twitter2">
                                <a href="#">&#8599; twitter</a>
                                <div className="underline"></div>
                            </div>

                            <div className="instagram2">
                                <a href="#">&#8599; instagram</a>
                                <div className="underline"></div>
                            </div>

                            <div className="linkedin2">
                                <a href="#">&#8599; linkedin</a>
                                <div className="underline"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
