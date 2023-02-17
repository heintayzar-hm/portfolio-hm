import AboutMeElements from "./AboutMeElements";

import Social from "./Social";
import { myData, mySocialMedia } from "../constant";

const AboutMe = () : JSX.Element  => {
    return (
        <section className="bg-yellow-600 text-slate-700 p-10">
        <div className="text-2xl font-bold italic pb-5 hover-class">About me</div>
            {
                myData.map((data, index) => {
                    return (
                        <AboutMeElements key={index} name={data.name} value={data.value} />
                    )
                })
        }
            <div className="text-2xl font-bold italic pt-5 hover-class">Social Media</div>
            <ul className="flex gap-5 py-3 px-5">
                {
                    mySocialMedia.map((data, index) => {
                        return (
                            <Social key={index} name={data.name} value={data.value} icon={data.icon} />
                        )
                    })
                }
            </ul>
      </section>
    );
  };

  export default AboutMe;
