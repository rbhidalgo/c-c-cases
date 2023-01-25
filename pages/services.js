import styles from "../styles/Services.module.scss"
import Form from "../components/Contact"

const Services = () => {
    return (
        <>
		<section className={styles.cases}>
		<div className={styles.cases__bg}>
			<img src='/img/get-started.jpg' alt='' />
		</div>
		<div className={styles.wrapper}>
			<div className={styles.cases__heading}>
				<h1 className={styles.heading__title}>Our Services</h1>
          <ul className={styles.list}>
                <li>Foam Cutouts </li>
                <li>Laser Engraving</li>
                <li>Silk Screen </li>
                <li>Stencils </li>
                <li>Repairs</li>
                <li>Repurpose </li>
							</ul>
				<p>Warranty:<br/>
        C&C Road Cases offer a limited lifetime warranty on defects in hardware and workmanship as long as the product is used normally and in accordance with the original purpose it was designed for. Warranty is only valid for the life of the product to the original buyer. Damage arising out of negligence, misuse, tampering, normal wear, acts of good or otherwise are not covered by manufacturer warranty. Manufacturer will not indemnify buyer.</p>
			</div>
			<div className={styles.cases__heading}>
				<h1 className={styles.heading__title}>Contact Us</h1>
				<p className={styles.heading__subtitle}>Have a project? Need a quote? Want to discuss something? Have an urgency and need even a better turnaround time? We understand it - let’s hop on a call <a href="tel:+818-383-0165" className="link">(818) 383-0165</a>. You can also contact us using our form below.</p>
			</div>
				<Form/>
		</div>
	</section>
				</>
    )
}
Services.title = "Services - C&C Cases Inc. - Custom-Made Road Cases in Los Angeles, California";
Services.description = "Services - C&C Cases Inc. - Custom-designed, high-quality protection for musical instruments, lighting, stage, and film production equipment. Get true value with our premium custom road cases.";
export default Services
