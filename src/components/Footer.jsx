import Menu from "./Menu.jsx"


export default function Footer() {
    return (
        <>
            <hr class="my-1 w-3/4 mx-auto h-0.5 border-t-0 bg-neutral-100" />

            <footer className="w-10/12 py-10 mx-auto flex flex-col-reverse items-center lg:flex-row justify-between ">

                <aside className="my-4">
                    <p className="italic">BUT MMI - IUT de Lannion - 2024</p>
                </aside>
                <nav className="flex py-4 justify-center md:py-0">
                    <Menu ulClasses={"flex flex-col gap-2 items-center md:flex-row md:gap-4"} liClasses={""} includeCV={false} underline={true} />
                </nav>
            </footer>
        </>
    )
}