import styles from "../styles/Footer.module.scss"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.textLeft}> 
                Monday-Friday: 7am-5pm<br/>
                <a href="https://goo.gl/maps/Ad4ZZMyHymbEJvse7" target="_blank" rel="noopener" className="link">300 S. Sycamore Ave. Bldg B <br/>Rialto CA, 92376</a>
				</p>
                <p>
                <a href="tel:+818-383-0165" className="link">(818) 383-0165</a><br/>
                sales@ccroadcases.com <br/>
                Made to last, Made in the USA 🇺🇸
                </p>
                <div className={styles.social}>
                    <a
                        href="https://www.facebook.com/100089652331536/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/img/icon-fb-white.png" width={25} height={23} alt=""/>
                    </a>
                    <a
                        href="https://www.instagram.com/ccroadcases/"
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