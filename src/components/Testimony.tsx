import { testimony } from "../constant";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Testimony = (): JSX.Element => {
  return (
    <section
      id="testimony"
      className=" section bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700 p-16 text-white hover:shadow-[inset_0px_2px_20px_1px_black]"
    >
      <h3 className="hover-class section pb-5 font-secondary text-2xl font-bold italic">
        Testimony
      </h3>
      {/* <ul className="overflow-x-auto flex rounded-lg p-1 min-h-[200px] bg-white">
                {
                    testimony.map((testimony, index) => {
                        return (
                            <li key={index} className="p-2 min-w-[35vw] m-1   h-[320px] overflow-scroll bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
                                <div className="h-full block" >
                                    <a href={testimony.link} target="_blank" className="text-2xl font-bold italic7 nav-link">{testimony.name}</a>

                                <div className="text-sm">{testimony.letter}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> */}

          <Carousel
              infiniteLoop
              autoPlay
              interval={2000}
          >
      {
                    testimony.map((testimony, index) => {
                        return (
                            <li key={index} className="py-10 px-10">
                                <div className="" >
                                    <a href={testimony.link} target="_blank" className="">{testimony.name}</a>

                                <div className="">{testimony.letter}</div>
                                </div>
                            </li>
                        )
                    })
                }
      </Carousel>
    </section>
  );
};

export default Testimony;
