import Image from 'next/image'

import { useLayoutEffect, useRef, useState } from 'react'
import useScrollFade from '../../../hooks/useScrollFade'

import styles from './filmDisplay.module.css'

export default function FilmDisplay(){

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
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
            <div className={`${styles.box}`}>
                <img className={`${styles.filmBoxImage} ${styles.yo}`} src={"/images/working.jpeg"}/>
            </div>
        </div>
    )
}