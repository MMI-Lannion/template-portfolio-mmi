import { useEffect } from "react"

import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Bio from './pages/Bio.jsx'
import Trainings from './pages/Trainings.jsx'
import Interests from './pages/Interests.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Contacts from './pages/Contacts.jsx'
import Footer from "./components/Footer.jsx"

import settings from "./data/settings.json"

import { getAssetURL } from "./utils/utils.js"

export default function App() {

  useEffect(() => {
    document.title = settings.title
  }, [])


  return (
    <>
      <Nav cv={settings.cv}/>
      <main className="prose prose-stone !max-w-none w-10/12 mx-auto">
        <Hero firstname={settings.firstname} lastname={settings.lastname} intro={settings.intro}/>
        <Bio bio={settings.biography} portrait={getAssetURL("media", settings.portrait)}/>
        <Trainings trainings={settings.trainings}/>
        <Interests interests={settings.interests}/>
        <Projects projects={settings.projects} />
        <Skills skills={settings.skills}/>
        <Contacts contacts={settings.contacts}/>
      </main >
      <Footer />

    </>
  )

}


