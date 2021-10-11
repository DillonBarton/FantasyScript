import Link from 'next/link'

import styles from './navbar.module.css'

export default function Navbar(){

    return(
        <nav id={styles.navContainer} className={`${styles.navcontainerResize} flexColumn sc boxW100`}>

            <div id={styles.nav} className={`flexColumn sc boxW100H100`}>

                <div id={styles.navTitle} className={`flexRow cc boxW100 flexGrow`}>

                    <div className={`flexGrow boxW100H100`}>

                    </div>

                    <div className={`${styles.title} flexRow cc flexGrow`}>
                        FS.Studio
                    </div>

                    <div id={styles.formscontainer} className="flexRow es flexGrow boxW100H100">

                        <div id={styles.forms} className={`flexRow es`}>
                            

                        </div>

                    </div>

                </div>
                
                <ul id={styles.navLinksContainer} className={`flexRow cc boxW100 flexGrow`}>

                    <div id={styles.navLinks} className={`flexRow sc boxW100`}>

                        <li className={`${styles.data} flexRow cc`}>

                            <Link href="/contact-us">
                                <a className={`${styles.navLink}`}>
                                    CONTACT US
                                </a>
                            </Link>

                        </li>

                        <li className={`${styles.data} flexRow cc`}>
                            
                            <Link href="/our-services">
                                <a className={`${styles.navLink}`}>
                                    OUR SERVICES
                                </a>
                            </Link>

                        </li>

                        <li className={`${styles.data} flexRow cc`}>

                            <Link href="/">
                                <a className={`${styles.navLink}`}>
                                    HOME
                                </a>
                            </Link>

                        </li>

                        <li className={`${styles.data} flexRow cc`}>

                            <Link  href="/portfolio">
                                <a className={`${styles.navLink}`}>
                                    PORTFOLIO
                                </a>
                            </Link>

                        </li>
                        
                        <li className={`${styles.data} flexRow cc`}>

                            <Link href="/webPacks">
                                <a className={`${styles.navLink}`}>
                                    WEBPACKS
                                </a>
                            </Link>

                        </li>

                        {/* <li className={`${styles.data} flexRow cc`}>

                            <Link href="/bespoke-Websites">
                                <a className={`${styles.navLink}`}>
                                    BESPOKE WEBSITES
                                </a>
                            </Link>

                        </li> */}

                    </div>

                </ul>

            </div>

        </nav>
    )
}