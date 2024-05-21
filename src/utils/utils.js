let tagColors = {
    "Anglais" : ["bg-red-200", "text-red-800"],
    "Marketing" : ["bg-fuchsia-200","text-fuchsia-800"],
    "Comm" : ["bg-pink-200", "text-pink-800"],
    "Écriture multimédia" : ["bg-orange-200", "text-orange-800"],
    "Réseaux sociaux" : ["bg-orange-300", "text-orange-800"],
    "3D" : ["bg-amber-200", "text-amber-800"],
    "Graphisme" : ["bg-yellow-200", "text-yellow-800"],
    "Audiovisuel" : ["bg-yellow-300", "text-yellow-800"],
    "UI/UX" : ["bg-lime-200", "text-lime-800"],
    "Dev Web" : ["bg-green-200", "text-green-800"],
    "Entrepreneuriat" : ["bg-sky-200", "text-sky-800"],
    "Gestion de projet" : ["bg-indigo-200", "text-indigo-800"]
}



function getAssetURL(prefix, asset){
    console.log(new URL(`../assets/${prefix}/${asset}`, import.meta.url).href)
    return new URL(`../assets/${prefix}/${asset}`, import.meta.url).href
}


export {tagColors, getAssetURL}