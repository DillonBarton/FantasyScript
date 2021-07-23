import styles from '../styles/fsHero.module.css'

import{ FaArrowAltCircleRight } from 'react-icons/fa'

export default function Hero(){
    

    return(
        <section className={styles.heroSection}>

            <div className={`${styles.heroText} flexColumn ss`}>

                <h1>
                    FS.Studio
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur reiciendis natus porro temporibus! Consequuntur, aperiam quia nulla eos accusamus.
                </p>
                <div className= {`flexRow sc`}>

                    <button className={`flexRow cc`}>

                        <div>View Portfolio</div> <FaArrowAltCircleRight/>
                        
                    </button>

                    <button className={`flexRow cc`}>

                    <   div>Start Project</div> <FaArrowAltCircleRight/>

                    </button>

                </div>

            </div>
            {/* rgba(28, 134, 255, 0.247) rgba(57, 149, 255, 0.35)*/}
            <div className={styles.shapedividerLayer1}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="url(#MyGradient)" x="0" y="0" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFillLayer1}></path>
                    <defs>
                        <linearGradient id="MyGradient" gradientTransform="rotate(90)">
                            <stop offset="5%" stopColor="rgba(70, 131, 180, 0.6)" />
                            <stop offset="95%" stopColor="rgba(0, 0, 0, 0.05)" />
                        </linearGradient>
                    </defs>
                </svg>
                
            </div>
            <div className={styles.shapeDividerLayer2}>
                <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="url(#MyGradient2)" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFillLayer2}></path>
                    <linearGradient id="MyGradient2" gradientTransform="rotate(90)">
                        <stop offset="5%" stopColor="rgba(70, 131, 180, 0.4)" />
                        <stop offset="95%" stopColor="rgba(0, 0, 0, 0.05)" />
                    </linearGradient>
                </svg>
            </div>
            <div className={styles.shapeDividerLayer3}>
                <svg data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path fill="url(#MyGradient3)" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFillLayer3}></path>
                    <linearGradient id="MyGradient3" gradientTransform="rotate(90)">
                        <stop offset="5%" stopColor="rgba(70, 131, 180, 0.4)" />
                        <stop offset="95%" stopColor="rgba(0, 0, 0, 0.05)" />
                    </linearGradient>
                </svg>
            </div>
        </section>
    )
}