import Link from "next/link"

export default function NavMenu() {
    return(
        <nav>
            <Link href={'/about'}>About</Link>
        </nav>
    )
}