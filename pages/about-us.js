import styles from "../styles/About.module.scss"
import Form from "../components/Contact"

const About = () => {
	return (
		<>
		<section className={styles.cases}>
		<div className={styles.cases__bg}>
			<img src='/img/get-started.jpg' alt='' />
		</div>
		<div className={styles.wrapper}>
			<div className={styles.cases__heading}>
				<h1 className={styles.heading__title}>Reliable, functional, and robust road cases for your gear!</h1>
				<p className={styles.heading__subtitle}>Founded in 2005 in Rialto, California, C&C Cases Inc. has been a family-owned business for over a decade. We only care about one thing: making sure you are 100% satisfied with your purchase. We do this by incorporating extensive quality assurance, fast lead time, utilizing premium materials, and offering competitive prices.</p>
    <p>We build reliable, functional road cases and work closely with our clients to determine their needs. Our tailored road cases won’t only keep your equipment protected but fit your bill as well. Using state-of-the-art manufacturing techniques, we ensure every piece that comes out of our inventory is of the highest standards. You can choose from a variety of options for customizations, including color, storage options, organizers, wheels, and more.</p>
    <ul className={styles.list}>
								<li>Hand-picked components for top-quality everything.</li>
								<li>Consistent dimensions for perfect stacking.</li>
								<li>No compromise on customer satisfaction.</li>
								<li>Integrity and loyalty for lasting relationships.</li>
							</ul>
       <h2 className={styles.heading__title}>Our Story</h2>
				<p className={styles.heading__subtitle}>Meet the Founder</p>
    <p>Elias Chavez is the person behind laying the foundation for C&C Cases Inc. His expertise in the transport case industry goes back to the year 1991. In 2005, he seized an opportunity to start his own business—C&C Cases Inc. With his family's help, he turned their home garage into a 10,800 sq ft location for production. Francisco Chavez is the current owner and CEO of C&C Cases Inc. He is dedicated to carrying on the legacy of his father and providing premium-grade road cases with guaranteed customer satisfaction. </p>
				<p className={styles.heading__subtitle}>A Word from the CEO</p>
    <p>Our company has been building custom-made road cases for over 15 years, and we're proud to have served our customers with excellent customer service and world-class products. The business was started by my father, and I am proud of our heritage. It's important for us that every customer feels like they're part of our family as well. As a next-generation CEO, I plan to take the company forward by continuing our tradition of excellence and innovation while also keeping an eye on what's happening in the global market. I'm hoping that my experience will help us stay ahead of the curve and continue growing our business. I am excited to see what the future holds for us all.</p>
			</div>
			<div className={styles.cases__heading}>
				<h2 className={styles.heading__title}>Contact Us</h2>
				<p className={styles.heading__subtitle}>Have a project? Need a quote? Want to discuss something? Have an urgency and need even a better turnaround time? We understand it - let’s hop on a call <a href="tel:+818-383-0165" class="link">(818) 383-0165</a>. You can also contact us using our form below.</p>
			</div>
				<Form/>
		</div>
	</section>
				</>
	)
 
}
About.title = "About C&C Cases Inc. - Custom-Made Road Cases in Los Angeles, California";
About.description = "About C&C Cases Inc. - Custom-designed ATA Flight Cases, high-quality protection for musical instruments, lighting, stage, and film production equipment. Get true value with our premium custom road cases.";
export default About
