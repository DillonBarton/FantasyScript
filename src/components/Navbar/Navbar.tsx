"use client";

import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav
      id={styles.navContainer}
      className={`${styles.navcontainerResize} flexColumn sc boxW100`}
    >
      <div id={styles.nav} className={`flexColumn sc boxW100H100`}>
        <div id={styles.navTitle} className={`flexRow cc boxW100 flexGrow`}>
          <div className={`flexGrow boxW100H100`}></div>

          <div className={`${styles.title} flexRow cc flexGrow`}>FS.Studio</div>

          <div
            id={styles.formscontainer}
            className="flexRow es flexGrow boxW100H100"
          >
            <div id={styles.forms} className={`flexRow es`}></div>
          </div>
        </div>

        <ul
          id={styles.navLinksContainer}
          className={`flexRow cc boxW100 flexGrow`}
        >
          <div id={styles.navLinks} className={`flexRow sc boxW100`}>
            <li className={`${styles.data} flexRow cc`}>
              <Link className={`${styles.navLink}`} href="/contact-us">
                CONTACT US
              </Link>
            </li>

            <li className={`${styles.data} flexRow cc`}>
              <Link className={`${styles.navLink}`} href="/our-services">
                OUR SERVICES
              </Link>
            </li>

            <li className={`${styles.data} flexRow cc`}>
              <Link className={`${styles.navLink}`} href="/">
                HOME
              </Link>
            </li>

            <li className={`${styles.data} flexRow cc`}>
              <Link className={`${styles.navLink}`} href="/portfolio">
                PORTFOLIO
              </Link>
            </li>

            <li className={`${styles.data} flexRow cc`}>
              <Link className={`${styles.navLink}`} href="/webPacks">
                WEBPACKS
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
  );
}
