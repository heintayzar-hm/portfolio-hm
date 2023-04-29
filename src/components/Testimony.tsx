import { testimony } from "../constant";
const Testimony = () : JSX.Element  => {
    return (
        <section className=" p-10 min-h-[70vh] text-white hover:shadow-[inset_0px_2px_20px_1px_black] section bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
            <h3 className="text-2xl font-bold italic pb-5 hover-class section">Testimony</h3>
            <ul className="overflow-x-auto flex rounded-lg p-1 min-h-[200px] bg-white">
                {
                    testimony.map((testimony, index) => {
                        return (
                            <li key={index} className="p-2 min-w-[35vw] m-1 text-orange-400 bg-slate-500 min-h-[220px]">
                                <a className="h-full block" href={testimony.link} target="_blank">
                                <div className="text-2xl font-bold italic7">{testimony.name}</div>
                                <div className="">{testimony.letter}</div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
      </section>
    );
  };

  export default Testimony;
