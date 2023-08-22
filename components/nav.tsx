export default function Navi({ children }) {
    return (
        <Navi className={"py-4 px-6 text-sm font-medium"}>
            <ul className={"flex space-x-3"}>
                {children}
            </ul>
        </Navi>
    )
}