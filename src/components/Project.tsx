import { useState } from "react";

const Project = ({
  name,
  live_link,
  github_link,
  image,
  description,
  tags,
  id
}: {
  name: string;
  live_link: string;
  github_link: string;
  image: string;
  description: string;
  tags: string[];
  id: number;
}): JSX.Element => {
  const [hoveredProject, setHoveredProject] = useState(false);

  const handleEnterProjectHover = (event: React.MouseEvent<HTMLLIElement>) => {
    const handleElement = event.currentTarget.querySelector(`.selector-${id}`);
    const handlerElement = event.currentTarget.querySelector(`.select-${id}`);

    if (handleElement?.classList.contains('hidden')) {
      handleElement.classList.remove('hidden');
      handlerElement?.classList.add('hidden');
      setTimeout(function () {
        handleElement.classList.remove('opacity-0');
      }, 20);
    } else {
      handleElement?.classList.add('opacity-0');
      handleElement?.addEventListener('transitionend', function(e) {
        handleElement.classList.add('hidden');
        handlerElement?.classList.remove('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
    }
    setHoveredProject(!hoveredProject);
  };

  return (
    <li
      className= "relative h-[360px] text-purple-500"
      onMouseEnter={handleEnterProjectHover}
      onMouseLeave={handleEnterProjectHover}
    >
      <div className={`handle selector-${id}`}>
        <img src={image} alt={name} className="h-[300px] w-full object-cover" />
      </div>
      <div className={`hidden handler select-${id}`}>
        <div className=" h-[300px] flex flex-col gap-3 bg-black p-5">
          <h3 className="text-2xl font-semibold italic text-slate-200 hover-class">{name}</h3>
          <p className="font-medium text-slate-300 hover-class">{description}</p>
          <div className="flex">
          <span className="font-medium px-2 text-slate-300 italic hover-class">Tech:</span>
          <ul>
            {tags.map((tag) => (
              <li className="text-slate-300 hover-class-2">{tag}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className="h-[60px]">
        <div className='h-full bg-purple-500'>
          <div className="w-full flex justify-around  bg-black py-[8px]">
            <a href={live_link}   target="_blank" className="hover-button p-[13px] rounded-xl">Live Link</a>
            <a href={github_link} target="_blank" className="hover-button p-[13px] rounded-xl">Github Link</a>

          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
