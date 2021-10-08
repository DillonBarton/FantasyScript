import { useEffect, useState } from "react";

import styles from '../components/LoadingScreens/PuzzleAnimation/puzzleAnimation.module.css'

// try making the stylesheet global

const usePageLoaderHook = (value: boolean) => {
    const [loading, setLoading] = useState(value)

    useEffect(()=>{
        setLoading(value)
    }, [value])

    return [loading ? null : <LoadingAnimation/>]
}

export function LoadingAnimation(){


    return (
        <div id={styles.loadingScreen} className={`flexColumn cc`}>
            <svg id={styles.loading} viewBox="0 0 100 80">
                <defs>
                    <linearGradient id="gradient" className={styles.gradient} x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#4383b8"/>
                        <stop offset="100%" stopColor="#4aa06c"/>
                    </linearGradient>
                    <clipPath id="rects">
                        <rect className={styles.rect} id={styles.rect1} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect2} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect3} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect4} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect5} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect6} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                        <rect className={styles.rect} id={styles.rect7} x="0" y="0" width="30" height="30" rx="2"
                              ry="2"/>
                    </clipPath>
                </defs>

                <rect id={styles.container} x="0" y="0"
                      width="100" height="100" fill="url(#gradient)" clipPath="url(#rects)">
                </rect>
            </svg>
            <div className={styles.loadingText}>
                LOADING...
            </div>
        </div>
    )
}


export default usePageLoaderHook