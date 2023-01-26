import { useEffect } from 'react'
import Script from 'next/script'
import Layout from '../components/Layout'
import Head from 'next/head'
import '../styles/globals.scss'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

const App = ({Component, pageProps}) => {
    const router = useRouter()
    useEffect(() => {
      const handleRouteChange = (url) => {
        gtag.pageview(url)
      }
      router.events.on('routeChangeComplete', handleRouteChange)
      router.events.on('hashChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
        router.events.off('hashChangeComplete', handleRouteChange)
      }
    }, [router.events])
    return (
        <>
            <Head>
                <title>
                    {Component.title ?? 'C&C Road Cases'}
                </title>
                <meta
                    name="description"
                    content={Component.description ?? 'C&C Road Cases'}/>
                <link rel='icon' href='/favicon.ico' />
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${gtag.GA_TRACKING_ID}', {
                        page_path: window.location.pathname,
                        });
                    `,
                    }}
                />
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
)}

export default App