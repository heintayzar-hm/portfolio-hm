import { useEffect, useRef } from "react";
import { myProjects } from "../constant";
import Project from "./Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Projects = (): JSX.Element => {
    const projectsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const projects = projectsRef.current;
        if(!projects) return;
        gsap.fromTo(
            projects.children,
            {
                opacity: 0,
                y: 100,

            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.3,
                ease: "circ.inOut",
                paused: true,
                scrollTrigger: {
                    trigger: projects,
                    start: "top 100%",
                    end: "bottom 100%",
                    scrub: true,
                    toggleActions: "play none none none",
                }
            }
        )
        }, []);

    return (

        <section id="projects" className=" p-10 text-white section hover:shadow-[inset_0px_2px_20px_1px_black] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
            <div className="text-2xl font-bold italic pb-5 hover-class">Projects</div>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]   md:grid-cols-[repeat(auto-fill,minmax(350px,_1fr))] gap-10" ref={projectsRef}>
                {
                    myProjects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                name={project.name}
                                live_link={project.live_link}
                                github_link={project.github_link}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                id={project.id}
                            />
                        )
                    })
                }
            </ul>
        </section>

    );
  };

  export default Projects;
