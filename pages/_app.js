import Script from 'next/script'
import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.scss'

const App = ({Component, pageProps, router}) => (
        <>
            <Head>
                <title>
                    {Component.title ?? 'C&C Road Cases'}
                </title>
                <meta
                    name="description"
                    content={Component.description ?? 'C&C Road Cases'}/>
                <link rel='icon' href='/favicon.ico' />
                {/* Google tag (gtag.js) */}
                <Script src="https://www.googletagmanager.com/gtag/js?id=G-H6QETN9482"
                strategy="afterInteractive"/>
                <Script id="google-analytics" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-H6QETN9482');
                `}
                </Script>
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
)

export default App