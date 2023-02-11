import styles from "../../styles/Cases.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Cases = () => {
	return (
		<>
				<section className={styles.cases}>
					<div className={styles.cases__bg}>
						<img src='/img/explore-cases.jpg' alt='' />
					</div>
					<div className={styles.wrapper}>
						<div className={styles.cases__heading}>
							<h1 className={styles.heading__title}>Explore Our Custom-Made Road Cases | ATA Flight Cases</h1>
							<p className={styles.heading__subtitle}>
								C&C Cases Inc. has been in the industry for 18+ years, offering
								rock-solid custom cases in Los Angeles, California, to protect
								your gear on the go. Our custom-made cases are impossibly
								luxurious to protect and transport your investment. Our
								practical designs will fit your equipment like a glove and
								withstand any road abuse that hits them. Whether you need to add
								accessory compartments, organizers, or wheels, we are up for any
								challenge to tailor your road case exactly as you need.
							</p>
						</div>

						<div className={styles.cases__category_container}>
							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<img src='/img/cases02.png' alt='' />
									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>AUDIO & SOUND</h3>
											<ul>
												<li><Link href="/cases/audio-and-sound/#console" passHref><a className="link">Consoles <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li><Link href="/cases/audio-and-sound/#speaker" passHref><a className="link">Speakers <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li><Link href="/cases/audio-and-sound/#dog-house" passHref><a className="link">Dog House <span className={styles.arrow}>&#9656;</span></a></Link></li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>LIGHTING & STAGING</h3>
											<ul>
												<li>Spotlights</li>
												<li>Fixtures</li>
												<li>Controllers</li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>CABLE TRUNKS</h3>
											<ul>
												<li>Truck Pack</li>
												<li>Cadillac Cases</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<img src='/img/cases03.png' alt='' />
									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>MUSICAL INSTRUMENTS & GEAR</h3>
											<ul>
												<li><Link href="/cases/musical-instruments-and-gear/#keyboard" passHref><a className="link">Keyboards <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li><Link href="/cases/musical-instruments-and-gear/#amplifier" passHref><a className="link">Amplifiers <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li><Link href="/cases/musical-instruments-and-gear/#studio-monitors" passHref><a className="link">Studio Monitors <span className={styles.arrow}>&#9656;</span></a></Link></li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>RACK-MOUNT CASES</h3>
											<ul>
												<li>Standard</li>
												<li>Shock-Mount</li>
												<li><Link href="/cases/audio-and-sound/#dog-house" passHref><a className="link">Dog House <span className={styles.arrow}>&#9656;</span></a></Link></li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>LCD</h3>
											<ul>
												<li>Plasma</li>
												<li>Projectors</li>
												<li>Computer Monitors</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.cases__category}>
								<div className={styles.cases__category_card}>
									<div className={styles.cases__category_img}>
										<img src='/img/cases01.png' alt='' />
									</div>
									<div className={styles.cases__catgory_wrapper}>
										<div className={styles.cases__category_case}>
											<h3>FILM</h3>
											<ul>
												<li><Link href="/cases/film/#camera" passHref><a className="link">Cameras <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li><Link href="/cases/film/#camera" passHref><a className="link">Film Lenses <span className={styles.arrow}>&#9656;</span></a></Link></li>
												<li>Camera Sliders</li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>TOURING, RIGGING & STAGING</h3>
											<ul>
												<li>Workboxes</li>
												<li>Utility Trunks</li>
												<li>Chain Motor</li>
											</ul>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>OTHERS</h3>
											<ul>
												<li>Sports</li>
												<li>Custom Cases</li>
												<li>Media Center</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		</>
	)
}

export default Cases
