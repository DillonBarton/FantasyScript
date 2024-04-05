"use client"
import {useState, useEffect, useRef, useLayoutEffect, RefObject} from 'react'

import styles from './pageSection.module.css'
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

export default function PageSection({
    children,
    isReversed = false,
    title,
    subtitle,
    paragraphs
}: {
    children: React.ReactNode,
    isReversed?: boolean,
    title: string;
    subtitle: string;
    paragraphs: string[];
}){

    /**
     * transfrom rotateY the section divider svg 180deg every other dection divider.
     * make sectionContainer flexColumn and svg elements position relative so elements dont overlap
     */

    const sectionRef = useRef<HTMLDivElement>(null)
    const animated = useAnimateOnScroll(sectionRef, [styles.textAnimation])
    return(

        <div className={`${styles.wrapper} flexRow flexGrow cc boxW100H100`}>

            <div className={`${styles.display} ${isReversed ? styles.order2 : styles.order1} flexRow sc boxH100`}>
                {children}
            </div>

            <div className={`${styles.textContainer} ${isReversed ? styles.order1 : styles.order2} flexColumn cs boxH100`}>
                <div ref={sectionRef} className={`${styles.text} flexColumn cs boxW100`}>

                    <h2 className={`${styles.textHeader} boxW100`}>
                        {title}
                    </h2>
                    <h4 className={`${styles.textHeader} boxW100`}>
                        {subtitle}
                    </h4>
                    {
                        paragraphs.map( (text, i) => (
                            <p className={`${styles.textParagraph} boxW100`} key={i}>
                                {text}
                            </p>
                        ))
                    }
                    <a className={`${styles.classicBtn}`} href="#">
                        {title}
                    </a>
                </div>
            </div>

        </div>
    )
}