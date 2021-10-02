import { useState, useRef } from 'react'

import Image from 'next/image'

import { IoWarningOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'
import { BsUpload } from 'react-icons/bs'

import styles from './newApplicanttForm.module.css'

import LoaderSVG from '../../public/icons/SVGComponents/dualRingLoader'



export default function NewApplicantForm() {

    const inputFieldsState = useRef({
        fullName: null,
        companyName: null,
        email: null,
        number: null,
        projectDescription: 'null',
        clientProjectFiles: null,
    })

    const [ fullName, setFullName ] = useState(null)
    const [ companyName, setCompanyName ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ number, setNumber ] = useState(null)
    const [ projectDescription, setProjectDescription ] = useState(null)

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
                let FNinterval;
                clearInterval(FNinterval)
                let FNregex = new RegExp(/^([a-zA-Z]+\s)*[a-zA-Z]+$/)
                let FNvalue = e.currentTarget.value
                let FNlen = FNvalue.split(' ').reduce( (acc, val) => {
                    return acc + val.length
                }, 0)
                if(FNlen >= 5 && FNlen <= 25){
                    
                    if(FNregex.test(FNvalue)){
                        console.log('valid')
                        setFullName('valid')
                    } else {
                        console.log('Your full name must contain no numbers or special characters')
                        setFullName('inValid')
                    }
                } else {
                    console.log('Your full name must be between 5 and 25 characters')
                    setFullName('inValid')
                    if(FNvalue === ''){
                        setFullName('loading')
                        FNinterval = setTimeout(() => {
                            setFullName(null)
                        }, 1000)
                    }
                }
                break;
            case inputFeilds.COMPANY_NAME:
                let CNinterval;
                clearInterval(CNinterval)
                let CNregex = new RegExp(/^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$/)
                let CNvalue = e.currentTarget.value
                let CNlen = CNvalue.split(' ').reduce( (acc, val) => {
                    return acc + val.length
                }, 0)
                if(CNlen >= 2 && CNlen <= 100){
                    
                    if(CNregex.test(CNvalue)){
                        console.log('valid')
                        setCompanyName('valid')
                    } else {
                        console.log('Your full name must contain no numbers or special characters')
                        setCompanyName('inValid')
                    }
                } else {
                    console.log('Your full name must be between 5 and 25 characters')
                    setCompanyName('inValid')
                    if(CNvalue === ''){
                        setCompanyName('loading')
                        CNinterval = setTimeout(() => {
                            setCompanyName(null)
                        }, 1000)
                    }
                }
                break;
            case inputFeilds.EMAIL:
                // console.log(e.currentTarget.value)
                break;
            case inputFeilds.NUMBER:
                let Ninterval;
                clearInterval(Ninterval)
                let Nregex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'im')
                let Nvalue = e.currentTarget.value
                let Nlen = Nvalue.split(' ').reduce( (acc, val) => {
                    return acc + val.length
                }, 0)
                if(Nlen >= 2 && Nlen <= 100){
                    
                    if(Nregex.test(Nvalue)){
                        console.log('valid')
                        setNumber('valid')
                    } else {
                        console.log('Your full name must contain no numbers or special characters')
                        setNumber('inValid')
                    }
                } else {
                    console.log('Your full name must be between 5 and 25 characters')
                    setNumber('inValid')
                    if(Nvalue === ''){
                        setNumber('loading')
                        Ninterval = setTimeout(() => {
                            setNumber(null)
                        }, 1000)
                    }
                }
                break;
            case inputFeilds.PROJECT_DESCRIPTION:
                let PDinterval;
                clearInterval(PDinterval)
                let PDvalue = e.currentTarget.value;
                if(PDvalue === ''){
                    setProjectDescription('loading')
                    PDinterval = setTimeout(() => {
                        setProjectDescription(null)
                    }, 1000)
                } else {
                    setProjectDescription('valid')
                }
                break;
            case inputFeilds.CLIENT_PROJECT_FILES:
                console.log(e.currentTarget.value)
                break;
        }



    }


    return(
        <section className={`${styles.sectionFormContainer} flexRow cc`}>
            <div className={`${styles.formWrapper} flexRow cc`}>
                <form id="applicantForm" className={`${styles.applicantForm} flexRow sc`}>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="fullName">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="fullName" type="text" name="fullName" placeholder="Fullname..."/>
                            <div className={`${styles.inputCover} ${fullName === 'valid' ? styles.validInput : fullName === 'inValid' ? styles.inValidInput : fullName === null ? styles.nullInput : null}`}>
                                {
                                    fullName === null ? <FaArrowLeft color="#e6e6e6" width="30px" height="30px"/> :
                                    fullName === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    fullName === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>  
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label htmlFor="companyName">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="companyName" type="text" name="companyName" placeholder="Company Name (if applicable)..."/>
                            <div className={`${styles.inputCover} ${companyName === 'valid' ? styles.validInput : companyName === 'inValid' ? styles.inValidInput : companyName === null ? styles.nullInput : null}`}>
                                {
                                    companyName === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    companyName === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    companyName === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
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
                                    inputFieldsState.current.email === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    inputFieldsState.current.email === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputFieldsState.current.email === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="number">

                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="number" type="text" name="number" placeholder="Number..."/>
                            <div className={`${styles.inputCover} ${number === 'valid' ? styles.validInput : number === 'inValid' ? styles.inValidInput : number === null ? styles.nullInput : null}`}>
                                {
                                    number === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    number === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    number === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`}>
                        <div className={`${styles.inputContainer} ${styles.description}  ${projectDescription === 'valid' ? styles.validInput : projectDescription === 'inValid' ? styles.inValidInput : projectDescription === null ? styles.nullInput : null} flexRow sc`}>
                                {
                                    projectDescription === null ?

                                    <label htmlFor="description">
                                        <FaArrowLeft color="#e6e6e6" width="30px" height="30px"/> 
                                    </label> :

                                    projectDescription === 'loading' ?

                                    <label htmlFor="description">
                                        <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> 
                                    </label> :

                                    projectDescription === 'valid' ?

                                    <label htmlFor="description">
                                        <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/>
                                    </label> :

                                    <label htmlFor="description">
                                        <IoWarningOutline width="35px" height="35px" color="red"/>
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
                                    inputFieldsState.current.clientProjectFiles === null ? <BsUpload strokeWidth="0.7" /> :
                                    inputFieldsState.current.clientProjectFiles === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputFieldsState.current.clientProjectFiles === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="35px" height="35px" color="red"/>
                                }
                            </label>
                            <input onChange={ (e) => validityCheck(e) } id="clientProjectFiles" type="file" name="clientProjectFiles" accept="image/png, image/jpeg, .doc, .docx, .pdf, .ppt, .pptx" multiple/>
                                
                        </div>
                    </div>
                    <button form="applicantForm" className={styles.submitButton} type="submit">
                        submit
                    </button>
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