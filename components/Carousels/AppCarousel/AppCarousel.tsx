import ReactPlayer from "react-player";
import { BsBookmarkFill } from "react-icons/bs";
import { IoInformationCircleOutline } from "react-icons/io5";

import Image from 'next/image';

import { useEffect, useRef, useState } from "react";

import styles from './appCarousel.module.css'

export default function AppCarousel (props:{title: string, section: string}) {

    return(
        <div className={`${styles.AppCarousel} boxW100`}>
            
            <h1 className={`${styles.carouselTitle} boxW100 flexRow`}>
                {props.title}
            </h1>
            
            <div className={`${styles.carouselItemsContainer} boxW100 flexRow sc`}>
                <AppCarouselCard
                    bookmarked={true}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={false}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={true}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={false}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={true}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={false}
                    href={`Cameron`}
                    section={props.section}
                />
                <AppCarouselCard
                    bookmarked={true}
                    href={`Cameron`}
                    section={props.section}
                />
            </div>

        </div>
    )
}
export function AppCarouselCard(props:{
    bookmarked: boolean,
    href: string,
    section: string
    }) {
    const [shown, setReveal] = useState(false);
    const [modalContainerAnimation, setContainerAnimation] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(false);
    const [valueChange, setValue] = useState(false)
    return(
        <div className={`${styles.carouselItemAndModalContainer} flexColumn cc`}>
            <AppCarouselModal
                    valueChange={valueChange}
                    setValue={setValue}
                    setmodalAnimation={setModalAnimation}
                    modalAnimation={modalAnimation}
                    modalContainerAnimation={modalContainerAnimation}
                    setContainerAnimation={setContainerAnimation}
                    setReveal={setReveal}
                    shown={shown}
            />
            <div className={styles.carouselItem}>
                <Image className={styles.carouselItemBackground} layout="fill" src="/images/appCarouselBackground.png" alt="Carousel card background image"/>
                
                <BsBookmarkFill className={`${styles.itemBookmark} ${props.bookmarked? ` ${styles.itemBookmarkTrue} `: ``}`} />
                <IoInformationCircleOutline className={styles.itemInformation} onClick={
                () => { if (shown) {

                    setValue(false)
                    setTimeout(() => {
                        if(shown){
                            setReveal(false)
                        }
                    }, 1100);
                    window.document.documentElement.style.overflowY = "scroll";
                    
                } else{

                    setReveal(true)
                    setValue(true)
                    window.document.documentElement.style.overflowY = "hidden";

                }}}/>
                    <div className={`${styles.carouselItemOneMentorUsername} flexRow se`}>
                    <Image height={60} width={60} src="/images/photo-1523111343671-c0872e1ac556.jfif" alt="Merchant profile image"/>
                        <p>
                            @MentorUsername
                        </p>
                    </div>
                    <div className={styles.resourceType}>
                        <Image className={styles.resourceType} height={70} width={70} src="/images/Copy_of_Black_with_Thunder_Icon_Basketball_Logo-removebg-preview.png" alt="Resource-Type"/>
                    </div>
            </div>
        </div>
    )
}
export function AppCarouselModal(props:{
    shown: boolean,
    setReveal: (shown: boolean)=> void,
    modalContainerAnimation: boolean,
    setContainerAnimation: (modalContainerAnimation: boolean)=> void,
    modalAnimation: boolean,
    setmodalAnimation: (modalAnimation: boolean)=> void,
    valueChange: boolean,
    setValue: (valueChange: boolean)=> void
    }) {
    
    const modalContainer = useRef<HTMLDivElement>(null)
    const modal = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if (props.valueChange) {

            props.setContainerAnimation(true)

            setTimeout(() => {
                if(props.valueChange){
                    props.setmodalAnimation(true)
                }                
            }, 500);

        } else {

            setTimeout(() => {
                if(!props.valueChange){
                    props.setContainerAnimation(false)
                }               
            }, 600);

            props.setmodalAnimation(false)

        }
    }, [props.valueChange])
    
    if (props.shown) {
        
        
        return(

        <div ref={modalContainer} className={`${styles.modalContainer} ${props.modalContainerAnimation? ` ${styles.modalContainerinActive} `: ` `}flexColumn sc`} onClick={
            (e) => {
                if (props.shown) {

                props.setValue(false)

                setTimeout(() => {
                    if (props.shown) {
                        window.document.documentElement.style.overflowY = "scroll";
                        props.setReveal(false)  
                    }
                }, 1100);
                
            } else{
                
                props.setReveal(true)
                props.setValue(true)
                console.log(`shown: ${props.shown} Value: ${props.valueChange}`)
                window.document.documentElement.style.overflowY = "hidden";  

            }}}>
            <div ref={modal} className={`${styles.customModal} ${props.modalAnimation? ` ${styles.customModalinActive} `: ` `}flexColumn sc`} onClick={(e) => e.stopPropagation()}>

                <div className={styles.playerCover}>
                    <div className={`${styles.modalProfile} flexRow sc`}>
                        <Image height={70} width={70} src="/images/photo-1523111343671-c0872e1ac556.jfif" alt="Merchant Profile Image"/>
                        <p>@MentorUsername</p>
                    </div>
                </div>

                <ReactPlayer width="100%" height="519px" volume={0.1} muted={false} controls={false} playing={true} url="https://www.youtube.com/watch?v=MzsQ5jCo2cQ" />
                
                <div className={`${styles.modalShadow} flexRow cc`}>
                </div>
                <div className={`${styles.moreLikeThisAndDescription} flexColumn s`}>
                    <div className="boxW100 flexRow sc">
                        <div className={`${styles.resourceDescriptionContainer} flexGrow flexColumn ss`}>
                            <div className="flexRow sc">
                                <h1>
                                    Resource Title
                                </h1>
                            </div>
                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={`${styles.resourceDetailsContainer} flexColumn sc`}>
                            <div className={`${styles.resourceDetails} boxW100 flexColumn cc`}>
                                <div className="boxW100 flexRow sc"><b>Price:</b><p>£19.99</p></div>
                                <div className="boxW100 flexRow sc"><b>Duration:</b><p>19 weeks</p></div>                           
                                <div className="boxW100 flexRow sc"><b>Resources:</b><p>7</p></div> 
                                <div className="boxW100 flexRow sc"><b>Lectures:</b><p>14</p></div>                                            
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.moreLikeThis} boxW100 flexRow ss`}>
                        <div className={`${styles.moreLikeThisTitle} flexRow sc`}>
                            More like this...
                        </div>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                        <AppCarouselCard2 bookmarked={true} href={``}/>
                    </div>
                </div>
                
            </div>
        </div>
        )
    } else{
        return(
        <div>

        </div>
        )
    }

    
}
export function AppCarouselCard2(
    props:{
    bookmarked: boolean,
    href: string
    }) {
    return(
        <div className={`${styles.modalCardContainer} flexColumn cc`}>
            <div className={styles.modalCard}>
            <Image className={styles.carouselItemBackground} layout="fill" src="/images/appCarouselBackground.png" alt="Merchant profile image"/>
                
                <BsBookmarkFill className={`${styles.itemBookmark} ${props.bookmarked? ` ${styles.itemBookmarkTrue}`: ``}`} />
                    <div className={`${styles.carouselItemOneMentorUsername} flexRow se`}>
                        <Image height={60} width={60} src="/images/photo-1523111343671-c0872e1ac556.jfif" />
                        <p>
                            @MentorUsername
                        </p>
                    </div>
                    <div className={styles.resourceType}>
                        <Image height={70} width={70} src="/images/Copy_of_Black_with_Thunder_Icon_Basketball_Logo-removebg-preview.png" alt="Resource-Type"/>
                    </div>
            </div>
        </div>
    )
 }