import { CSSProperties } from "react";

const Header = (): JSX.Element => {
  return (
    <section className="section h-72 bg-slate-500 text-white" id="header">
      <div className="flex flex-col space-y-5 p-10 text-3xl">
        <span className="hover-class font-bold">
          <div className="box">
            <span>H</span>
            <span>I</span>
            <span>,</span>
            <span>T</span>
            <span>H</span>
            <span>E</span>
            <span>R</span>
            <span>E</span>
          </div>
        </span>
        <h2 className="font-semibold flex gap-3">
          I'm{" "}
          <span className="hover-class-2 text-cyan-500">
            <div className="pop">
              <span style={{ "--i": 1 } as CSSProperties}>H</span>
              <span style={{ "--i": 2 } as CSSProperties}>e</span>
              <span style={{ "--i": 3 } as CSSProperties}>i</span>
              <span style={{ "--i": 4 } as CSSProperties}>n</span>
              <span style={{ "--i": 5 } as CSSProperties}> </span>
              <span style={{ "--i": 6 } as CSSProperties}>T</span>
              <span style={{ "--i": 7 } as CSSProperties}>a</span>
              <span style={{ "--i": 8 } as CSSProperties}>y</span>
              <span style={{ "--i": 9 } as CSSProperties}> </span>
              <span style={{ "--i": 10 } as CSSProperties}>Z</span>
              <span style={{ "--i": 11 } as CSSProperties}>a</span>
              <span style={{ "--i": 12 } as CSSProperties}>r</span>

            </div>
          </span>
        </h2>
        <span className="hover-class-2 px-5 text-base italic">
          Full-Stack Web Developer
        </span>
      </div>
    </section>
  );
};

export default Header;
