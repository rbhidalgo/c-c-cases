import styles from "../styles/Contact.module.scss"
import Form from "../components/Contact"

const Contact = () => {
	return (
		<>
		<section className={styles.cases}>
		<div className={styles.cases__bg}>
			<img src='/img/get-started.jpg' alt='' />
		</div>
		<div className={styles.wrapper}>
			<div className={styles.cases__heading}>
				<h1 className={styles.heading__title}>Contact Us</h1>
				<p className={styles.heading__subtitle}>Have a project? Need a quote? Want to discuss something? Have an urgency and need even a better turnaround time? We understand it - let’s hop on a call <a href="tel:+818-383-0165" class="link">(818) 383-0165</a>. You can also contact us using our form below.</p>
			</div>
				<Form/>
		</div>
	</section>
		<div className={styles.wrapper}>
			<div className={styles.map}>
			<div className={styles.cases__heading}>
				<h2 className={styles.heading__title}>Info</h2>
				<p className={styles.heading__subtitle}>Our location: 300 S. Sycamore Ave. Bldg B Rialto CA, 92376<br/>
				Business Hours:  Mon-Fri: 7am-5pm<br/> 
				Office Phone: (818) 383-0165</p>
			</div>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13215.773692009607!2d-117.3662839!3d34.0965898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81be14b0db589c6!2sC%26C%20Road%20Cases!5e0!3m2!1sen!2sus!4v1665736918470!5m2!1sen!2sus" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
				</div>
				</div>
				</>
	)
}

Contact.title = "Contact C&C Cases Inc. - Custom-Made Road Cases in Los Angeles, California";
Contact.description = "Contact C&C Cases Inc. - Custom-designed, high-quality protection for musical instruments, lighting, stage, and film production equipment. Get true value with our premium custom road cases.";

export default Contact
