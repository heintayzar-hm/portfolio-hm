import { useState } from "react";
import { mySkills, totalProjects } from "../constant";
const Skills = (): JSX.Element => {
    const [showAll, setShowAll] = useState(false)
    return (
        <section className=" bg-teal-500 p-10 section">
            <div className="text-2xl font-bold italic hover-class">Skills</div>
            <div className="grid grid-cols-2 sm:grid-cols-3">
            {
                    mySkills.map((data, index) => {
                        const skills = (showAll) ? data.skills : data.skills.slice(0, 4)
                    return (
                        <div key={index}>
                            <h3 className="p-5 text-lg italic font-semibold text-slate-700 hover-class">{data.name}</h3>
                            <ul className="flex flex-wrap gap-5 py-3 px-5">
                                {
                                    skills.map((skill, index) => {
                                        return (
                                            <li className="w-full">
                                                <div className="flex justify-between px-3">
                                                    <span className="text-cyan-700 hover-class-2">{skill.name}</span>
                                                    <span className="text-slate-700 hover-class-2">
                                                        {skill.value}
                                                        ({(100 * skill.value) / totalProjects}%)
                                                    </span>
                                                </div>
                                                <div key={index} className="bg-black h-2 w-full rounded">
                                                    <div style={{
                                                    width: `${(100 * skill.value) / totalProjects}%`
                                                    }} className=" bg-red-700  h-full w-0 rounded"></div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
                }
            </div>
            <div className="flex w-full items-center justify-center mt-2">
            <button type="button" className="" onClick={() => setShowAll(!showAll)}>
                <div className="p-2 hover-button bg-zinc-600 rounded-lg text-cyan-500">Load More</div>
            </button>
            </div>

        </section>
    );
  };

  export default Skills;
