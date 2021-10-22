import { useEffect, useRef, useState } from 'react'
import styles from './glideSlider.module.css'
import cardStyles from './glideSliderCards.module.css'

export default function GlideSlider({unitOfMeasurement, duration, width}){

    const sliderTrack = useRef(null)
    const data = ['fashion', 'fashion', 'property', 'construction', 'graphic', 'professional', 'Restaurant', 'null', 'null', 'null',]

    function setCloneNodes(){
        let firstSliderClone = sliderTrack.current.childNodes[0].cloneNode(true);
        let secondSliderClone = sliderTrack.current.childNodes[1].cloneNode(true);
        sliderTrack.current.append(firstSliderClone, secondSliderClone)
    }

    function beginTransition(){
        let distanceToTranslate = getDistanceToTranslate();
        setTimeout(()=>{
            sliderTrack.current.style.transition = `${duration}s`;
            sliderTrack.current.style.transform = `translateX(-${ distanceToTranslate }${unitOfMeasurement})`;
        }, 0)        
    }

    function getDistanceToTranslate(){
        let nodeListLengthMinusClones = sliderTrack.current.childNodes.length - 2;
        let distanceToTranslate = nodeListLengthMinusClones * width;
        return distanceToTranslate;
    }


    useEffect(()=>{
        
        setCloneNodes();
        beginTransition();

        function transitionComplete(e){
            var track = e.target;
            if(track.id){
                sliderTrack.current.style.transition = "none";
                sliderTrack.current.style.transform = "translateX(0)";
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

export function ScreenCard({number, text}){

    return(
        <div className={`${cardStyles.screenSliderItemContainer} boxH100 flexRow cc`}>
            <div className={`${cardStyles.screenSliderItemShadow} boxH100 flexRow cc`}>
                <a href="" className={`${cardStyles.screenSliderItem} ${cardStyles[`screenSlider${number}`]} boxW100H100 flexRow cc`}>
                    <h2>
                        {
                            text
                        }
                    </h2>
                </a>
            </div>
        </div>
    )
}

export function Card({number, text}){

    return(
        <div className={`${cardStyles.cardSliderItemContainer} boxH100 flexRow sc`}>
            <div className={`${cardStyles.cardSlidetItemShadow} boxH100 flexRow cc`}>
                <a href="#" className={`${cardStyles.cardSliderItem} ${cardStyles[`cardSlider${number}`]} boxW100H100 flexRow cc`}>
                    <h2>
                        {
                            text
                        }
                    </h2>
                </a>
            </div>
        </div>
    )
}