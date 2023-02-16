import { mySocialMedia } from "../constant";
import Social from "./Social";
const Footer = () : JSX.Element  => {
    return (
        <footer>
<ul className="flex gap-5 py-3 px-5 items-center justify-center bg-slate-300">
                {
                    mySocialMedia.map((data, index) => {
                        return (
                            <Social key={index} name={data.name} value={data.value} icon={data.icon} />
                        )
                    })
                }
            </ul>
</footer>
    );
  };

  export default Footer;
