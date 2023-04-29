import { testimony } from "../constant";
const Testimony = () : JSX.Element  => {
    return (
        <section className=" p-10 min-h-[70vh] text-white hover:shadow-[inset_0px_2px_20px_1px_black] section bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
            <h3 className="text-2xl font-bold italic pb-5 hover-class section">Testimony</h3>
            <ul className="overflow-x-auto flex rounded-lg p-1 min-h-[200px] bg-white">
                {
                    testimony.map((testimony, index) => {
                        return (
                            <li key={index} className="p-2 min-w-[35vw] m-1   h-[220px] overflow-scroll bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
                                <div className="h-full block" >
                                    <a href={testimony.link} target="_blank" className="text-2xl font-bold italic7 hover:text-[aqua] text-purple-500">{testimony.name}</a>

                                <div className="text-sm">{testimony.letter}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
      </section>
    );
  };

  export default Testimony;
