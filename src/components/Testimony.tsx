import { testimony } from "../constant";
const Testimony = () : JSX.Element  => {
    return (
        <section className="bg-slate-300 p-10">
            <h3 className="text-2xl font-bold italic pb-5">Testimony</h3>
            <ul className="overflow-x-auto flex rounded-lg p-1 min-h-[200px] bg-white">
                {
                    testimony.map((testimony, index) => {
                        return (
                            <li key={index} className="p-2 min-w-[300px] m-1 text-orange-400 bg-slate-500">
                                <a className="h-full block" href={testimony.link} target="_blank">
                                <div className="text-2xl font-bold italic">{testimony.name}</div>
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
