import { useEffect } from "react";
import { gsap } from "gsap";

export default function AnimateLinkHover(selector: string, width: string) {
    useEffect(() => {
        const socialLink = document.querySelector(selector);

        if (socialLink) {
            const line = socialLink.querySelector(".underline");

            const handleMouseEnter = () => {
                gsap.to(line, { width: width, duration: 0.5, ease: "power2.out" });
            };

            const handleMouseLeave = () => {
                gsap.to(line, { width: "0%", duration: 0.5, ease: "power2.out" });
            };

            socialLink.addEventListener("mouseenter", handleMouseEnter);
            socialLink.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                socialLink.removeEventListener("mouseenter", handleMouseEnter);
                socialLink.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [selector]);
}