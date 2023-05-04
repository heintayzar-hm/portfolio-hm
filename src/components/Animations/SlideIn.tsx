import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface PropsSlideIn {
    children: React.ReactNode;
  }


const SlideIn = ({children}:PropsSlideIn) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    gsap.fromTo(
      wrapper,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.5,
        ease: "circ.inOut",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 100%",
          end: "bottom 100%",
          scrub: true,
          toggleActions: "play none none none",
        },

      }
    );
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
        {children}
    </div>
  );
}

export default SlideIn;
