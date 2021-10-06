import {useCallback, useEffect, useRef, useState} from "react";

import Image from 'next/image'
import Link from 'next/link'

import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { SiYoutube } from 'react-icons/si'
import { GrLinkedin } from 'react-icons/gr'
import { IoHeartOutline } from 'react-icons/io5'
import { VscComment } from 'react-icons/vsc'

import styles from './footer.module.css'
import useAxios from "../../hooks/useAxios";
import useStateManager from "../../Reducer/StateManegement";

const sections = ['twitter', 'facebook', 'youtube', 'instagram', 'linkedin']

export default function Footer(){

    const [ titleRerender, setTitleRerender ] = useState(false);
    const [ isMounted, setIsMounted ] = useState(false);
    const initialState = 2;
    const counter = useRef(initialState);
    const [ section, setSection ] = useState( sections[initialState] );
    const [ sectionMounted, setSectionMounted ] = useState(true);
    const slideOne = useRef(null);
    const [ slideOneSection, setSlideOneSection ] = useState(initialState);
    const slideTwo = useRef(null);
    const [ slideTwoSection, setSlideTwoSection ] = useState(initialState + 1);

    const [ params, setParams ] = useState({
        baseUrl: null,
        pathParams: null,
        queryParams: null,
        headers: {
        }
    })
    const [ response, isLoading ] = useAxios(params)
    const [ CSMO ] = useStateManager(response)
    const fetchData = (baseUrl, pathParams, queryParams, headers) => {
        if(!CSMO || !CSMO[section]){
            setParams({
                baseUrl: baseUrl,
                pathParams: pathParams,
                queryParams: queryParams,
                headers: headers
            })
        }
    }
    // useEffect(()=>{
    //     console.log(CSMO)
    //     fetchData(`http://localhost:4500`, `/media/${section}`, '', {})
    // }, [section])

    const unMountHandler = () => {

        let slideOneTimeout;
        let slideTwoTimeout;
        clearTimeout(slideOneTimeout)
        clearTimeout(slideTwoTimeout)
        
        setTitleRerender(false)
        if(sectionMounted === true){

            slideOne.current.classList.add(`${styles.sectionUnMountAnimation}`)
            slideOneTimeout = setTimeout(()=>{
                slideOne.current.classList.replace(`${styles.sectionUnMountAnimation}`, `${styles.displayNone}`)
                slideOne.current.classList.remove(`${styles.sectionOnMountAnimation2}`)
            }, 1000)

        }else{

            slideTwo.current.classList.add(`${styles.sectionUnMountAnimation}`)
            slideTwoTimeout = setTimeout(()=>{
                slideTwo.current.classList.replace(`${styles.sectionUnMountAnimation}`, `${styles.displayNone}`)
                slideTwo.current.classList.remove(`${styles.sectionOnMountAnimation2}`)
            }, 1000)

        }

    }

    const mountFunc = () => {

        if(sectionMounted){
            slideTwo.current.classList.remove(`${styles.displayNone}`)
            setSectionMounted(!sectionMounted)
        } else {
            slideOne.current.classList.remove(`${styles.displayNone}`)
            setSectionMounted(!sectionMounted)
        }

        let mountTimout;
        let slideTwoMountTimeout;
        let slideOneMountTimeout;
        let titleTimout;
        clearTimeout(mountTimout);
        clearTimeout(slideTwoMountTimeout);
        clearTimeout(slideOneMountTimeout);
        clearTimeout(titleTimout);

        mountTimout = setTimeout(()=>{

            if(sectionMounted){

                slideTwo.current.classList.add(`${styles.sectionOnMountAnimation}`)
                slideTwoMountTimeout = setTimeout(()=>{
                    slideTwo.current.classList.replace(`${styles.sectionOnMountAnimation}`,`${styles.sectionOnMountAnimation2}`)
                }, 600)


            } else {
   
                slideOneMountTimeout = slideOne.current.classList.add(`${styles.sectionOnMountAnimation}`)
                setTimeout(()=>{
                    slideOne.current.classList.replace(`${styles.sectionOnMountAnimation}`,`${styles.sectionOnMountAnimation2}`)
                }, 600)

            }


        }, 600)

        titleTimout = setTimeout(() => {
            setTitleRerender(true)
        }, 1600)

    }


    const counterFunc = () => {

        let countTimout;

        clearTimeout(countTimout)

        const countTimoutFunc = () => {

            if(counter.current === 4){
    
                counter.current = 0
    
                if(sectionMounted){
    
                    setSlideTwoSection(counter.current)
    
                } else {
    
                    setSlideOneSection(counter.current)
                }
    
                setSection( sections[counter.current] )
    
    
            } else {
    
                counter.current++
    
                if(sectionMounted){
    
                    setSlideTwoSection(counter.current)
                    
                } else {
    
                    setSlideOneSection(counter.current)
    
                }
    
                setSection( sections[counter.current] )
    
            }
    
        }
        countTimout = setTimeout(countTimoutFunc, 600)
    }

    const mountHandlerFunction = (section) => {
        if(section !== null){
            counter.current = section;
        }
        counterFunc();
        unMountHandler();
        mountFunc();
    }

    useEffect(() => {

        if(isMounted){

        } else {
            slideOne.current.classList.add(`${styles.sectionOnMountAnimation2}`)
            slideTwo.current.classList.add(`${styles.displayNone}`)
            setTitleRerender(true)
            setIsMounted(true)
        }

        // let interval = setInterval(mountHandlerFunction, 13000, null);

        // return () => clearInterval(interval)

    }, [section]);

    return(
        <footer id={`${styles.footerContainer}`} className={`flexColumn sc`}>

            <div className={`${styles.footerBackground} boxW100`}/>

            <div className={`${styles.titleContainer} ${titleRerender ? styles.titleContainerAnimation : null} boxW100H100`}>
                
                <h1 className={`${styles.floatingTitle} ${styles.titleOne} ${ titleRerender ? styles.titleOneAnimation : null } ${styles[`${section}Title`]} ${sectionMounted ? styles.reverseAnimation : null}`}>
                    {
                        `${section}`
                    }
                </h1>

                <div className={`${styles.floatingTitle} ${styles.titleTwo} ${ titleRerender ? styles.titleTwoAnimation : null } ${styles[`${section}Title`]} ${sectionMounted ? styles.reverseAnimation : null}`}>
                    {
                        `${section}`
                    }
                </div>

                <div className={`${styles.floatingTitle} ${styles.titleThree} ${ titleRerender ? styles.titleThreeAnimation : null } ${styles[`${section}Title`]} ${sectionMounted ? styles.reverseAnimation : null}`}>
                    {
                        `${section}`
                    }
                </div>

                <div className={`${styles.floatingTitle} ${styles.titleFour} ${ titleRerender ? styles.titleFourAnimation : null } ${styles[`${section}Title`]} ${sectionMounted ? styles.reverseAnimation : null}`}>
                    {
                        `${section}`
                    }
                </div>

            </div>

            <div className={`${styles.shapeDividerContainer} boxW100`}>
                <div className={styles.shapeDividerLayer1}>
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                        preserveAspectRatio="none">
                        <path fill="rgba(15, 15, 15, 0.99)" x="0" y="0"
                            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                            className={styles.shapeFillLayer1}/>
                    </svg>
                </div>
            </div>

            <div className={`${styles.socialMediaIconsContainer} boxW100 flexRow cc`}>

                    <AiFillTwitterCircle
                        onClick={ () => { mountHandlerFunction(4)} }
                        className={`${styles.twitterIcon}  ${section == 'twitter' ? styles.iconSelected : null}`}
                    />

                    <FaFacebook
                        onClick={() => {mountHandlerFunction(0)} }
                        className={`${styles.facebookIcon}  ${section == 'facebook' ? styles.iconSelected : null}`}
                    />

                    <SiYoutube
                        onClick={() => {mountHandlerFunction(1)} }
                        className={`${styles.youtubeIcon} ${section == 'youtube' ? styles.iconSelected : null}`}
                    />

                    <InstagramSVG
                        counter={counter}
                        mountHandlerFunction={mountHandlerFunction}
                        section={section}
                    />

                    <GrLinkedin
                        onClick={() => {mountHandlerFunction(3)} }
                        className={`${styles.linkedinIcon} ${section == 'linkedin' ? styles.iconSelected : null}`}
                    />

            </div>

            <div className={`${styles.sectionContainer} boxW100 flexColumn sc`}>
                <Section CSMO={CSMO} identifier={slideOne} section={sections[slideOneSection]}/>
                <Section CSMO={CSMO} identifier={slideTwo} section={sections[slideTwoSection]}/>
            </div>

        </footer>
    )
}

export function InstagramSVG({counter, section, mountHandlerFunction}){

    return(
        <svg onClick={() => {mountHandlerFunction(2)} } className={`${styles.instagramIcon} ${section == 'instagram' ? styles.iconSelected : null}`} enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
            <linearGradient id="myGradient" gradientTransform="matrix(0 -1.982 -1.844 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047">
                <stop offset="0" stopColor="#fd5"/>
                <stop offset=".5" stopColor="#ff543e"/>
                <stop offset="1" stopColor="#c837ab"/>
            </linearGradient>
            <path d="m1.5 1.633c-1.886 1.959-1.5 4.04-1.5 10.362 0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091-.559-.081-.671-.105-3.539-.11-10.173.005-12.403-.448-14.41 1.633z" fill="url(#myGradient)"/>
            <path d="m11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471c-.587 0-1.063.476-1.063 1.063s.476 1.063 1.063 1.063 1.063-.476 1.063-1.063-.476-1.063-1.063-1.063zm-4.73 1.243c-2.513 0-4.55 2.038-4.55 4.551s2.037 4.55 4.55 4.55 4.549-2.037 4.549-4.55-2.036-4.551-4.549-4.551zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z" fill="#000"/>
        </svg>
    )
}

export function Section({ section, identifier, CSMO}){

    console.log(CSMO)    
    switch (section){

        case sections[0]:

            return(
                <div ref={identifier} className={`${styles.twitter} ${styles.section} boxW100`}>

                    <a href="/" className={`${styles.imageContainer} flexRow sc`}>
                        
                        {
                            CSMO ? CSMO.TwitterData && <img src={CSMO.TwitterData.data.res1.includes.media[0].url} alt="" /> : null
                        }

                    </a>
                        
                    <div className={`${styles.profileDataContainer}`}>
                        <a href="" className={`${styles.profileImgContainer} flexRow ss`}>
                            <img src={CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res0.data.profile_image_url : null} alt="" />
                        </a>
                        <div className={`${styles.profileData} flexRow se`}>
                            <div>
                                {
                                    CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res0.data.name : null
                                }
                            </div>
                            <a href="/">
                                @{
                                    CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res0.data.username : null
                                }
                            </a>
                        </div>
                        <p className={`${styles.profileDescription}`}>
                            {
                                CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res0.data.description : null
                            }
                        </p>
                    </div>

                    <div className={`${styles.postTextContainer}`}>
                        {
                            CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res1.data[0].text : null
                        }
                    </div>
                    <div className={`${styles.postData} flexRow ec`}>
                            <IoHeartOutline/> {
                                CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res1.data[0].public_metrics.like_count : null
                            }
                            <VscComment/> {
                                CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res1.data[0].public_metrics.reply_count : null
                            }
                        <div>
                        {
                                CSMO ? CSMO.TwitterData && CSMO.TwitterData.data.res1.data[0].created_at : null
                            }
                        </div>
                    </div>
                </div>
            )

        case sections[1]:

            return(
                <div ref={identifier} className={`${styles.facebook} ${styles.section} boxW100`}>

                </div>
            )

        case sections[2]:

            return(
                <div ref={identifier} className={`${styles.youtube} ${styles.section} boxW100`}>

                </div>
            )

        case sections[3]:

            return(
                <div ref={identifier} className={`${styles.instagram} ${styles.section} boxW100`}>

                </div>
            )

        case sections[4]:

            return(
                <div ref={identifier} className={`${styles.linkedin} ${styles.section} boxW100`}>

                </div>
            )

        default:
            return (
                <div ref={identifier} />
            )
    }

}