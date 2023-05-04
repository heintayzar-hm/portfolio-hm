import { mySocialMedia } from "../constant";
import Social from "./Social";
const Footer = () : JSX.Element  => {
    return (
        <footer>
<ul className="flex gap-5 py-3 px-5 items-center justify-center section  hover:shadow-[inset_0px_2px_20px_1px_black] bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700">
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
