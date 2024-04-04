import { useState, useRef } from 'react'

import Image from 'next/image'

import { IoWarningOutline } from 'react-icons/io5'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { FaArrowLeft } from 'react-icons/fa'
import { BsUpload } from 'react-icons/bs'
import { FaArrowAltCircleRight } from 'react-icons/fa'

import styles from './newApplicanttForm.module.css'

import LoaderSVG from '../../public/icons/SVGComponents/dualRingLoader'

/**
 * fullName validation allows no space.
 * show which files have been added. validation for file size.
 */

export default function NewApplicantForm() {

    const inputFieldsState = useRef({
        fullName: null,
        companyName: null,
        email: null,
        number: null,
        projectDescription: 'null',
        projectFiles: null,
    })

    const [ fullName, setFullName ] = useState(null)
    const [ companyName, setCompanyName ] = useState(null)
    const [ email, setEmail ] = useState(null)
    const [ number, setNumber ] = useState(null)
    const [ projectDescription, setProjectDescription ] = useState(null)
    const [ projectFles, setProjectFIles ] = useState(null)

    const inputFeilds = {
        FULL_NAME: 'fullName',
        COMPANY_NAME: 'companyName',
        EMAIL: 'email',
        NUMBER: 'number',
        PROJECT_DESCRIPTION: 'projectDescription',
        PROJECT_FILES: 'projectFiles'
    }

    const validityChecker = (regexp, value, inputFunc, minLength, maxLength) => {

        console.log(value)
        let regex = new RegExp(regexp)
        let len = value.split(' ').reduce( (acc, val) => {
            return acc + val.length
        }, 0)
        if(len >= minLength && len <= maxLength){
            
            if(regex.test(value)){
                console.log('valid')
                inputFunc('valid')
            } else {
                console.log('Your full name must contain no numbers or special characters')
                inputFunc('inValid')
            }
        } else {
            console.log(`Your full name must be between ${minLength} and ${maxLength} characters`)
            inputFunc('inValid')
            if(value === ''){
                inputFunc('loading')
                return 'null';
            }
        }
    }

    const validityHandler = (e) => {

        switch (e.currentTarget.name) {

            case inputFeilds.FULL_NAME:
                let FNinterval;
                clearInterval(FNinterval)
                let FNstate = validityChecker("^([a-zA-Z]+\s)*[a-zA-Z]+$", e.currentTarget.value, setFullName, 4, 32)
                if(FNstate === 'null'){
                    FNinterval = setTimeout(() =>{
                        setFullName(null)
                    }, 800)
                }
                break;
            case inputFeilds.COMPANY_NAME:
                let CNinterval;
                clearInterval(CNinterval)
                let CNstate = validityChecker("^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$", e.currentTarget.value, setCompanyName, 4, 64)
                if(CNstate === 'null'){
                    CNinterval = setTimeout(() =>{
                        setCompanyName(null)
                    }, 800)
                }
                break;
            case inputFeilds.EMAIL:
                let Einterval;
                clearInterval(Einterval)
                let Estate = validityChecker("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$", e.currentTarget.value, setEmail, 4, 64)
                if(Estate === 'null'){
                    Einterval = setTimeout(() =>{
                        setEmail(null)
                    }, 800)
                }
                break;
            case inputFeilds.NUMBER:
                let Ninterval;
                clearInterval(Ninterval)
                let Nstate = validityChecker("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$", e.currentTarget.value, setNumber, 4, 16)
                if(Nstate === 'null'){
                    Ninterval = setTimeout(() =>{
                        setNumber(null)
                    }, 800)
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
                    }, 800)
                } else {
                    setProjectDescription('valid')
                }
                break;
            case inputFeilds.PROJECT_FILES:
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
                            <input onChange={ (e) => validityHandler(e) } id="fullName" type="text" name="fullName" placeholder="Fullname..." pattern="^([a-zA-Z]+\s)*[a-zA-Z]+$" minLength={5} maxLength={25}/>
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
                            <input onChange={ (e) => validityHandler(e) } id="companyName" type="text" name="companyName" placeholder="Company Name (if applicable)..." pattern="^[0-9A-Za-zÀ-ÿ\s,._+;()*~'#@!?&-]+$"  minLength={2} maxLength={100}/>
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
                            <input onChange={ (e) => validityHandler(e) } id="email" type="text" name="email" placeholder="Email..." pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"/>
                            <div className={`${styles.inputCover} ${email === 'valid' ? styles.validInput : email === 'inValid' ? styles.inValidInput : email === null ? styles.nullInput : null}`}>
                                {
                                    email === null ? <FaArrowLeft width="30px" height="30px" color="#e6e6e6"/> :
                                    email === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    email === 'valid' ? <IoIosCheckmarkCircleOutline color="green"/> : <IoWarningOutline color="red"/>
                                }
                            </div>
                        </div>
                        <div className={`${styles.inputContainer} flexRow sc`}>
                            <label className={`${styles.requiredInput}`} htmlFor="number">

                            </label>
                            <input onChange={ (e) => validityHandler(e) } id="number" type="text" name="number" placeholder="Number..." pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"/>
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
                            <textarea onChange={ (e) => validityHandler(e) } id="description" name="projectDescription" placeholder="Project description..." maxLength={275}>

                            </textarea>
                            <div className={styles.inputCover}>

                            </div>
                        </div>
                    </div>
                    <div className={`${styles.inputFieldsContainer} flexRow sc`} style={ { marginBottom: "20px !important" } }>
                        <div className={`${styles.fileInputContainer} flexRow sc`}>
                            <label htmlFor="projectFiles" className={`flexRow cc`}>
                                Upload files
                                {
                                    inputFieldsState.current.projectFiles === null ? <BsUpload strokeWidth="0.7" /> :
                                    inputFieldsState.current.projectFiles === 'loading' ? <LoaderSVG strokeWidth="4" colour="#e6e6e6" width="32px" height="32px"/> :
                                    inputFieldsState.current.projectFiles === 'valid' ? <IoIosCheckmarkCircleOutline color="green" width="24px" height="24px"/> : <IoWarningOutline width="35px" height="35px" color="red"/>
                                }
                            </label>
                            <input onChange={ (e) => validityHandler(e) } id="projectFiles" type="file" name="projectFiles" accept="image/* .doc, .docx, .pdf, .ppt, .pptx, .xml, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" capture multiple/>
                                
                        </div>
                    </div>
                    <div className={`${styles.formInformation} boxW100`}>
                        Accepted file types: .doc, .docx, .pdf, .ppt, .pptx, .xml, .png, .jpg, .jpeg etc...
                    </div>
                    <div className="boxW100 flexRow ec">
                        <button form="applicantForm" className={`${styles.submitButton} flexRow cc`} type="submit">
                            <div>
                                Submit
                            </div>
                            {/* <FaArrowAltCircleRight/> */}
                        </button>
                    </div>
                </form>
                <div className={styles.blank}>
                    <div className={`${styles.imageContainer} boxW100H100`}>
                        <picture>
                            <source srcSet="/images/projectOverview.avif" />
                            <source srcSet="/images/projectOverview.webp" />
                            <img src="/images/projectOverview.jpeg" alt="project overview image"/>
                        </picture>    
                    </div>
                </div>
            </div>
        </section>
    )
}