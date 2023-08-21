import Header from "./dynamics/header";
import Footer from "./dynamics/footer";

export default function Home() {
    return (
        <>
            <Header/>
            <main className={"p-5  max-w-screen-2xl mx-auto"}>
                <div className={"p-10 rounded w-full bg-blue-200"}>
                    <h1 className={"text-3xl"}>Hello World</h1>
                </div>
            </main>
            <Footer/>
        </>

    )
}