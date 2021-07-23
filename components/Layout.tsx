import Head from 'next/head'

import styles from '../styles/layout.module.css'

import Navbar from './Navbar/Navbar'
export default function Layout({children, pageTitle}){

    return(
        <div id={`pageContainer`} className={`flexColumn sc`}>
            <Head>
            <title>FantasyScript - {pageTitle}</title>
                {/*<meta name="description" content=""/>*/}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            {children}
        </div>
    )
}