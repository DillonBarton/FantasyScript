import { useState } from 'react'

import Image from 'next/image'

import { IoWarningOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'
import { BsUpload } from 'react-icons/bs'

import styles from './newApplicanttForm.module.css'

import LoaderSVG from '../../public/icons/SVGComponents/dualRingLoader'



export default function NewApplicantForm() {

    const [ inputState, setinputState ] = useState({
        fullName: null,
        companyName: null,
        email: null,
        number: null,
        projectDescription: null,
        clientProjectFiles: null,
    })

    const inputFeilds = {
        FULL_NAME: 'fullName',
        COMPANY_NAME: 'companyName',
        EMAIL: 'email',
        NUMBER: 'number',
        PROJECT_DESCRIPTION: 'projectDescription',
        CLIENT_PROJECT_FILES: 'clientProjectFiles'
    }

    const validityCheck = (e) => {

        switch (e.currentTarget.name) {

            case inputFeilds.FULL_NAME:
                let regex = new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
                let value = e.currentTarget.value
                let len = value.split(' ').reduce( (acc, val) => {
                    return acc + val.length
                }, 0)
                if(len >= 5 && len <= 25){
                    console.log(regex.test(value) + "yo")
                } else {
                    console.log(false + "yo2")
                }
                console.log(len)
                break;
            case inputFeilds.COMPANY_NAME:
                console.log(e.currentTarget.value)
                break;
            case inputFeilds.EMAIL:
                console.log(e.currentTarget.value)
                break;
            case inputFeilds.NUMBER:
                console.log(e.currentTarget.value)
                break;
            case inputFeilds.PROJECT_DESCRIPTION:
                console.log(e.currentTarget.value)
                break;
            case inputFeilds.CLIENT_PROJECT_FILES:
                console.log(e.currentTarget.value)
                break;
        }



    }


    return(
        <section className={`${styles.sectionFormContainer} flexRow cc`}>
            <div className={`${styles.formWrapper} flexRow cc`}>
                <form id={styles.applicantForm} className={`flexRow sc`}>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="fullName">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="fullName" type="text" name="fullName" placeholder="Fullname..."/>
                            <div className={`${styles.inputCover}`}>
                                {
                                    inputState.fullName === null ? <FaArrowLeft color="#e6e6e6" width="30px" height="30px"/> :
                                    inputState.fullName === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputState.fullName === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="23px" height="23px" color="red"/>
                                }
                            </div>  
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label htmlFor="companyName">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="companyName" type="text" name="companyName" placeholder="Company Name (if applicable)..."/>
                            <div className={`${styles.inputCover}`}>
                                {
                                    inputState.companyName === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    inputState.companyName === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputState.companyName === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="23px" height="23px" color="red"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="email">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="email" type="text" name="email" placeholder="Email..."/>
                            <div className={`${styles.inputCover}`}>
                                {
                                    inputState.email === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    inputState.email === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputState.email === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="23px" height="23px" color="red"/>
                                }
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="number">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="number" type="text" name="number" placeholder="Number..."/>
                            <div className={`${styles.inputCover}`}>
                                {
                                    inputState.number === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    inputState.number === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputState.number === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="23px" height="23px" color="red"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} ${styles.description} flexRow sc`}>
                                {
                                    inputState.projectDescription === null ?

                                    null :

                                    inputState.projectDescription === 'loading' ?

                                    <label htmlFor="description">
                                        <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> 
                                    </label> :

                                    inputState.projectDescription === 'valid' ?

                                    <label htmlFor="description">
                                        <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/>
                                    </label> :

                                    <label htmlFor="description">
                                        <IoWarningOutline width="23px" height="23px" color="red"/>
                                    </label>

                                }
                            <textarea onChange={ (e) => validityCheck(e) } id="description" name="projectDescription" placeholder="Project description..." maxLength={275}>

                            </textarea>
                            <div className={styles.inputCover}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.fileInputContainer} flexRow sc`}>
                            <label htmlFor="clientProjectFiles" className={`flexRow cc`}>
                                Upload files
                                {
                                    inputState.clientProjectFiles === null ? <BsUpload strokeWidth="0.7" /> :
                                    inputState.clientProjectFiles === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputState.clientProjectFiles === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="23px" height="23px" color="red"/>
                                }
                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="clientProjectFiles" type="file" name="clientProjectFiles" accept="image/png, image/jpeg, .doc, .docx, .pdf, .ppt, .pptx" multiple/>
                                
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