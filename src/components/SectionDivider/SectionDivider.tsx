import { useEffect } from 'react'
import styles from './sectionDivider.module.css'



export default function SectionDivider({children, reference}) {

    return(
        <section className={`${styles.sectionDivider} boxW100 flexRow cc`}>
            <div ref={reference} className={`${styles.sectionWrapper} boxW100 flexColumn cs`}>
                {
                    children === typeof [] ? children.map(
                        (elem, index) => <div key={index}>{elem}</div>)
                    :

                    children
                }
            </div>
        </section>
    )
}