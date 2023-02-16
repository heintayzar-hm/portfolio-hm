
const Social = ({ name, value, icon } : {name: string, value: string, icon: JSX.Element}) : JSX.Element  => {
    return (
        <li>
            <a href={value} className="text-slate-700 hover:text-cyan-700">{icon}</a>
        </li>
    );
  };  
  
  export default Social;