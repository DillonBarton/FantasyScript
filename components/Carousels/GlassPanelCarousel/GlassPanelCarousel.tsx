import { useCallback, useState, useEffect, useRef } from 'react';

import styled from 'styled-components'

import styles from './glassCarousel.module.css'


export default function GlassCarousel(){

    const initialValue = 0;
    const five = 5;
    const one = 1;
    const [count, setCount] = useState(initialValue)
    const startAnimation = useRef(true)
    const stage = useRef(initialValue)
    const wrapperOne = useRef<HTMLDivElement>(null)
    const containerOne = useRef<HTMLDivElement>(null)
    const panelOne = useRef<HTMLDivElement>(null)
    const wrapperTwo = useRef<HTMLDivElement>(null)
    const containerTwo = useRef<HTMLDivElement>(null)
    const panelTwo = useRef<HTMLDivElement>(null)
    const wrapperThree = useRef<HTMLDivElement>(null)
    const containerThree = useRef<HTMLDivElement>(null)
    const panelThree = useRef<HTMLDivElement>(null)
    const wrapperFour = useRef<HTMLDivElement>(null)
    const containerFour = useRef<HTMLDivElement>(null)
    const panelFour = useRef<HTMLDivElement>(null)
    const wrapperFive = useRef<HTMLDivElement>(null)
    const containerFive = useRef<HTMLDivElement>(null)
    const panelFive = useRef<HTMLDivElement>(null)
    const wrapperSix = useRef<HTMLDivElement>(null)
    const containerSix = useRef<HTMLDivElement>(null)
    const panelSix = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        let interval = setInterval(() => {
            if(count == five){
                setCount(0)
            } else{
                setCount(count + one)
            }
        }, 10500);
        return () => clearInterval(interval)
    }, [count])

    useEffect(()=>{
        setTimeout(()=>{
            startAnimation.current = false
        }, 3600)
    },)

    useEffect(()=>{
        switch (count) {
            case 0:
                wrapperOne.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                wrapperThree.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                wrapperFour.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                wrapperFive.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                wrapperSix.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                containerTwo.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                containerThree.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                containerFour.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                containerFive.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                panelTwo.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                panelThree.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                panelFour.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                panelFive.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            case 1:
                wrapperOne.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                wrapperThree.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                wrapperFour.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                wrapperFive.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                wrapperSix.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                containerOne.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                containerTwo.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                containerThree.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                containerFour.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                panelOne.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                panelTwo.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                panelThree.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                panelFour.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            case 2:
                wrapperOne.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                wrapperThree.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                wrapperFour.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                wrapperFive.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                wrapperSix.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                containerOne.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                containerTwo.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                containerThree.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                containerSix.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                panelOne.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                panelTwo.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                panelThree.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                panelSix.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            case 3:
                wrapperOne.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                wrapperThree.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                wrapperFour.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                wrapperFive.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                wrapperSix.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                containerOne.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                containerTwo.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                containerFive.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                containerSix.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                panelOne.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                panelTwo.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                panelFive.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                panelSix.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            case 4:
                wrapperOne.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                wrapperThree.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                wrapperFour.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                wrapperFive.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                wrapperSix.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                containerOne.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                containerFour.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                containerFive.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                containerSix.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                panelOne.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                panelFour.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                panelFive.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                panelSix.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            case 5:
                wrapperOne.current.classList.replace(`${styles.lastWrapper}`, `${styles.defaultWrapper}`);
                wrapperTwo.current.classList.replace(`${styles.defaultWrapper}`, `${styles.nextWrapper}`);
                wrapperThree.current.classList.replace(`${styles.nextWrapper}`, `${styles.leftWrapper}`);
                wrapperFour.current.classList.replace(`${styles.leftWrapper}`, `${styles.centerWrapper}`);
                wrapperFive.current.classList.replace(`${styles.centerWrapper}`, `${styles.rightWrapper}`);
                wrapperSix.current.classList.replace(`${styles.rightWrapper}`, `${styles.lastWrapper}`);
                containerThree.current.classList.replace(`${styles.defaultContainer}`, `${styles.leftContainer}`);
                containerFour.current.classList.replace(`${styles.leftContainer}`, `${styles.centerContainer}`);
                containerFive.current.classList.replace(`${styles.centerContainer}`, `${styles.rightContainer}`);
                containerSix.current.classList.replace(`${styles.rightContainer}`, `${styles.defaultContainer}`);
                panelThree.current.classList.replace(`${styles.defaultPanel}`, `${styles.leftPanel}`);
                panelFour.current.classList.replace(`${styles.leftPanel}`, `${styles.centerPanel}`);
                panelFive.current.classList.replace(`${styles.centerPanel}`, `${styles.rightPanel}`);
                panelSix.current.classList.replace(`${styles.rightPanel}`, `${styles.defaultPanel}`);
                setTimeout(() => {
                    stage.current = count
                }, 1500);
                break;
            default:
                break;
        }

    }, [count])

    return(

            <div className={`${styles.heroSection} boxW100`}>

                <div ref={wrapperOne} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.nextWrapper : (stage.current == 1 ? styles.leftWrapper : (stage.current == 2 ? styles.centerWrapper : (stage.current == 3 ? styles.rightWrapper : stage.current == 4 ? styles.lastWrapper : (stage.current == 5 ? styles.defaultWrapper : styles.defaultWrapper))))} boxH100`}>
                
                    <div ref={containerOne} className={`${styles.panelContainer} ${stage.current == 1 ? styles.leftContainer : (stage.current == 2 ? styles.centerContainer : (stage.current == 3 ? styles.rightContainer : styles.defaultContainer))} boxH100`}>

                        <div ref={panelOne} className={`${styles.panel} ${stage.current == 1 ? styles.leftPanel : (stage.current == 2 ? styles.centerPanel : (stage.current == 3 ? styles.rightPanel : styles.defaultPanel))} flexColumn sc boxH100`}>

                            <div className={styles.panelMediaContainer}>

                                <img src="/images/dataVIZ.png" alt="designVariety"/>
                            
                            </div>

                        </div>

                    </div>

                </div>

                <div ref={wrapperTwo} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.leftWrapper : (stage.current == 1 ? styles.centerWrapper : (stage.current == 2 ? styles.rightWrapper : (stage.current == 3 ? styles.lastWrapper : stage.current == 4 ? styles.defaultWrapper : (stage.current == 5 ? styles.nextWrapper : styles.defaultWrapper))))} boxH100`}>
                
                    <div ref={containerTwo} className={`${styles.panelContainer} ${stage.current == 0 ? styles.leftContainer : (stage.current == 1 ? styles.centerContainer : (stage.current == 2 ? styles.rightContainer : styles.defaultContainer))} boxH100`}>

                        <div ref={panelTwo} className={`${styles.panel} ${startAnimation.current ? styles.leftPanelAnimation : (stage.current == 0 ? styles.leftPanel : (stage.current == 1 ? styles.centerPanel : (stage.current == 2 ? styles.rightPanel : styles.defaultPanel)))} flexColumn sc boxH100`}>

                            <div className={styles.panelMediaContainer}>

                                <img src="/images/designVariety.png" alt="designVariety"/>
                            
                            </div>

                        </div>

                    </div>

                </div>

                <div ref={wrapperThree} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.centerWrapper : (stage.current == 1 ? styles.rightWrapper : (stage.current == 2 ? styles.lastWrapper : (stage.current == 3 ? styles.defaultWrapper : stage.current == 4 ? styles.nextWrapper : (stage.current == 5 ? styles.leftWrapper : styles.defaultWrapper))))} boxW100H100`}>

                    <div ref={containerThree} className={`${styles.panelContainer} ${stage.current == 0 ? styles.centerContainer : (stage.current == 1 ? styles.rightContainer : (stage.current == 5 ? styles.leftContainer : styles.defaultContainer))} boxW100H100`}>

                        <div ref={panelThree} className={`${styles.panel} ${startAnimation.current ? styles.centerPanelAnimation : (stage.current == 0 ? styles.centerPanel : (stage.current == 1 ? styles.rightPanel : (stage.current == 5 ? styles.leftPanel : styles.defaultPanel)))} flexColumn sc boxH100`}>

                            <div className={`${styles.panelMediaContainer} boxW100`}>

                                <video muted={true} loop={true} autoPlay={true}>
                                    <source src="/videos/SEO.mp4" type="video/mp4"/>
                                    <object data="/videos/SEO.mp4" type="video/mp4"></object>
                                    <embed src="/videos/SEO.mp4" type="video/mp4"/>
                                </video>

                            </div>
                            

                        </div>

                    </div>

                </div>

                <div ref={wrapperFour} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.rightWrapper : (stage.current == 1 ? styles.lastWrapper : (stage.current == 2 ? styles.defaultWrapper : (stage.current == 3 ? styles.nextWrapper : stage.current == 4 ? styles.leftWrapper : (stage.current == 5 ? styles.centerWrapper : styles.defaultWrapper))))} boxH100`}>

                    <div ref={containerFour} className={`${styles.panelContainer} ${stage.current == 0 ? styles.rightContainer : (stage.current == 5 ? styles.centerContainer : (stage.current == 4 ? styles.leftContainer : styles.defaultContainer))} boxH100`}>

                        <div ref={panelFour} className={`${styles.panel} ${startAnimation.current ? styles.rightPanelAnimation : (stage.current == 0 ? styles.rightPanel : (stage.current == 5 ? styles.centerPanel : (stage.current == 4 ? styles.leftPanel : styles.defaultPanel)))} flexColumn sc boxH100`}>

                            <div className={styles.panelMediaContainer}>

                                <img src="/images/responsiveDesign.webp" alt="responsiveDesign"/>
                            
                            </div>
                            
                        </div>

                    </div>

                </div>
                <div ref={wrapperFive} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.lastWrapper : (stage.current == 1 ? styles.defaultWrapper : (stage.current == 2 ? styles.nextWrapper : (stage.current == 3 ? styles.leftWrapper : stage.current == 4 ? styles.centerWrapper : (stage.current == 5 ? styles.rightWrapper : styles.defaultWrapper))))} boxH100`}>

                    <div ref={containerFive} className={`${styles.panelContainer} ${stage.current == 5 ? styles.rightContainer : (stage.current == 4 ? styles.centerContainer : (stage.current == 3 ? styles.leftContainer : styles.defaultContainer))} boxH100`}>

                        <div ref={panelFive} className={`${styles.panel} ${stage.current == 5 ? styles.rightPanel : (stage.current == 4 ? styles.centerPanel : (stage.current == 3 ? styles.leftPanel : styles.defaultPanel))} flexColumn sc boxH100`}>

                            <div className={styles.panelMediaContainer}>

                                <img src="/images/dataVIZ.png" alt="responsiveDesign"/>
                            
                            </div>
                            
                        </div>

                    </div>

                </div>

                <div ref={wrapperSix} className={`${styles.panelWrapper} ${stage.current == 0 ? styles.defaultWrapper : (stage.current == 1 ? styles.nextWrapper : (stage.current == 2 ? styles.leftWrapper : (stage.current == 3 ? styles.centerWrapper : stage.current == 4 ? styles.rightWrapper : (stage.current == 5 ? styles.lastWrapper : styles.defaultWrapper))))} boxH100`}>

                    <div ref={containerSix} className={`${styles.panelContainer} ${stage.current == 4 ? styles.rightContainer : (stage.current == 3 ? styles.centerContainer : (stage.current == 2 ? styles.leftContainer : styles.defaultContainer))} boxH100`}>

                        <div ref={panelSix} className={`${styles.panel} ${stage.current == 4 ? styles.rightPanel : (stage.current == 3 ? styles.centerPanel : (stage.current == 2 ? styles.leftPanel : styles.defaultPanel))} flexColumn sc boxH100`}>

                            <div className={styles.panelMediaContainer}>

                                <img src="/images/responsiveDesign.webp" alt="responsiveDesign"/>
                            
                            </div>
                            
                        </div>

                    </div>

                </div>


            </div>
    )
}