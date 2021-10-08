import styles from '../styles/section.module.css'

import BubbleDisplay from './InformationDisplay/BubbleDisplay/BubbleDisplay'

export default function Section(){

    return(
        <section className={`${styles.sectionContainer} flexRow cc boxW100`}>
            <div className={`${styles.wrapper} flexRow cc boxW100H100`}>

                <div className={`${styles.display} flexRow cc flexGrow3 boxH100`}>
                    <BubbleDisplay/>
                </div>
                <div className={`${styles.text} flexGrow2 boxH100`}>
                    Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                    Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                </div>

            </div>
        </section>
    )
}