import { Link } from "react-scroll"
import { getAssetURL } from "../utils/utils.js"

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

function CVMenu(includeCV, cvPath) {
    console.log(cvPath)
    if (includeCV) {
        let cv = getAssetURL("download",cvPath )
        return (
            <li className="ml-2">
                <a href={cv} download className="align-end mt-1 lg:my-0 btn btn-sm btn-outline btn-primary py-1 max-w-20"><ArrowDownTrayIcon className="size-4" /> CV</a>
            </li>
        )

    }
}

export default function Menu({ ulClasses, liClasses, includeCV, cvPath, underline }) {
    console.log("Menu / " + cvPath)
    return (
        <ul tabIndex={0} className={ulClasses}>
            <li className={liClasses}>
                <Link activeClass="active"
                    to="bio"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Bio
                </Link>
            </li>
            <li className={liClasses}> 
                <Link activeClass="active"
                    to="training"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Formation
                </Link>
            </li>
            <li className={liClasses}> 
                <Link activeClass="active"
                    to="interests"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Centres d'intérêts
                </Link>
            </li>
            <li className={liClasses}> 
                <Link activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Projets
                </Link>
            </li>
            <li className={liClasses}>
                <Link activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Compétences
                </Link>
            </li>
            <li className={liClasses}>
                <Link activeClass="active"
                    to="contacts"
                    spy={true}
                    smooth={true}
                    duration={300}
                    className={underline ? "hover:cursor-pointer hover:underline" : ""}>
                    Contacts
                </Link>
            </li>
            {CVMenu(includeCV, cvPath)}

        </ul>
    )

}