import Header from "@/dynamics/header";
import Footer from "@/dynamics/footer";

export default function Home() {
    return (
            <main className={"px-5 max-w-screen-2xl mx-auto overflow-hidden"}>
                <div className={"bg-indigo-950 rounded-xl overflow-hidden"}>
                    <img className={"object-cover object-center h-560 w-full"} src={"https://picsum.photos/1500/600"}/>
                </div>
            </main>
    )
}