import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.css"
import LinkedIn from "../public/linkedin-logo.svg"

export default function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.footerHolder}>
                <a href="https://www.linkedin.com/in/isaac-wild-b9b500123/" target="blank_">
                <Image
                    src="/linkedin-logo.svg"
                    width={30}
                    height={30}
                    alt="Logo for LinkedIn"
                />
            </a>
        
            <a href="https://github.com/IsaacWild" target="blank_">
                <Image
                    src="/github-logo.svg"
                    width={30}
                    height={30}
                    alt="Logo for LinkedIn"
                />
            </a>
        
            <a href="https://medium.com/@isaac.wild" target="blank_">
                <Image
                    src="/medium-logo.svg"
                    width={30}
                    height={30}
                    alt="Logo for LinkedIn"
                />
            </a>
            </div>
            
        </div>
    )
}