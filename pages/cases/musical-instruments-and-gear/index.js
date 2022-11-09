import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Case.module.scss'
import Form from "../../../components/Contact"
import cases from '../../../data/musical-instruments'

export default function AudioSound() {
	return (
		<>
			<Head>
				<title>
					Custom-Made Musical Instruments & Gear Road Cases | Flight Cases in Los Angeles, California – C&C Cases Inc.
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
							<h1 className={styles.heading__title}>Custom-Made Musical Instruments & Gear Road Cases | Flight Cases - Made in the USA 🇺🇸</h1>
							<h2 className={styles.heading__subtitle}><strong>The Ultimate Protection For Your Valuable Equipment</strong>.</h2>
							<ul className={styles.list}>
								<li>High-quality cases at fair prices.</li>
								<li>Fastest turnaround time in the industry.</li>
								<li>Open to new ideas and challenges.</li>
								<li>Practical designs with endless possibilities.</li>
								<li>Unmatchable customer service.</li>
							</ul>
						</div>
						{cases.map((cases, index) =>
						<div key={index}>
							<h2 className={styles.cases__heading} id={cases.id}>{cases.id.replace('-', ' ').replace(/(?:^|\s)\S/g, title => title.toUpperCase())} Cases</h2>
						<div className={styles.cases__category_container}>
											{cases.cases.map((item, index) => 
							<div className={styles.cases__category} key={index}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										{item.case.images.map((img, index) =>
										<div className={styles.cases__category_img_card} key={index}>
											<Image layout="responsive" width="800" height="800" src={img} alt={item.case.title} />
										</div>
										)}

									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>{item.case.title}</h3>
											<ul>
												<li>Dimensions:  {item.case.dimensions}</li>
												{item.case.description ? <li>Description: {item.case.description}</li> : null}
											</ul>
										</div>
									</div>
								</div>
							</div>
											)}
						</div>
						</div>
						)}

					</div>
				</section>
				<section>
				<ul className={styles.list__nav}>	
							{cases.map((cases, index) => <li key={index}>
							<a href={`#${cases.id}`}>{cases.id.replace('-', ' ').replace(/(?:^|\s)\S/g, title => title.toUpperCase())} Cases</a></li>
							)}
							</ul>
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
