import { useState, useEffect, useRef, useLayoutEffect} from 'react'

import styles from './section.module.css'

export default function Section({children, reversed, dividerBottom, dividerTop, section, inViewport, title, subtitle, paragraphs}){

    /**
     * transfrom rotateY the section divider svg 180deg every other dection divider.
     */

    useEffect(()=>{
            if( inViewport ) {
                section.current.classList.add(`${styles.textAnimation}`)
            } else {
                section.current.classList.remove(`${styles.textAnimation}`)
            }
        })

    return(
        <section className={`${styles.sectionContainer} flexRow cc boxW100`}>
            {
                dividerTop === 'page' ?

                    <div className={styles.shapeDividerLayer1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path fill="url(#sectionGradient)" x="0" y="0"
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className={styles.shapeFillLayer1}/>
                            <defs>
                                <linearGradient id="sectionGradient" gradientTransform="rotate(90)">
                                    <stop offset="5%" stopColor="rgba(15, 15, 15, 0.05)"/>
                                    <stop offset="95%" stopColor="rgba(15, 15, 15, 0.99)"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                :

                dividerTop === 'section' ?

                <svg className={`${styles.shapeDividerTop} ${styles.shapeDivider}`} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path style={ { transform:"translate(0, 0px)", opacity:"1" } } fill="rgb(15, 15, 15)" d="M0,70L480,40L960,10L1440,30L1920,50L2400,0L2880,40L3360,20L3840,30L4320,50L4800,10L5280,50L5760,0L6240,10L6720,70L7200,30L7680,80L8160,90L8640,20L9120,60L9600,50L10080,70L10560,50L11040,20L11520,50L11520,100L11040,100L10560,100L10080,100L9600,100L9120,100L8640,100L8160,100L7680,100L7200,100L6720,100L6240,100L5760,100L5280,100L4800,100L4320,100L3840,100L3360,100L2880,100L2400,100L1920,100L1440,100L960,100L480,100L0,100Z"/>
                </svg>

                :

                null
            }
            <div className={`${styles.wrapper} flexRow cc boxW100H100`}>

                <div className={`${styles.display} ${reversed ? styles.order2 : styles.order1} flexRow sc boxH100`}>
                    {children}
                </div>

                <div className={`${styles.textContainer} ${reversed ? styles.order1 : styles.order2} flexColumn cs boxH100`}>
                    <div ref={section} className={`${styles.text} flexColumn cs boxW100`}>

                        <h2 className={`${styles.textHeader} boxW100`}>
                            {
                                title
                            }
                        </h2>
                        <h4 className={`${styles.textHeader} boxW100`}>
                            {
                                subtitle
                            }
                        </h4>
                        {
                            paragraphs.map( (text) => (
                                <p className={`${styles.textParagraph} boxW100`} key={paragraphs.indexOf(text)}>
                                    {
                                        text
                                    }
                                </p>
                            ))
                        }
                        <a className={`${styles.classicBtn}`} href="#">
                            {
                                title
                            }
                        </a>
                    </div>
                </div>

            </div>
            {
                dividerBottom === 'page' ?

                    <div className={styles.shapeDividerLayer1}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                            preserveAspectRatio="none">
                            <path fill="url(#sectionGradient)" x="0" y="0"
                                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                className={styles.shapeFillLayer1}/>
                            <defs>
                                <linearGradient id="sectionGradient" gradientTransform="rotate(90)">
                                    <stop offset="5%" stopColor="rgba(15, 15, 15, 0.05)"/>
                                    <stop offset="95%" stopColor="rgba(15, 15, 15, 0.99)"/>
                                </linearGradient>
                            </defs>
                        </svg>

                    </div>

                :

                dividerBottom === 'section' ?

                <svg className={`${styles.shapeDividerBottom} ${styles.shapeDivider}`} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path style={ { transform:"translate(0, 0px)", opacity:"1" } } fill="rgb(15, 15, 15)" d="M0,70L480,40L960,10L1440,30L1920,50L2400,0L2880,40L3360,20L3840,30L4320,50L4800,10L5280,50L5760,0L6240,10L6720,70L7200,30L7680,80L8160,90L8640,20L9120,60L9600,50L10080,70L10560,50L11040,20L11520,50L11520,100L11040,100L10560,100L10080,100L9600,100L9120,100L8640,100L8160,100L7680,100L7200,100L6720,100L6240,100L5760,100L5280,100L4800,100L4320,100L3840,100L3360,100L2880,100L2400,100L1920,100L1440,100L960,100L480,100L0,100Z"/>
                </svg>

                :

                null
            }
            
        </section>
    )
}