import { useEffect } from 'react'
import styles from './sectionDivider.module.css'



export default function SectionDivider({children, reference}) {

    useEffect(()=>{
       console.log(children) 
    }, [])

    return(
        <section className={`${styles.sectionDivider} boxW100 flexRow cc`}>
            <div ref={reference} className={`${styles.sectionWrapper} boxW100 flexColumn cs`}>
                {
                    children.map(
                        (elem) => <div key={1}>{elem}</div>)
                }
            </div>
        </section>
    )
}