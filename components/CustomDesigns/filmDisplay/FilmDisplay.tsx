import Image from 'next/image'

import { useLayoutEffect, useRef, useState } from 'react'
import useScrollFade from '../../../hooks/useScrollFade'

import styles from './filmDisplay.module.css'

export default function FilmDisplay(){

    /**
     * make each column scroll like film. or make shift like rubix cube/tetris.
     * make some images videos. make some videos off screen untill film images shift
     */


    const filmDisplay = useRef(null)
    const [ animated, setAnimated ] = useState(false)
    const filmAnimated = useScrollFade(filmDisplay, animated, setAnimated)

    useLayoutEffect(()=>{
        if( filmAnimated ) {
            filmDisplay.current.classList.add(`${styles.filmDisplayAnimation}`)
        } else {
            filmDisplay.current.classList.remove(`${styles.filmDisplayAnimation}`)
        }
    })

    return (
        <div ref={filmDisplay} className={`${styles.filmDisplayContainer}`}>
            <div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div>
            <div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>     
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>     
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div><div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>
            </div>
            <div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>     
            </div>
            <div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>     
            </div>
            <div className={`${styles.box}`}>
                <picture>
                    <source srcSet="/images/working.avif" />
                    <source srcSet="/images/working.webp" />
                    <img className={`${styles.filmBoxImage}`} src={"/images/working_50.jpeg"} alt="working on project"/>
                </picture>     
            </div>
        </div>
    )
}