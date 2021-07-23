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
                            
                            <form action="" id={styles.formsearch} className={`flexRow cc`}>
                                
                                <input id={styles.search} type="text" name="searchbar"/>

                                <button id={styles.searchsubmit} type="submit">
                                    <img className={`${styles.iconContainer}`} src="/icons/iconmonstr-search-thin.svg" alt=""/>
                                </button>
                            
                            </form>

                            <a className="profilebtn" href="">
                                <img className={`${styles.iconContainer}`} src="/icons/iconmonstr-user-male-thin.svg" alt=""/>
                            </a>

                        </div>

                        <svg id={styles.burger} className="flexRow cc" viewBox="0 0 100 59" width="32" height="32">
                            <line x1="0" y1="0" x2="100" y2="0" width="100" fill="white" stroke="white" strokeWidth="2"></line>
                            <line x1="0" y1="30" x2="100" y2="30" width="100" fill="white" stroke="white" strokeWidth="2"></line>
                            <line x1="0" y1="60" x2="100" y2="60" width="100" fill="white" stroke="white" strokeWidth="2"></line>
                        </svg>

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

                            <Link href="/designs">
                                <a className={`${styles.navLink}`}>
                                    DESIGNS
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

                        {/* <li className={`${styles.data} flexRow cc`}>
                            <a href="javascript: void(0);" className={`${styles.navLink}`}>
                                PORTFOLIO
                            </a>
                        </li> */}

                        <li className={`${styles.data} flexRow cc`}>

                            <Link  href="/components">
                                <a className={`${styles.navLink}`}>
                                    COMPONENTS
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

                        <li className={`${styles.data} flexRow cc`}>

                            <Link href="/bespoke-Websites">
                                <a className={`${styles.navLink}`}>
                                    BESPOKE WEBSITES
                                </a>
                            </Link>

                        </li>

                    </div>

                </ul>

            </div>

        </nav>
    )
}