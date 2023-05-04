import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { x: "-100%", opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: navRef.current,
                    start: "top top",
                    end: "+=700 top",
                    scrub: true,
                }
            }
        )
    })
    return (
        <nav ref={navRef} className="text-white text-lg fixed top-0 px-10 w-[100%] z-50 bg-black">
            <ul className="w-full h-6">
            <li className="nav-link px-2 py-3 float-right">
                <Link to="contact"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Contact Me</Link>
                </li>
                <li className="nav-link px-2 py-3 float-right">
                <Link to="testimony"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Testimony</Link>
                </li>
                <li className="nav-link px-2 py-3 float-right">
                <Link to="projects"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Projects</Link>
                </li>
                <li className="nav-link px-2 py-3 float-right">
                <Link to="skills"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Skills</Link>
                </li>
                <li className="nav-link px-2 py-3 float-right">
                <Link to="about"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">About Me</Link>
                </li>
                <li className="nav-link px-2 py-3 float-right">
                <Link to="header"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Header</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
