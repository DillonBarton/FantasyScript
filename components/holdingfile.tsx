import { useCallback, useState, useEffect, useRef } from 'react';

import styled, { css } from 'styled-components'

import styles from '../styles/glassCarousel.module.css'

import { SidepanelContainerKF, CenterPanelContainerKF, PanelKF, SidePanelKF } from '../styled-components/Keyframes';


export default function GlassCarousel(){

    const [counter, setcounter] = useState(0);
    const [startAnimation, setStartAnimation] = useState(true);
    const initialState = 0
    const four = 4
    let narr = useRef<number[]>()
    let snarr = useRef<number[]>([0, 1, 2, 3, 4])

    useEffect(()=>{
        let interval = setInterval(() => {
            if(counter == four){
                setcounter(initialState)
            } else {
                setcounter(counter + 1)
            }               
        }, 8000);
        return () => clearInterval(interval)
    }, [counter])

    useEffect(()=>{
        narr.current = snarr.current.map(arr => arr + 1)
        snarr.current = narr.current.map(arr => arr > 4 ? 0 : arr)
    },[counter])

    const handleWrapperPosition = useCallback((wrapperPosition)=>{
        switch (wrapperPosition){
            case 0:
                return styles.nextWrapper
            case 1:
                return styles.leftWrapper
            case 2:
                return styles.centerWrapper
            case 3:
                return styles.rightWrapper
            default:
                    return styles.defaultWrapper
                break;
        }
    }, [])

    const handleContainerPosition = useCallback((containerPositon) =>{
        switch (containerPositon) {
            case 0:
                return css``
            case 1:
                return(
                    css`
                    animation: ${SidepanelContainerKF} 13s linear infinite;
                    `
                )
            case 2:
                return(
                    css`
                    &:hover{
                        animation: ${CenterPanelContainerKF} 13s linear infinite;
                    }
                    `
                )
            case 3:
                return(
                    css`
                    animation: ${SidepanelContainerKF} 13s linear infinite;
                    `
                )
            default:
                    return css`
                    opacity: 0;
                    left: 0;
                    transform-origin: 50% 50% -100000px;
                    transform: translate3d(200px, 0, -5px) rotateY(1.2deg);
                    `
                break;
        }
    }, [])
    const handlePanelPosition = useCallback((panelPositon)=>{
        switch (panelPositon){
            case 0:
                return css``
                break;
            case 1:
                return (
                    css`
                    opacity: 1 !important;
                    box-shadow: 0 0 15px 1px rgb(0, 0, 0, 0.5);
                    transform: translateZ(-1px) rotateX(0.15deg);
                    `
                )
                break;
            case 2:
                return(
                    css`
                    opacity: 1 !important;
                    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.5);
                    transform: translateZ(-0.1px) rotateX(0.05deg);
                    `
                )
                break;
            case 3:
                return(
                    css`
                    opacity: 1 !important;
                    box-shadow: 0 0 15px 1px rgb(0, 0, 0, 0.5);
                    transform: translateZ(-1px) rotateX(0.15deg);
                    `
                )
                break;
            default:
                return css``
                break;
        }
    }, [])
    
    const handlePanelAnimation = (panelPositon)=>{
        setStartAnimation(false)
        switch (panelPositon){
            case 0:
                return(
                    css``
                )
                break;
            case 1:
                return(
                    css`
                    box-shadow: 0 0 15px 1px rgb(0, 0, 0, 0.5);
                    transform: translateZ(-3px) rotateX(0.5deg);
                    animation: ${SidePanelKF} 0.8s 2.3s ease forwards;
                    `
                )
                break;
            case 2:
                return(
                    css`
                    box-shadow: 0 5px 15px 1px rgba(0, 0, 0, 0.5);
                    transform: translateZ(-3px) rotateX(0.5deg);
                    animation: ${PanelKF} 0.8s 2s ease forwards;
                    `
                )
                break;
            case 3:
                return(
                    css`
                    box-shadow: 0 0 15px 1px rgb(0, 0, 0, 0.5);
                    transform: translateZ(-3px) rotateX(0.5deg);
                    animation: ${SidePanelKF} 0.8s 2.6s ease forwards;
                    `
                )
                break;
            default:
                return(
                    css``
                )
                break;
        }
    }


    const HeroSection = styled.section`
        position: relative;
        height: 700px;
        perspective: 8px;
        perspective-origin: center center;
        z-index: 5;
    `

    const PanelWrapper = styled.div`
        position: absolute;
        top: -80px;
        perspective: 8px;
        perspective-origin: center center;
        transform-style: preserve-3d;
        transition: 1s linear;
        z-index: 5;
        ${({wrapperPosition}) => (handleWrapperPosition(wrapperPosition))}
    `
    
    const PanelContainer = styled.div`
        transform-style: preserve-3d;
        z-index: 5;
        ${({containerPositon}) => (handleContainerPosition(containerPositon))}
    `

    const Panel = styled.div`
        opacity: 0;
        padding: 20px;
        transform-style: preserve-3d;
        z-index: 5;
        ${({panelPositon}) => (startAnimation ? handlePanelAnimation(panelPositon) : handlePanelPosition(panelPositon))}
    `

    const PanelMediaContainer = styled.div`
        height: 100%;
            img{
                height: 100%;
            }
            video{
                width: 100%;
                height: 100%;
            }
    `

    return(
        <div id="center" className="flexColumn sc boxW100" style={{zIndex: 100}}>

            <HeroSection className="boxW100">

                <PanelWrapper wrapperPosition={snarr.current[1]} className={`${snarr.current[1] ? handleWrapperPosition(snarr.current[1]) : handleWrapperPosition(snarr.current[1])} boxH100`}>
                
                    <PanelContainer containerPositon={snarr.current[1]} className="boxH100">

                        <Panel panelPositon={snarr.current[1]} className="flexColumn sc boxH100">

                            <PanelMediaContainer>

                                <img src="/images/designVariety.png" alt="designVariety"/>
                            
                            </PanelMediaContainer>

                        </Panel>

                    </PanelContainer>

                </PanelWrapper>

                <PanelWrapper wrapperPosition={snarr.current[2]} className={`${snarr.current[2] ? handleWrapperPosition(snarr.current[2]) : handleWrapperPosition(snarr.current[2])} boxW100H100`}>

                    <PanelContainer containerPositon={snarr.current[2]} className="boxW100H100">

                        <Panel panelPositon={snarr.current[2]} className="flexColumn sc boxW100H100">

                            <PanelMediaContainer className="boxW100H100">

                                {/* <img src="/Media/images/responsiveDesign.jpg" alt=""/> */}
                                <video muted={true} loop={true} autoPlay={true}>
                                    <source src="/videos/SEO.mp4" type="video/mp4"/>
                                    <object data="/videos/SEO.mp4" type="video/mp4"></object>
                                    <embed src="/videos/SEO.mp4" type="video/mp4"/>
                                </video>

                            </PanelMediaContainer>
                            

                        </Panel>

                    </PanelContainer>

                </PanelWrapper>

                <PanelWrapper wrapperPosition={snarr.current[3]} className={`${snarr.current[3] ? handleWrapperPosition(snarr.current[3]) : handleWrapperPosition(snarr.current[3])} boxH100`}>

                    <PanelContainer containerPositon={snarr.current[3]} className="boxH100">

                        <Panel panelPositon={snarr.current[3]} className="flexColumn sc boxH100">

                            <PanelMediaContainer>

                                <img src="/images/responsiveDesign.webp" alt="responsiveDesign"/>
                            
                            </PanelMediaContainer>
                            
                        </Panel>

                    </PanelContainer>

                </PanelWrapper>

            </HeroSection>
            
        </div>
    )
}