import { myProjects } from "../constant";
import Project from "./Project";
const Projects = () : JSX.Element  => {
    return (

        <section className="bg-violet-500 p-10">
            <div className="text-2xl font-bold italic pb-5 hover-class">Projects</div>
            <ul className="grid sm:grid-cols-2 grid-cols-1 gap-5">
                {
                    myProjects.map((project, index) => {
                        return (
                            <Project
                                key={index}
                                name={project.name}
                                live_link={project.live_link}
                                github_link={project.github_link}
                                image={project.image}
                                description={project.description}
                                tags={project.tags}
                                id={project.id}
                            />
                        )
                    })
                }
            </ul>
        </section>

    );
  };

  export default Projects;
