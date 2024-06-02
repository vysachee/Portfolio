"use client"

import React, { useEffect } from 'react'
import {gsap} from "gsap"
import "./cursor.css"
const Cursor = () => {
    
    useEffect(() => {
        const cursor = document.getElementById('custom-cursor')!
        const links = document.querySelectorAll('a')
        
        cursor.style.display = "none";
        
        const onMouseMove = (event: { clientX: any; clientY: any; }) => {
            const {clientX, clientY} = event;
            gsap.to(cursor,{x:clientX, y:clientY})
            cursor.style.display = "block";
        };
        
        const onMouseEnterLink = (event : MouseEvent) =>{
            const link = event.target as HTMLElement;
            
            if(link.classList.contains('view')){
                gsap.to(cursor,{scale:3})
                cursor.style.display = 'block';
            }else{
                gsap.to(cursor,{scale:3})
            }
        };

        const onMouseLeaveLink = () =>{
            gsap.to(cursor,{scale:1})
        };
        
        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link)=> {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        });
        
        document.addEventListener('mouseout', () =>{
            cursor.style.display = "none";
        });

    })
    
    return (
        <div id="custom-cursor" className="custom-cursor">
            
        </div>
    );
};

export default Cursor;
