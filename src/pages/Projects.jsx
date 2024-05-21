import Project from "../components/Project.jsx"
import {getAssetURL} from "../utils/utils.js"

export default function Projects({projects}) {
    console.log(projects)
    return (
        <>
            <h2 id="projects" className="mb-11">Projets</h2>
            <div className="flex justify-center">
                <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {projects.map(
                        project => 
                            <Project key={project.title} 
                                    title = {project.title} 
                                    context = {project.context}
                                    skills = {project.skills}
                                    outputs = {project.outputs}
                                    missions = {project.missions}
                                    link = {project.link}
                                    picture = {getAssetURL("media", project.picture)}/>
                    )
                    }
                </div>
            </div>
        </>

    )
}