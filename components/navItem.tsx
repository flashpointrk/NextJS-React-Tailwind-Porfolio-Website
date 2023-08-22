export default function NavItem({ href, isActive, children }) {
    return (
            <li>
                <a
                    href={href}
                    className={`block px-3 py-2 rounded-md isActive?: bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                    {children}
                </a>
            </li>
    )
}