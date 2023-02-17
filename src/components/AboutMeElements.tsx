
const AboutMeElements = ({ name, value } : {name: string, value: string}) : JSX.Element  => {
    return (

        <div>
            <span><span className="text-cyan-700 hover-class">{name}:</span> <span className="hover-class-2">{value}</span></span>
        </div>

    );
  };

  export default AboutMeElements;
