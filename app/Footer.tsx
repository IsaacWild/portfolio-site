import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import LinkedIn from "../public/linkedin-logo.svg"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <a href="https://www.linkedin.com/in/isaac-wild-b9b500123/" target="blank_">
                <span>LinkedIn</span>
                <Image
                    src="/linkedin-logo.svg"
                    width={20}
                    height={20}
                    alt="Logo for LinkedIn"
                />
            </a>
        
            <a href="https://github.com/IsaacWild" target="blank_">
                <span>GitHub</span>
                <Image
                    src="/github-logo.svg"
                    width={20}
                    height={20}
                    alt="Logo for LinkedIn"
                />
            </a>
        
            <a href="https://medium.com/@isaac.wild" target="blank_">
                <span>Medium</span>
                <Image
                    src="/medium-logo.svg"
                    width={20}
                    height={20}
                    alt="Logo for LinkedIn"
                />
            </a>
        </div>
    )
}