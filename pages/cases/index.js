import Head from 'next/head'
import Image from 'next/image'
// import dynamic from 'next/dynamic'
import styles from '../../styles/Cases.module.scss'
// const ThreeSixty = dynamic(() => import('react-360-view'), {ssr: false});


export default function Cases() {
  return (
    <>
      <Head>
        <title>Cases</title>
        <meta name="description" content="Cases Page" />
      </Head>

      <main className={styles.main}>

       <h2>CASES PAGE</h2>

      </main>

    </>
  )
}
