import Particles from 'react-particles-js'
import particleParams from '../particle.config'

import styles from '../styles/fsHero.module.css'

import { FaArrowAltCircleRight } from 'react-icons/fa'
import GlassCarousel from './Carousels/GlassPanelCarousel/GlassPanelCarousel'

export default function FSHero() {

    return (
        <section className={`${styles.heroSection} flexRow cc`}>
            <Particles params={particleParams} className={`${styles.particles} boxW100H100`}/>
            <div className={`${styles.heroScreen} ${styles.heroScreenBlack}`}/>
            <div className={`${styles.heroScreen} ${styles.heroScreenWhite}`}/>
            <div className={`${styles.heroContent}`}>

                <div className={`${styles.heroText} flexColumn ss`}>

                    <h1>
                        FS.Studio
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur reiciendis natus porro
                        temporibus! Consequuntur, aperiam quia nulla eos accusamus.
                    </p>
                    <div className={`flexRow sc`}>

                        <button className={`${styles.buttonOne} flexRow cc`}>

                            <div>View Portfolio</div>
                            <FaArrowAltCircleRight/>

                        </button>

                        <button className={`${styles.buttonTwo} flexRow cc`}>

                            <div>Start Project</div>
                            <FaArrowAltCircleRight/>

                        </button>

                    </div>

                </div>

                <GlassCarousel/>

            </div>
            {/* rgba(28, 134, 255, 0.247) rgba(57, 149, 255, 0.35)*/}
            <div className={styles.shapedividerLayer1}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path fill="url(#MyGradient)" x="0" y="0"
                          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                          className={styles.shapeFillLayer1}/>
                    <defs>
                        <linearGradient id="MyGradient" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="rgba(0, 0, 0, 0.2)"/>
                            <stop offset="95%" stopColor="rgba(0, 0, 0, 0.6)"/>
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className={styles.shapeDividerLayer2}>
                <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path fill="url(#MyGradient2)"
                          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                          className={styles.shapeFillLayer2}/>
                    <linearGradient id="MyGradient2" gradientTransform="rotate(90)">
                        <stop offset="5%" stopColor="rgba(0, 0, 0, 0.25)"/>
                        <stop offset="95%" stopColor="rgba(0, 0, 0, 0.4)"/>
                    </linearGradient>
                </svg>
            </div>
            <div className={styles.shapeDividerLayer3}>
                <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path fill="url(#MyGradient3)"
                          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                          className={styles.shapeFillLayer3}/>
                    <linearGradient id="MyGradient3" gradientTransform="rotate(90)">
                        <stop offset="5%" stopColor="rgba(0, 0, 0, 0.25)"/>
                        <stop offset="95%" stopColor="rgba(0, 0, 0, 0.4)"/>
                    </linearGradient>
                </svg>
            </div>
        </section>
    )
}