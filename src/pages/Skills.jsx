import Skill from "../components/Skill.jsx"

export default function Skills({skills}) {
    return (
        <>
            <h2 id="skills" className="mb-11">Compétences</h2>

            <div className="flex justify-center">
                <div className="sm:w-full grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                    {
                        skills.map(skill =>
                            <Skill key={skill.title}
                                title={skill.title}
                                description={skill.description}
                                tools={skill.tools}
                                level={skill.level} />
                        )
                    }
                </div>
            </div>

        </>
    )

}