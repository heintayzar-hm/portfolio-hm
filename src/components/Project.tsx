import { useEffect, useRef, useState } from "react";

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
  description: string[];
  tags: string[];
  id: number;
}): JSX.Element => {
  const project = useRef(null)

  return (
    <li
      ref={project}
      className= "relative text-[#08fdd8] group hover opacity-0"
    >
      <div className="group-hover:hidden">
        <img src={image} alt={name} className="aspect-[16/12] w-full object-cover" />
      </div>
      <div className="group-hover:block hidden">
        <div className="aspect-[16/12] overflow-y-scroll flex flex-col gap-3 bg-black p-5">
          <h3 className="text-2xl font-semibold italic text-slate-200 hover-class">{name}</h3>
          <ul className="font-medium text-sm text-slate-300 hover-class list-disc px-2">
            {
              description.map((desc) => {
                return (
                  <li>{desc}</li>
                )
              })
            }
          </ul>
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
      <div className="">
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
