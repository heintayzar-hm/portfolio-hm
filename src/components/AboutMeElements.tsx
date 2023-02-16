
const AboutMeElements = ({ name, value } : {name: string, value: string}) : JSX.Element  => {
    return (

        <div>
            <span><span className="text-cyan-700">{name}:</span> <span>{value}</span></span>
        </div>
        
    );
  };  
  
  export default AboutMeElements;