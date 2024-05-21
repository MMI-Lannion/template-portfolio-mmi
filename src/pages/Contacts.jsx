import { Link } from "react-router-dom"
import {getAssetURL} from "../utils/utils.js"

export default function Contacts({ contacts }) {
    return (
        <>
            <h2 id="contacts" className="mb-11">Contacts</h2>

            <div className="md:min-h-40 flex items-center justify-center">
                <ul className="list-none flex flex-col md:flex-row ">
                    {
                        contacts.map(cont =>
                            <li key={cont.name} className="p-1 flex gap-2 items-center md:p-10">
                                <i><img src={getAssetURL("media", cont.icon)} alt="" /></i>
                                <Link to={cont.url} target="_blank" className="no-underline hover:underline hover:cursor-pointer"> {cont.name} </Link>
                            </li>
                        )
                    }
                </ul>
            </div>

        </>

    )
}