
export default function Interests({interests}) {
    return (
        <>
            <h2 id="interests" className="mb-11">Centres d'intérêt</h2>
            <ul className="flex flex-col justify-start">
                    {interests.map(
                        interest => 
                            <li>{interest}</li>
                        )
                    }
            </ul>
        </>

    )
}