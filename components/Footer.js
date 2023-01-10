import styles from "../styles/Footer.module.scss"
import Image from "next/image"
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p><a href="tel:+818-383-0165" class="link">(818) 383-0165</a></p>
                <p>sales@ccroadcases.com</p>
                <p>Made to last, Made in the USA 🇺🇸</p>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb-white.png" width={25} height={23} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-ig-white.png" width={25} height={23} alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer