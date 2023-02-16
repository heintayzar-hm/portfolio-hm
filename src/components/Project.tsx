import { useState } from "react";

const Project = ({
  name,
  live_link,
  github_link,
  image,
  description,
  tags,
}: {
  name: string;
  live_link: string;
  github_link: string;
  image: string;
  description: string;
  tags: string[];
}): JSX.Element => {
  const [hoveredProject, setHoveredProject] = useState(false);

  const handleProjectHover = () => {
    setHoveredProject(!hoveredProject);
  };

  return (
    <li
      className= "relative h-[360px] text-purple-500"
      onMouseEnter={handleProjectHover}
      onMouseLeave={handleProjectHover}
    >
      <div className={`${hoveredProject ? 'hidden' : 'block'}`}>
        <img src={image} alt={name} className="h-[300px] w-full object-cover" />
      </div>
      <div className="">
        <div className={` ${hoveredProject ? "block" : "hidden"} h-[300px] flex flex-col gap-3 bg-black p-5`}>
          <h3 className="text-2xl font-semibold italic text-slate-200">{name}</h3>
          <p className="font-medium text-slate-300">{description}</p>
          <div className="flex">
          <span className="font-medium px-2 text-slate-300 italic">Tech:</span>
          <ul>
            {tags.map((tag) => (
              <li className="text-slate-300">{tag}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="h-[60px]">
        <div className='h-full bg-purple-500'>
          <div className="w-full flex justify-around p-[13px] bg-black">
            <a href={live_link}   target="_blank" className="">Live Link</a>
            <a href={github_link} target="_blank" className="">Github Link</a>

          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
