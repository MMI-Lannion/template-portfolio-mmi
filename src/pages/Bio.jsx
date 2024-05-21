
export default function Bio({bio, portrait}) {
    console.log(portrait)
    return (
        <>
            <h2 id="bio" className="mb-11">Bio</h2>

            <div className="w-full flex justify-center md:justify-start place-items-center flex-col lg:flex-row gap-8 mx-0">
                <figure className="max-w-72 rounded-full overflow-hidden">
                    <img src={portrait} alt="portrait" />
                </figure>
                <p className="inline text-center md:text-left lg:w-3/4">
                    {bio.length > 800 ? bio.substring(0,800) + "..." : bio }
                </p>
            </div>
        </>

    )
}