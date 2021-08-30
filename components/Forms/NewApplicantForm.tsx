import styles from './newApplicanttForm.module.css'

export default function NewApplicantForm() {


    return(
        <section className={`${styles.sectionFormContainer} flexRow cc`}>
            <form id={styles.applicantForm} className={`flexRow sc`}>
                <div className={`${styles.inputContainer} flexRow sc`}>
                    <input type="text" placeholder="Name..."/>
                    <input type="text" placeholder="Name..."/>
                </div>
                <div className={`${styles.inputContainer} flexRow sc`}>
                    <input type="text" placeholder="Name..."/>
                </div>
            </form>
            <div className={styles.blank}>

            </div>
        </section>
    )
}