import Layout from '../components/Layout'
import Head from 'next/head'
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
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </>
)}

export default App