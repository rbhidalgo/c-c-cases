import styles from "../../styles/Cases.module.scss"
import Image from 'next/image'

const Cases = () => {
	return (
		<>
				<section className={styles.cases}>
					<div className={styles.cases__bg}>
						<img src='/img/explore-cases.jpg' alt='' />
					</div>
					<div className={styles.wrapper}>
						<div className={styles.cases__heading}>
							<h2 className={styles.heading__title}>Explore Our Cases</h2>
							<p className={styles.heading__subtitle}>
								C&C Cases Inc. has been in the industry for 15+ years, offering
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
												<li>Consoles </li>
												<li>Speakers </li>
												<li>Dog House</li>
											</ul>
											<a href=''>
												VIEW ALL CASES
											</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>LIGHTING & STAGING</h3>
											<ul>
												<li>Spotlights</li>
												<li>Fixtures</li>
												<li>Controllers</li>
											</ul>
											<a href=''>
												VIEW ALL CASES
											</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>CABLE TRUNKS</h3>
											<ul>
												<li>Truck Pack</li>
												<li>Cadillac Cases</li>
											</ul>
											<a href=''>
												VIEW ALL CASES
											</a>
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
												<li>Keyboards</li>
												<li>Amplifiers</li>
												<li>Studio Monitors</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>RACK-MOUNT CASES</h3>
											<ul>
												<li>Standard</li>
												<li>Shock-Mount</li>
												<li>Dog House</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>LCD</h3>
											<ul>
												<li>Plasma</li>
												<li>Projectors</li>
												<li>Computer Monitors</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
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
												<li>Cameras</li>
												<li>Lenses</li>
												<li>Camera Sliders</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>TOURING, RIGGING & STAGING</h3>
											<ul>
												<li>Workboxes</li>
												<li>Utility Trunks</li>
												<li>Chain Motor</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
										</div>
										<hr />
										<div className={styles.cases__category_case}>
											<h3>OTHERS</h3>
											<ul>
												<li>Sports</li>
												<li>Custom Cases</li>
												<li>Media Center</li>
											</ul>
											<a href=''>VIEW ALL CASES</a>
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
