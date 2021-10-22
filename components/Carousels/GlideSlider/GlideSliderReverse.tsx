import { useEffect, useRef, useState } from 'react'
import styles from './glideSlider.module.css'
import { ScreenCard } from './GlideSlider'

export default function GlideSliderReverse({unitOfMeasurement, duration, width}){

    const sliderTrack = useRef(null)
    const data = ['fashion', 'fashion', 'property', 'construction', 'graphic', 'professional', 'Restaurant', 'null', 'null', 'null',]

    function setCloneNodes(){
        let firstSliderClone = sliderTrack.current.childNodes[sliderTrack.current.childNodes.length - 2].cloneNode(true);
        let secondSliderClone = sliderTrack.current.childNodes[sliderTrack.current.childNodes.length - 1].cloneNode(true);
        sliderTrack.current.prepend(firstSliderClone, secondSliderClone)
    }

    function setSliderTrack(){
        let distanceToTranslate = getDistanceToTranslate();
        sliderTrack.current.style.transform = `translateX(-${distanceToTranslate}${unitOfMeasurement})`;
    }

    function beginTransition(){
        setTimeout(() => {
            sliderTrack.current.style.transition = `${duration}s`;
            sliderTrack.current.style.transform = `translateX(0)`;
        }, 0)
    }

    function getDistanceToTranslate(){
        let nodeListLengthMinusClones = sliderTrack.current.childNodes.length - 2;
        let distanceToTranslate = nodeListLengthMinusClones * width;
        return distanceToTranslate;
    }


    useEffect(()=>{
        
        setCloneNodes();
        setSliderTrack();
        beginTransition();

        function transitionComplete(e){
            var track = e.target;
            if(track.id){
                let distanceToTranslate = getDistanceToTranslate();
                sliderTrack.current.style.transition = "none";
                sliderTrack.current.style.transform = `translateX(-${distanceToTranslate}${unitOfMeasurement})`;
                beginTransition();
            }
        };
        sliderTrack.current.addEventListener("transitionend", transitionComplete);
        
    }, [])

    return(
        <div className={`${styles.sliderContainer} boxW100`}>

            <div className={`${styles.backgroundBlender} ${styles.leftBlender}`}>
            </div>

            <div ref={sliderTrack} id="sliderTrack" className={`${styles.sliderTrack} boxW100H100 flexRow sc`}>

                {
                    data.map((elem, index) => <ScreenCard key={index} number={index} text={elem}></ScreenCard>)
                }

            </div>

            <div className={`${styles.backgroundBlender} ${styles.rightBlender}`}>
            </div>

        </div>
    )
}