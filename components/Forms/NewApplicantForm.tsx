import { useState } from 'react'

import Image from 'next/image'

import { IoWarningOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoIosArrowDropleft } from 'react-icons/io'
import { BsUpload } from 'react-icons/bs'

import styles from './newApplicanttForm.module.css'

import LoaderSVG from '../../public/icons/SVGComponents/dualRingLoader'



export default function NewApplicantForm() {


    const [ inputState, setinputState ] = useState(null)


    return(
        <section className={`${styles.sectionFormContainer} flexRow cc`}>
            <div className={`${styles.formWrapper} flexRow cc`}>
                <form id={styles.applicantForm} className={`flexRow sc`}>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="fullName">

                            </label>
                            <input type="text" name="fullName" placeholder="Fullname..."/>
                            <div className={`${styles.inputCover} ${inputState === 'loading' ? styles.dualRingLoaderContainer : (inputState === 'valid' ? styles.validIcon : null) }`}>
                                {
                                    inputState === null ? <IoIosArrowDropleft color="#e6e6e6"/> :
                                    inputState === 'loading' ? <LoaderSVG/> :
                                    inputState === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label htmlFor="companyName">

                            </label>
                            <input type="text" name="companyName" placeholder="Company Name (if applicable)..."/>
                            <div className={`${styles.inputCover} ${inputState === 'loading' ? styles.dualRingLoaderContainer : (inputState === 'valid' ? styles.validIcon : null) }`}>
                                {
                                    inputState === null ? <IoIosArrowDropleft color="#e6e6e6"/> :
                                    inputState === 'loading' ? <LoaderSVG/> :
                                    inputState === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="email">

                            </label>
                            <input type="text" name="email" placeholder="Email..."/>
                            <div className={`${styles.inputCover} ${inputState === 'loading' ? styles.dualRingLoaderContainer : (inputState === 'valid' ? styles.validIcon : null) }`}>
                                {
                                    inputState === null ? <IoIosArrowDropleft color="#e6e6e6"/> :
                                    inputState === 'loading' ? <LoaderSVG/> :
                                    inputState === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="number">

                            </label>
                            <input type="text" name="number" placeholder="Number..."/>
                            <div className={`${styles.inputCover} ${inputState === 'loading' ? styles.dualRingLoaderContainer : (inputState === 'valid' ? styles.validIcon : null) }`}>
                                {
                                    inputState === null ? <IoIosArrowDropleft color="#e6e6e6"/> :
                                    inputState === 'loading' ? <LoaderSVG/> :
                                    inputState === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} ${styles.description} flexRow sc`}>
                                {
                                    inputState === null ?

                                    null :

                                    inputState === 'loading' ?

                                    <label htmlFor="description" className={styles.dualRingLoaderContainer}>
                                        <LoaderSVG/> 
                                    </label> :

                                    inputState === 'valid' ?

                                    <label htmlFor="description">
                                        <IoIosCheckmarkCircleOutline color="green"/>
                                    </label> :

                                    <label htmlFor="description">
                                        <IoWarningOutline color="red"/>
                                    </label>

                                }
                            <textarea name="description" placeholder="Project description..." maxLength={275}>

                            </textarea>
                            <div className={styles.inputCover}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.fileInputContainer} flexRow sc`}>
                            <label htmlFor="clientBriefs" className={`flexRow cc`}>
                                Upload files
                                <BsUpload strokeWidth="0.7" />
                            </label>
                            <input type="file" name="clientBriefs" id="clientBriefs" accept="image/png, image/jpeg, .doc, .docx, .pdf, .ppt, .pptx" multiple/>
                                {/*
                                    inputState === null ? <IoIosArrowDropleft color="#e6e6e6"/> :
                                    inputState === 'loading' ? <LoaderSVG/> :
                                    inputState === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                */}
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