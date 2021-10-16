import { useEffect, useRef, useState, useLayoutEffect } from 'react'

import Image from 'next/image'

import styles from './bubbleDisplay.module.css'
import useScrollFade from '../../../hooks/useScrollFade';

export default function BubbleDisplay(){

    /**
     * make bubble come out of top but not bottom
     */

    const bubbleDisplay = useRef(null);
    const [ animated, setAnimated ] = useState(false);
    const bubbleAnimated = useScrollFade(bubbleDisplay, animated, setAnimated);

    useLayoutEffect(()=>{
        if( bubbleAnimated ) {
            bubbleDisplay.current.classList.add(`${styles.bubbleDisplayAnimation}`)
        } else {
            bubbleDisplay.current.classList.remove(`${styles.bubbleDisplayAnimation}`)
        }
    })

    return(
        <div className={`${styles.bubbleDisplayContainer}`}>

            <div ref={bubbleDisplay} className={`${styles.bubbleDisplay} boxW100H100`}>

                <div className={`${styles.bubble} ${styles.bubbleOne}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowOne}`}/>
                    <div className={`${styles.bubbleBackground} boxW100H100`}/>
                    <div className={`${styles.text} flexRow cc boxW100H100`}>seo</div>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleTwo}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowTwo}`}/>
                    <picture>
                        <source srcSet="/images/youtube.avif"/>
                        <source srcSet="/images/youtube.webp"/>
                        <img className={styles.bubbleImage} src="/images/youtube_50.jpeg" alt="youtube icon image" />
                    </picture>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleThree}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowThree}`}/>
                    <div className={`${styles.bubbleBackground} boxW100H100`}/>
                    <div className={`${styles.text} flexRow cc boxW100H100`}>digital marketing</div>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleFour}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowFour}`}/>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleFive}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowFive}`}/>
                    <picture>
                        <source srcSet="/images/linkedin.avif"/>
                        <source srcSet="/images/linkedin.webp"/>
                        <img className={styles.bubbleImage} src="/images/linkedin_50.jpeg" alt="linkedin icon image" />
                    </picture>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleSix}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowSix}`}/>
                    <picture>
                        <source srcSet="/images/twitter.avif"/>
                        <source srcSet="/images/twitter.webp"/>
                        <img className={styles.bubbleImage} src="/images/twitter_50.jpeg" alt="twitter icon image" />
                    </picture>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleSeven}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowSeven}`}/>
                    <picture>
                        <source srcSet="/images/instagram.avif"/>
                        <source srcSet="/images/instagram.webp"/>
                        <img className={styles.bubbleImage} src="/images/instagram_50.jpeg" alt="instagram icon image" />
                    </picture>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleEight}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowEight}`}/>
                   
                </div>

                <div className={`${styles.bubble} ${styles.bubbleNine}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowNine}`}/>
                    <div className={`${styles.bubbleBackground} boxW100H100`}/>
                    <div className={`${styles.text} flexRow cc boxW100H100`}>data visualisation</div>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleTen}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowTen}`}/>
                    <div className={`${styles.bubbleBackground} boxW100H100`}/>
                    <div className={`${styles.text} flexRow cc boxW100H100`}>web design</div>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleEleven}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowEleven}`}/>
                </div>

                <div className={`${styles.bubble} ${styles.bubbleTwelve}`}>
                    <div className={`${styles.bubbleShadow} ${styles.shadowTwelve}`}/>
                    {/* <img className={styles.bubbleImage} src="/images/dataVIZ.png" alt="" /> */}
                </div>

            </div>

        </div>
    )
}