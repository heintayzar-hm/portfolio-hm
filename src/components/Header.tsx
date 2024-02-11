import { CSSProperties, useEffect } from "react";
import TextWriter from "./TextWriter";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = (): JSX.Element => {
  return (
    <section className="section uppercase text-white border hover:shadow-[inset_0px_2px_20px_1px_black] h-screen" id="header">
      <div className="flex flex-col p-10 text-base h-screen">
        <div className="my-auto grid md:grid-cols-2 grid-cols-1 sm:gap-1 gap-5">
          <div className="flex flex-col">
          <h2 className="font-semibold flex gap-3 text-[50px] text-center">
          <span className="sm:block hidden capitalize">I'm{" "}</span>
          <span className="hover-class-2 p-2" >
            <div className="pop">
              <span style={{ "--i": 1 } as CSSProperties}>H</span>
              <span style={{ "--i": 2 } as CSSProperties}>e</span>
              <span style={{ "--i": 3 } as CSSProperties}>i</span>
                  <span style={{ "--i": 4 } as CSSProperties}>n</span>
                  &nbsp;&nbsp;
              <span style={{ "--i": 5 } as CSSProperties}> </span>
              <span style={{ "--i": 6 } as CSSProperties}>T</span>
              <span style={{ "--i": 7 } as CSSProperties}>a</span>
              <span style={{ "--i": 8 } as CSSProperties}>y</span>
                  <span style={{ "--i": 9 } as CSSProperties}> </span>
                  &nbsp;&nbsp;

              <span style={{ "--i": 10 } as CSSProperties}>Z</span>
              <span style={{ "--i": 11 } as CSSProperties}>a</span>
              <span style={{ "--i": 12 } as CSSProperties}>r</span>
              </div>
          </span>
        </h2>
        <span className=" px-5 text-base mt-3 capitalize">
              Nextjs Developer | Full-Stack Developer(with many technical skills and good communication skills)
            </span>

          <br></br>
            <Link to="contact"
                activeClass="active"

                spy={true}
                smooth={true}
                offset={-20}
                duration={3000}

              className="tracking-widest font-secondary font-thin cursor-pointer hover:bg-[#08fdd8] px-2 py-3 my-3 max-w-[250px] text-center border border-[#08fdd8] text-[#08fdd8] hover:text-black">Contact Me</Link>
          </div>
         <TextWriter characters="Pushing the limits of what's possible with Rails and React"></TextWriter>
        </div>
      </div>
    </section>
  );
};

export default Header;
