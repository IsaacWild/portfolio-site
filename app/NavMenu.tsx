import Link from "next/link"
import Image from "next/image"
import styles from "./NavMenu.module.css"

export default function NavMenu() {
    return(
        <nav className={styles.nav}>
            <Link href={'/'}>
                <Image
                src="/next.svg"
                width={150}
                height={150}
                alt="Portfolio page logo"
                />
            </Link>
            <ul className={styles.navItems}>
                <li>
                    <Link href={'/projects'} className={styles.links}>Projects</Link>
                </li>
                <li>
                    <Link href={'/blog'} className={styles.links}>Blog</Link>
                </li>
                <li>
                    <Link href={'/about'} className={styles.links}>About</Link>
                </li>
            </ul>
        </nav>
    )
}