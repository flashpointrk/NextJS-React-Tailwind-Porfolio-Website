export default function Header() {
    return (
        <div className={"w-full bg-gray-50"}>
            <div className={"max-w-screen-2xl flex justify-between p-10 mx-auto"}>
                <h1 className={"text-4xl font-extrabold"}>LOGO</h1>
                <nav className={"flex justify-between gap-2"}>
                    <ul className={"flex cursor-pointer"}>Main</ul>
                    <ul className={"flex cursor-pointer"}>Gallery</ul>
                </nav>
            </div>

        </div>

    )
}