import { Link } from "react-scroll"
import settings from "../data/settings.json"


export default function Hero({firstname, lastname, intro}) {
  return (
    <div className="hero min-h-screen prose-xl">
      <div className="hero-content text-left w-full">
        <div className="w-full flex flex-col justify-start items-start">
          <div className="w-full prose prose-sm md:prose-xl lg:prose-2xl">
            <h1 className="font-bold !my-0">{"Bonjour et bienvenue" + "\u00A0👋"} <br/>
            {"je suis " + firstname + " " + lastname}</h1>

            <p className="!my-2 text-left">{intro}</p>
          </div>
          <Link activeClass="active" 
                  to="bio" 
                  spy={true} 
                  smooth={true} 
                  duration={300} 
                  className="prose prose-md text-white no-underline btn btn-primary btn-outline">
                    En savoir plus
            </Link>
        </div>
       
      </div>
    </div>

  )
}