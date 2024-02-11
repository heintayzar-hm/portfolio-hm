import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {
    const navRef = useRef(null);
    const [showNav, setShowNav] = useState(false);
    const navMobile = (e:any) => {
        e.currentTarget.classList.toggle("change");
        setShowNav(!showNav);
    }
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

        gsap.fromTo(
            ".navContainer",
            {
                x: "-100%", opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.5,

            }
        )
    })
    return (
        <>
        <nav ref={navRef} className="text-black md:block hidden text-sm lg:text-lg fixed top-0 lg:px-10 w-[100%] z-50 bg-white">
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
            <nav onClick={navMobile} className="container z-50 md:hidden block fixed top-10 left-10">
            <div className="bar1"></div>
  <div className="bar2"></div>
                <div className="bar3"></div>
                {
                    showNav && (
                        <ul className="flex py-5 navContainer fixed left-3 right-3 mt-4 rounded-lg flex-col items-center justify-center gap-5 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700 justify-content-center">
            <li className="nav-link">
                <Link to="contact"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Contact Me</Link>
                </li>
                <li className="nav-link ">
                <Link to="testimony"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Testimony</Link>
                </li>
                <li className="nav-link ">
                <Link to="projects"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Projects</Link>
                </li>
                <li className="nav-link ">
                <Link to="skills"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Skills</Link>
                </li>
                <li className="nav-link ">
                <Link to="about"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">About Me</Link>
                </li>
                <li className="nav-link ">
                <Link to="header"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-thin">Header</Link>
                </li>

            </ul>
                    )
                }
        </nav>
        </>
    )
}

export default Navbar
