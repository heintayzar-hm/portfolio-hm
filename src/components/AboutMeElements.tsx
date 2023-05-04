
const AboutMeElements = ({ name, value } : {name: string, value: string}) : JSX.Element  => {
    if (name === "resume") {
        return (

            <div className="pl-5">
                <span><span className="text-[#08fdd8] hover-class">{name} =&gt;</span> <a href={`${value}`} target="_blank" className="hover-class-2 hover:cursor-pointer">Link here</a></span>
            </div>

        );
    }

    if (name === "email") {
        return (
            <div className="pl-5">
                <span><span className="text-[#08fdd8] hover-class">{name} =&gt;</span> <a href={`mailto: ${value}`} className="hover-class-2 hover:cursor-pointer">{ value}</a></span>
            </div>
        )
    }

    return (

        <div className="pl-5">
            <span><span className="text-[#08fdd8] hover-class">{name}=&gt;</span> <span className="hover-class-2">{value}</span></span>
        </div>

    );
  };

  export default AboutMeElements;
