import Layout from '../components/Layout'
import Head from 'next/head'
import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import '../styles/globals.scss'

const App = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>
                    {Component.title ?? 'C&C Road Cases'}
                </title>
                <meta
                    name="description"
                    content={Component.description ?? 'C&C Road Cases'}/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
                <meta name="msapplication-TileColor" content="#2b5797"/>
                <meta name="theme-color" content="#ffffff"/>
            </Head>
            <Layout>
                <GoogleAnalytics measurementId="G-H6QETN9482" />
                <Component {...pageProps}/>
            </Layout>
        </>
)}

export default App