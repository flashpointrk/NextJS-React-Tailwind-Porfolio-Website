export default function Header() {
    return (
        <div className={"w-full"}>
            <div className={"max-w-screen-2xl flex justify-center p-10 mx-auto items-center"}>
                <nav className={"flex justify-end gap-6 w-1/3 pr-5"}>
                    <ul className={"flex cursor-pointer"}>Main</ul>
                    <ul className={"flex cursor-pointer"}>Gallery</ul>
                </nav>
                <div className={"w-16"}>
                    <img src={"https://www.dusunceofisi.com/img/logo.svg"}/>
                </div>
                <nav className={"flex gap-6 w-1/3 pl-5"}>
                    <ul className={"flex cursor-pointer"}>Resume</ul>
                    <ul className={"flex cursor-pointer"}>Contact</ul>
                </nav>
            </div>

        </div>

    )
}