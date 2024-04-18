"use client";

import Link from "next/link";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav
      id={styles.navContainer}
      className={`${styles.navcontainerResize} w-full flex flex-col justify-start items-center`}
    >
      <div id={styles.nav} className="w-full h-full flex flex-col justify-start items-center">
        <div id={styles.navTitle} className="w-full flex justify-center items-center flex-grow">
          <div className="w-full h-full flex-grow"/>

          <div className={`${styles.title} flex justify-center items-center flex-grow`}>FS.Studio</div>

          <div
            id={styles.formscontainer}
            className="w-full h-full flex justify-end items-start flexGrow"
          >
            <div id={styles.forms} className="flex justify-end items-start"/>
          </div>
        </div>

        <ul
          id={styles.navLinksContainer}
          className="w-full flex justify-center items-center flexGrow"
        >
          <div
              id={styles.navLinks}
              className="w-full flex justify-center items-center [&>li]:flex [&>li]:justify-center [&>li]:items-center"
          >
            <li className={styles.data}>
              <Link className={styles.navLink} href="/contact-us">
                CONTACT US
              </Link>
            </li>

            <li className={styles.data}>
              <Link className={styles.navLink} href="/our-services">
                OUR SERVICES
              </Link>
            </li>

            <li className={styles.data}>
              <Link className={styles.navLink} href="/">
                HOME
              </Link>
            </li>

            <li className={styles.data}>
              <Link className={styles.navLink} href="/portfolio">
                PORTFOLIO
              </Link>
            </li>

            <li className={styles.data}>
              <Link className={styles.navLink} href="/webPacks">
                WEBPACKS
              </Link>
            </li>

            {/* <li className={`${styles.data} flexRow cc`}>

                <Link href="/bespoke-Websites">
                    <a className={styles.navLink}>
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
