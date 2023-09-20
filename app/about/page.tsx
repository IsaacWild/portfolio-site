import styles from "./page.module.css"
import Link from "next/link"

export default function About() {
    return(
        <main className={styles.main}>
            <h1>About Page</h1>
            <h2>Hiya!</h2>
            <p>
                Welcome to my portfolio page, I started creating this page just as I started my 6 months into my first job being a software engineer.
            </p>
            <h2>A bit about me!</h2>
            <p>
                I have always loved computers and coding, I did coding in school, went into computing at college and even made my a website for a local takeaway as they were only using a facebook page! They didn&apos;t end up taking the site in the end but I was still happy with the basic site I made you can <Link href={'/projects/chineseTakeaway'} > here</Link> it&apos;s a single page site with all their details and their current menu styled after the restaurants actual media they used in their paper menus.
            </p>
            <h2>Why I made this site?</h2>
            <p>My intent is to keep this site maintained and updated through my career as I learn new technology and better ways of working so I can have an evolving and living portfolio of my work, I won&apos;t be able to put everything in here but I will do best to show what I can!</p>
        </main>
    )
}