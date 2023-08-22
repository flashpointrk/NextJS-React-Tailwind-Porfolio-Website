import Link from "next/link";

export default function HeaderCk() {
    return (
        <div className={"w-full bg-sky-100 flex p-8"}>
            <Link href="/" className={"px-2 py-1 bg-white text-fuchsia-900 rounded"}>Main</Link>
        </div>
    )
}