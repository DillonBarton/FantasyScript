import Head from 'next/head'

import styles from '../styles/layout.module.css'

import Navbar from './Navbar/Navbar'

    /*
    * google analytics
    * keyWords meta tag
    * h1, h2. h3 etc... and other elements
    * description meta tag
    * OG, open graph meta tags: name="og:title" property="og:title" content="description". helps display likes like discord links.
    * index tags, tells search engine which pages are to be indexed
    * NoFollow link tags
    * img alt attribute: Image Title -- detailed image description
    */

export default function Layout({children, pageTitle, metaTags}){

    return(
        <div id={`pageContainer`} className={`flexColumn sc`}>
            <Head>
                <meta name="description" content={``} />
                <meta name="keywords" content={`FantasyScript, FantasyScriptStudio, FSStudio, `} />
                <meta name="author" content="FantasyScript" />
                <title>FantasyScript - {pageTitle}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            {children}
        </div>
    )
}