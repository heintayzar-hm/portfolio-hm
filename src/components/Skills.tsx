import { useEffect, useRef, useState } from "react";
import { mySkills, mySkillsDescription, quote, totalProjects } from "../constant";
import MySkills from "./MySkills";
import TextWriter from "./TextWriter";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = (): JSX.Element => {
    const [showFrontend, setShowFrontend] = useState(true);
    const mySkillsDescriptionRef = useRef(null);
    const mySkillsRef = useRef(null);
    const showHandler = () => {
        setShowFrontend(!showFrontend);
    }

    useEffect(() => {
        const description = mySkillsDescriptionRef.current;
        const skills = mySkillsRef.current;

        gsap.fromTo(
          description,
          { x: "-=100", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
              trigger: description,
                start: "top 100%",
                end: "bottom 100%",
                scrub: true,
                toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
            skills,
            { x: "+=100", opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: skills,
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: true,
                    toggleActions: "play none none none",
                },

            }
        )
      }, []);



    return (
        <section id="skills" className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700  p-16 text-white section hover:shadow-[inset_0px_2px_20px_1px_black] overflow-x-hidden">
            <div className="text-2xl font-bold italic hover-class pb-5 font-secondary">Skills</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <p className="break-words" ref={mySkillsDescriptionRef}>
                <pre className="whitespace-pre-line">
                        {
                            mySkillsDescription.map((str) => {
                                return (
                                    <><p>&nbsp; &nbsp; &nbsp; {str}</p><br /></>
                                );
                            })
                }
                </pre></p>
                <div>
                    <div ref={mySkillsRef}>
                        <h3 className="grid sm:grid-cols-2 grid-cols-1 px-2 py-3 text-center">
                            <button type="button" disabled={(showFrontend)} className={(!showFrontend) ? ``: `bg-[#08fdd8] text-black p-2 border-r border-[#08fdd8]`} onClick={showHandler}>Frontend</button>
                            <button type="button" disabled={(!showFrontend)} className={(showFrontend) ? ``: `bg-[#08fdd8] text-black p-2 border-l border-[#08fdd8]`} onClick={showHandler}>Backend </button>
                        </h3>
                        {showFrontend && (<section className="border border-[#08fdd8] min-h-[400px] px-2 py-3 space-y-5">
                            <MySkills skills={mySkills[0].skills}></MySkills>
                            <TextWriter characters={
                                quote[0]
                            }></TextWriter>
                        </section>)}
                        {!showFrontend && (<section className="border border-[#08fdd8] min-h-[400px] px-2 py-3 space-y-5">
                            <MySkills skills={mySkills[1].skills}></MySkills>
                            <TextWriter characters={
                                quote[1]
                            }></TextWriter>
                        </section>)}
                </div>
            </div>
            </div>
        </section>
    );
  };

  export default Skills;
