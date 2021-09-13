import Image from 'next/image'
import { IoWarningOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import styles from './newApplicanttForm.module.css'

export default function NewApplicantForm() {


    return(
        <section className={`${styles.sectionFormContainer} flexRow cc`}>
            <div className={`${styles.formWrapper} flexRow cc`}>
                <form id={styles.applicantForm} className={`flexRow sc`}>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="fullName">

                            </label>
                            <input type="text" name="fullName" placeholder="Fullname..."/>
                            <div className={`${styles.inputCover}`}>
                                <IoWarningOutline color="red"/>
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label htmlFor="companyName">

                            </label>
                            <input type="text" name="companyName" placeholder="Company Name (if applicable)..."/>
                            <div className={styles.inputCover}>
                                <IoWarningOutline color="red"/>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="email">

                            </label>
                            <input type="text" name="email" placeholder="Email..."/>
                            <div className={`${styles.inputCover}`}>
                                <IoWarningOutline color="red"/>
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="number">

                            </label>
                            <input type="text" name="number" placeholder="Number..."/>
                            <div className={`${styles.inputCover}`}>
                                <IoIosCheckmarkCircleOutline color="green"/>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} ${styles.description} flexRow sc`}>
                            <label htmlFor="description">
                                <IoWarningOutline color="red"/>
                            </label>
                            <textarea name="description" placeholder="Project description..." maxLength={275}>

                            </textarea>
                            <div className={styles.inputCover}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="description">

                            </label>
                            <input type="file" name="clientBriefs" accept="image/png, image/jpeg, .doc, .docx, .pdf, .ppt, .pptx" multiple/>
                            <div className={styles.inputCover}>
                                <IoWarningOutline color="red"/>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.blank}>
                    <div className={`${styles.imageContainer} boxW100H100`}>
                        <Image layout="fill" src="/images/photo-1608303588026-884930af2559.jpeg" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}