interface skillsInterFace {
    name: string;
    value: Number;
}

interface PropsMySkills {
    skills: skillsInterFace[]
}


const MySkills = ({ skills }: PropsMySkills) => {
    return (
        <ul className="grid sm:grid-cols-2 grid-cols-1">
            {
                skills.map((skill) => {
                    return (
                        <li className="px-2 py-3 border-b border-[#08fdd8]">
                            {skill.name}
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default MySkills;
