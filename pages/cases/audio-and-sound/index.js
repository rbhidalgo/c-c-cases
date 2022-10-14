import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Cases.module.scss'
import Form from "../../../components/Contact"

export default function AudioSound() {
	return (
		<>
			<Head>
				<title>
					Custom Audio & Sound Road Cases in Los Angeles, California – C&C Cases Inc.
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
							<h1 className={styles.heading__title}>Custom Audio & Sound Road Cases - Made in the USA 🇺🇸</h1>
							<h2 className={styles.heading__subtitle}><strong>Tour Better With Tailored-Fitted Road Cases</strong>.</h2>
							<ul className={styles.list}>
								<li>High-quality cases at fair prices.</li>
								<li>Fastest turnaround time in the industry.</li>
								<li>Open to new ideas and challenges.</li>
								<li>Practical designs with endless possibilities.</li>
								<li>Unmatchable customer service.</li>
							</ul>
							<ul className={styles.list_nav}>
								<li><a href="#console">Console</a></li>
							</ul>
						</div>

						<div className={styles.cases__category_container} id="console">
							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/01/audio-sound-console-etc-48-9601.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/01/audio-sound-console-etc-48-9603.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/01/audio-sound-console-etc-48-9604.jpg' alt='' />
										</div>

									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>ETC Express 48-96 Lighting Console</h3>
											<ul>
												<li>Dimensions: L 48" x W 27" x H 8"</li>
												<li>Discription: .375 Black ABS Panels - Corner Casters - Heavy Duty Hardware, Bottom Compartment Keyboard Cables and Tablet</li>
											</ul>
										</div>
										<hr />
									</div>
								</div>
							</div>
							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/02/audio-sound-console-etc-gio01.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/02/audio-sound-console-etc-gio03.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/02/audio-sound-console-etc-gio04.jpg' alt='' />
										</div>

									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>ETC GIO Lighting Control Console</h3>
											<ul>
												<li>Dimensions: L 48" x W 27" x H 8"</li>
												<li>Discription: .375 Black ABS Panels - Corner Casters - Heavy Duty Hardware ,Bottom Compartment Keyboard Cables and Tablet</li>
											</ul>
										</div>
										<hr />
									</div>
								</div>
							</div>
							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/03/audio-sound-console-etc-ion01.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/03/audio-sound-console-etc-ion02.jpg' alt='' />
										</div>
										<div className={styles.cases__category_img_card}>
										<img src='/img/cases/audio-sound/console/03/audio-sound-console-etc-ion04.jpg' alt='' />
										</div>

									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>ETC Express 48-96 Lighting Console</h3>
											<ul>
												<li>Dimensions: L 45" x W 21" x H 11"</li>
												<li>Discription: .25 Black ABS Panels,Heavy Duty Harware - Foam Interior - Bottom Door Compartment Keyboard Cables</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

						</div>
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
