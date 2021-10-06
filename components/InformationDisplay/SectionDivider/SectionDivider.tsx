import styles from './sectionDivider.module.css'



export default function SectionDivider({direction}) {

    return(
        <section className={`${direction === true ? styles.toTop : styles.toBottom}  ${styles.sectionDivider} boxW100`}>
        </section>
    )
}