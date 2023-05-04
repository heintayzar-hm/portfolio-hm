import AboutMeElements from "./AboutMeElements";

import Social from "./Social";
import { myData, mySocialMedia } from "../constant";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutMe = (): JSX.Element => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current

        if (!section) return;
        gsap.fromTo(
            section.children,
            { y: -100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                ease: "back.in",
                duration: 0.7,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: section,
                    start: "top 100%",
                    end: "bottom 100%",
                    toggleActions: "play none none none",
                },
            }
        )
    })

    return (
        <section id="about" className=" text-white p-10 min-h-screen section hover:shadow-[inset_0px_2px_20px_1px_black] flex flex-col gap-3 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"  >
            <div className="text-2xl font-bold italic pb-5 hover-class">About me</div>
            <span><span className="text-[#08fdd8]">hein_tay_zar</span> = &#123;</span>
            <div ref={sectionRef} className="flex flex-col gap-3">
            {
                myData.map((data, index) => {
                    return (
                        <AboutMeElements key={index} name={data.name} value={data.value} />
                    )
                })
            }
           </div>
            <span>&#125;</span>
            <div className="flex flex-col items-end w-full">
            <div className="text-2xl font-bold italic pt-5 hover-class">Social Media</div>
            <ul className="flex gap-5 py-3 px-5">
                {
                    mySocialMedia.map((data, index) => {
                        return (
                            <Social key={index} name={data.name} value={data.value} icon={data.icon} />
                        )
                    })
                }
            </ul>
            </div>
      </section>
    );
  };

  export default AboutMe;
