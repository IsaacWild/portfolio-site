import Link from "next/link"
import Image from "next/image"

export default function NavMenu() {
    return(
        <nav>
            <Link href={'/'}>
                <Image
                src="/next.svg"
                width={150}
                height={150}
                alt="Portfolio page logo"
                />
            </Link>
            <Link href={'/about'}>About</Link>
        </nav>
    )
}