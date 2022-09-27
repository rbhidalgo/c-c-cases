import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Custom-Made Road Cases in Los Angeles, California – C&C Cases Inc.</title>
        <meta name="description" content="Custom-designed protection for high-quality musical instruments, lighting, stage, and film production equipment. Get true value for money with our premium cases." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.hero__wrapper}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>Custom-Made Road Cases To Fit Your Equipment. Manufactured In California</h1>
          <ul className={styles.hero__list}>
            <li>High-quality cases at fair prices.</li>
            <li>Practical designs with endless possibilities.</li>
            <li>Unmatchable customer service and fastest turnaround time</li>
          </ul>
        </div>
        <div className={styles.hero__image}>
          <img src="/img/case-02/cturn_33.png" alt="" />
        </div>
        </div>
      </section>
      <section className={styles.cases}>
        <div className={styles.cases__bg}>
          <img src="/img/explore-cases.jpg" alt="" />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.cases__heading}>
            <h2 className={styles.heading__title}>Explore Our Cases</h2>
            <p className={styles.heading__subtitle}>C&C Cases Inc. has been in the industry for 15+ years, offering rock-solid custom cases in Los Angeles, California, to protect your gear on the go. Our custom-made cases are impossibly luxurious to protect and transport your investment. Our practical designs will fit your equipment like a glove and withstand any road abuse that hits them. Whether you need to add accessory compartments, organizers, or wheels, we are up for any challenge to tailor your road case exactly as you need.</p>
          </div>

          <div className={styles.cases__category_container}>
            <div className={styles.cases__category}>
              <div className={styles.cases__category_card}>
                <div className={styles.cases__category_img}>
                  <img src="/img/cases02.png" alt="" />
                </div>
                <div className={styles.cases__catgory_wrapper}>
                  <div className={styles.cases__category_case}>
                    <h3>AUDIO & SOUND</h3>
                    <ul>
                      <li>Consoles </li>
                      <li>Speakers </li>
                      <li>Dog House</li>
                    </ul>
                    <a href="">VIEW ALL AUDIO<br/> & SOUND CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>LIGHTING & STAGING</h3>
                  <ul>
                    <li>Spotlights</li>
                    <li>Fixtures</li>
                    <li>Controllers</li>
                  </ul>
                  <a href="">VIEW ALL <br/>LIGHTING & STAGING CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>CABLE TRUNKS</h3>
                  <ul>
                    <li>Truck Pack</li>
                    <li>Cadillac Cases</li>
                  </ul>
                  <a href="">VIEW ALL CABLE <br/>TRUNK CASES</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.cases__category}>
              <div className={styles.cases__category_card}>
                <div className={styles.cases__category_img}>
                  <img src="/img/cases03.png" alt="" />
                </div>
                <div className={styles.cases__catgory_wrapper}>
                  <div className={styles.cases__category_case}>
                  <h3>MUSICAL INSTRUMENTS & GEAR</h3>
                  <ul>
                    <li>Keyboards</li>
                    <li>Amplifiers</li>
                    <li>Studio Monitors</li>
                  </ul>
                  <a href="">VIEW ALL MUSICAL INSTRUMENT CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>RACK-MOUNT CASES</h3>
                  <ul>
                    <li>Standard</li>
                    <li>Shock-Mount</li>
                    <li>Dog House</li>
                  </ul>
                  <a href="">VIEW ALL RACK-MOUNT CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>LCD</h3>
                  <ul>
                    <li>Plasma</li>
                    <li>Projectors</li>
                    <li>Computer Monitors</li>
                  </ul>
                  <a href="">VIEW ALL LCD CASES</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cases__category}>
              <div className={styles.cases__category_card}>
                <div className={styles.cases__category_img}>
                  <img src="/img/cases01.png" alt="" />
                </div>
                <div className={styles.cases__catgory_wrapper}>
                  <div className={styles.cases__category_case}>
                  <h3>FILM</h3>
                  <ul>
                    <li>Cameras</li>
                    <li>Lenses</li>
                    <li>Camera Sliders</li>
                  </ul>
                  <a href="">VIEW ALL FILM CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>TOURING, RIGGING & STAGING</h3>
                  <ul>
                    <li>Workboxes</li>
                    <li>Utility Trunks</li>
                    <li>Chain Motor</li>
                  </ul>
                  <a href="">VIEW ALL TOURING, RIGGING & STAGING CASES</a>
                  </div>
                  <hr />
                  <div className={styles.cases__category_case}>
                  <h3>OTHERS</h3>
                  <ul>
                    <li>Sports</li>
                    <li>Custom Cases</li>
                    <li>Media Center</li>
                  </ul>
                  <a href="">VIEW ALL OTHER CASES</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.mission}>
        <div className={styles.wrapper}>
        <div className={styles.mission__header}>
            <h2 className={styles.heading__title}>Let Us Build Your Custom Road Case</h2>
            <p className={styles.heading__subtitle}>Our team is always open to new projects and ideas. We love the challenge of creating something that is truly one-of-a-kind. Our finest quality and craftsmanship in the industry and fast turnaround time make us outshine the masses. You can rest assured that your next case or large-scale project will be a success.</p>
        </div>
        <div className={styles.mission__container}>
        <div className={styles.mission__item}>
          <img src="/img/likes.svg" alt="" />
          <h3><strong>Our Mission</strong></h3>
          <hr />
          <p>We are all about offering well-crafted cases at affordable prices to meet and exceed your expectations.</p> 
        </div>
        <div className={styles.mission__item}>
          <img src="/img/checklist.svg" alt="" />
          <h3><strong>Our Vision</strong></h3>
          <hr />
          <p>We envision ourselves as outstanding in the competition and build long-lasting relationships with our customers. </p> 
        </div>
        <div className={styles.mission__item}>
          <img src="/img/hand-agent.svg" alt="" />
          <h3><strong>Our Values</strong></h3>
          <hr />
          <p>We believe in integrity, loyalty to everyone associated with us, commitment to premium quality, and 100% customer satisfaction. </p>
        </div>

        </div>
        </div>
      </section>

      </main>

    </>
  )
}
