import styles from "../styles/Materials.module.scss"
import Image from 'next/image'

const Materials = () => {
	return (
		<>
		<section className={styles.cases}>
		<div className={styles.cases__bg}>
			<img src='/img/get-started.jpg' alt='' />
		</div>
		<div className={styles.wrapper}>
			<div className={styles.cases__heading}>
				<h1 className={styles.heading__title}>Hand-picked components for top-quality Road Cases | ATA Flight Cases</h1>
				<h2 className={styles.heading__subtitle}>C&C Road Cases - Materials</h2>
        <ul className={styles.list}>
          <li>
            <p>ABS Laminated Panels - High Quality Wood Panels with ABS Laminate</p>
          <div className={styles.styled_image}>
            <Image layout="responsive" width="300" height="300" src='/img/material-01.jpg' alt='' />
          </div>
          </li>
          <li>
            <p>Rigid Textured PVC Plywood - High Quality Wood Panels with Rigid PVC Laminate</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-02.jpg' alt='' />
            </div>
          </li>
          <li>
            <p>PVC Laminated Panels Plywood - Birch Plywood with Smooth PVC Laminate</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-03.jpg' alt='' />
            </div>
          </li>
          <li>
            <p>Stucco Aluminium Laminated Panels PW - High Quality Plywood with Stucco Aluminium Laminate</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-04.jpg' alt='' />
            </div>
          </li>
          <li> 
            <p>FLight Panel - LightWeight Polypropylene Board,One Side with anthracite Haircell Texture, one side Black.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-05.jpg' alt='' />
            </div>
          </li>
          <li>
            <p>FLight Panel™ 2 NEW! - The lightest, strongest, and most economical panel in the market. A perfect and environmentally friendly alternative to ABS and PVC laminates on wood at an affordable price. It has an outstanding compression and impact strength, making it perfect for Cases.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-06.jpg' alt='' />
            </div>
          </li>
          <li>
            <p>CoreRigid NEW! - CoreRigid composite panels are a plywood alternative formulated to offer exceptional performance at high temperatures while delivering robust strength and stiffness properties.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-07.jpg' alt='' />
            </div>
            <ul>
              <li>Available Thicknesses: 7mm / 1/4", 9mm / 3/8", 12mm / 1/2" and 19mm / 3/4"</li>
              <li>Created by layering two tough ABS sheets around a semi-hollow inner core, they retain the performance of plywood while also resisting chemical splashes and thermal distortion.</li>
            </ul>
          </li>
          <li>
            <p>Heavy Duty FLight Panel - Light Weight Polypropylene Board with Toughened Surface on one side and smooth surface on the other side.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-08.jpg' alt='' />
            </div>
            <ul>
              <li>Thickness: 11mm / 7/16"</li>
            </ul>
          </li>
          <li>
            <p>Etha Plank Foam - Charcoal - Rigid closed cell polyethylene foam with excellent memory. For Shock Mount or Heavy Duty Shock Absorption Applications.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-09.jpg' alt='' />
            </div>
          </li>
          <li>
            <p>Ester Foam - Grey - Premium quality Ester Foam, long lasting and will not discolor.</p>
            <div className={styles.styled_image}>
              <Image layout="responsive" width="300" height="300" src='/img/material-10.jpg' alt='' />
            </div>
          </li>
          <li>Hardware</li>
          <li>Fiberglass Laminated Panel</li>
        </ul>
			</div>
		</div>
	</section>
				</>
	)
}
Materials.title = "Materials - C&C Cases Inc. - Custom-Made Road Cases in Los Angeles, California";
Materials.description = "Materials - C&C Cases Inc. - Custom-designed, high-quality protection for musical instruments, lighting, stage, and film production equipment. Get true value with our premium custom road cases.";
export default Materials
