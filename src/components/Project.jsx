import * as utils from "../utils/utils"
import { Link } from "react-router-dom"
import Badge from './Badge.jsx'

export default function Project({ title, picture, context, outputs, missions, skills, link }) {
    return (
        <div className="card bg-base-100 shadow-lg border border-slate-200 h-full">
            <figure className="!my-0"><img src={picture} alt="" /></figure>
            <div className="card-body">
                <div className="flex flex-wrap gap-1">
                    {
                        skills.map(skill =>
                            <Badge label={skill}
                                bgColor={utils.tagColors[skill][0]}
                                fgColor={utils.tagColors[skill][1]}
                                filled={false}
                            />
                        )
                    }
                </div>
                <h4 className="card-title !mt-1">
                    {title}
                </h4>

                <hr class="my-1 h-0.5 border-t-0 bg-neutral-100" />


                <h5 className="font-semibold italic text-sm">Contexte</h5>
                <p className="!my-1">
                    {context}
                </p>
                <h5 className="font-semibold italic text-sm">Missions</h5>
                <ul className="!my-1">
                    {missions.map(mission =>
                        <li>{mission}</li>
                    )}
                </ul>
                <h5 className="font-semibold  italic text-sm">Livrables</h5>
                <ul className="!my-1">
                    {outputs.map(output =>
                        <li>{output}</li>
                    )}
                </ul>
                <div>
                    <Link to={link} target="_blank" className="text-white no-underline btn btn-xs btn-primary btn-outline grow-0 mt-2">
                        Voir le projet
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </Link>
                </div>

            </div>
        </div>
    )
}