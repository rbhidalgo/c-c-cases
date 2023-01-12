import Head from 'next/head'
import styles from '../../../styles/Case.module.scss'
import Form from "../../../components/Contact"

export default function AudioSound() {
	return (
		<>
			<Head>
				<title>
					Custom Cable Trunks | ATA Flight Cases in Los Angeles, California – C&C Cases Inc.
				</title>
				<meta
					name='description'
					content='Custom-designed protection for high-quality musical instruments, lighting, stage, and film production equipment. Get true value for money with our premium cases.'
				/>
			</Head>

			<main className={styles.main}>
				<section className={styles.cases}>
					<div className={styles.cases__bg}>
						<img src='/img/explore-cases.jpg' alt='' />
					</div>
					<div className={styles.wrapper}>
						<div className={styles.cases__heading}>
							<h1 className={styles.heading__title}>Custom Cable Trunks Road Cases | ATA Flight Cases - Made in the USA 🇺🇸</h1>
							<h2 className={styles.heading__subtitle}><strong>Protect Your Equipment And Be Road-Ready</strong>.</h2>
							<ul className={styles.list}>
								<li>High-quality cases at fair prices.</li>
								<li>Fastest turnaround time in the industry.</li>
								<li>Open to new ideas and challenges.</li>
								<li>Practical designs with endless possibilities.</li>
								<li>Unmatchable customer service.</li>
							</ul>
						</div>
						<h2 className={styles.cases__heading}>Coming Soon</h2>

					</div>
				</section>

    <section className={styles.cases}>
					<div className={styles.cases__bg}>
						<img src='/img/get-started.jpg' alt='' />
					</div>
					<div className={styles.wrapper}>
						<div className={styles.cases__heading}>
							<h2 className={styles.heading__title}>Contact Us</h2>
							<p className={styles.heading__subtitle}>Have a project? Need a quote? Want to discuss something? Have an urgency and need even a better turnaround time? We understand it - let’s hop on a call. Contact us using our form below.</p>
						</div>
       <Form/>
					</div>
				</section>

			</main>
		</>
	)
}
