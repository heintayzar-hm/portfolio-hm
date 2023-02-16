
const Header = () : JSX.Element  => {
  return (
    <section className="h-72 bg-slate-500 text-white">
        <div className="text-3xl p-10 flex flex-col space-y-5">
        <span className="font-bold italic">Hi There,</span>
          <h2 className="font-semibold ">I'm <span className="text-cyan-500">Hein Tay Zar</span></h2>
          <span className="italic text-base px-5">Full-Stack Web Developer</span>
       </div>
      </section>
  );
};  

export default Header;