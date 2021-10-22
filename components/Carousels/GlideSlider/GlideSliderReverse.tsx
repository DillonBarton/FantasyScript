import { useEffect, useRef, useState } from 'react'
import styles from './glideSliderReverse.module.css'

export default function GlideSliderReverse(){

    const sliderTrack = useRef(null)

    function setCloneNodes(){
        let firstSliderClone = sliderTrack.current.childNodes[sliderTrack.current.childNodes.length - 2].cloneNode(true);
        let secondSliderClone = sliderTrack.current.childNodes[sliderTrack.current.childNodes.length - 1].cloneNode(true);
        sliderTrack.current.prepend(firstSliderClone, secondSliderClone)
    }

    function setSliderTrack(){
        let distanceToTranslate = getDistanceToTranslate();
        sliderTrack.current.style.transform = `translateX(-${distanceToTranslate}vw)`;
    }

    function beginTransition(){
        let distanceToTranslate = getDistanceToTranslate();
        setTimeout(() => {
            sliderTrack.current.style.transition = "35s";
            sliderTrack.current.style.transform = `translateX(0)`;
        }, 0)
    }

    function getDistanceToTranslate(){
        let nodeListLengthMinusClones = sliderTrack.current.childNodes.length - 2;
        let distanceToTranslate = nodeListLengthMinusClones * 80;
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
                sliderTrack.current.style.transform = `translateX(-${distanceToTranslate}vw)`;
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

                <div className={`${styles.sliderItemContainer} boxH100 flexColumn cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderOne} boxH100 flexRow cc`}>
                        <h2>
                            Fashion
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderTwo} boxH100 flexRow cc`}>
                        <h2>
                            Property
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderThree} boxH100 flexRow cc`}>
                        <h2>
                            Construction
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderFour} boxH100 flexRow cc`}>
                        <h2>
                            Graphic
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderFive} boxH100 flexRow cc`}>
                        <h2>
                            Professional
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderSix} boxH100 flexRow cc`}>
                        <h2>
                            Restaurant
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderSeven} boxH100 flexRow cc`}>
                        <h2>
                            7
                        </h2>
                    </a>
                </div>

                <div className={`${styles.sliderItemContainer} boxH100 flexRow cc`}>
                    <a href="" className={`${styles.sliderItem} ${styles.sliderEight} boxH100 flexRow cc`}>
                        <h2>
                            8
                        </h2>
                    </a>
                </div>

            </div>

            <div className={`${styles.backgroundBlender} ${styles.rightBlender}`}>
            </div>

        </div>
    )
}