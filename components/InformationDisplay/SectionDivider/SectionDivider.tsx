import styles from './sectionDivider.module.css'



export default function SectionDivider({children}) {

    return(
        <section className={`${styles.sectionDivider} boxW100 flexRow cc`}>
            <div className={`${styles.sectionWrapper} boxW100 flexRow cs`}>

                <div className={`${styles.informationContainer} flexColumn sc`}>
                    <div className={`${styles.infomationSection} flexColumn cs`}>
                        <h3>
                            Web Design
                        </h3>
                        <h4>
                            web design specialists
                        </h4>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className={`${styles.infomationSection} flexColumn cs`}>
                        <h3>
                            Web Design
                        </h3>
                        <h4>
                            web design specialists
                        </h4>
                        <p>
                        lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet.
                        </p>
                    </div>

                    <div className={`${styles.infomationSection} flexColumn cs`}>
                        <h3>
                            Web Design
                        </h3>
                        <h4>
                            web design specialists
                        </h4>
                        <p>
                        lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.
                            lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>

                {
                    children
                }

            </div>
        </section>
    )
}