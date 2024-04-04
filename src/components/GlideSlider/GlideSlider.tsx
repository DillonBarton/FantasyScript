import { useEffect, useRef } from 'react'
import styles from './glideSlider.module.css'
import cardStyles from './glideSliderCards.module.css'

export default function GlideSlider({unitOfMeasurement, duration, width}){

    const sliderTrack = useRef(null)
    const dataTwo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']


    function setCloneNodes(){
        let arrayLength = Math.ceil(document.documentElement.clientWidth / width)
        for (let i = 0; i < arrayLength; i++) {
            sliderTrack.current.append(sliderTrack.current.childNodes[i].cloneNode(true))
        }
    }

    function getFullDistance(){
        let nodeListLengthNoClones = sliderTrack.current.childNodes.length - Math.ceil(document.documentElement.clientWidth / width);
        let distanceToTranslate = nodeListLengthNoClones * width;
        if(unitOfMeasurement === 'vw'){
            distanceToTranslate = convertVwToPx(distanceToTranslate)   
        }
        return distanceToTranslate;
    }

    function getRemainingDistance(fullDistance){
        let distanceToTranslate = fullDistance - Math.abs(sliderTrack.current.getBoundingClientRect().x)
        return distanceToTranslate;
    }

    function beginTransition(){
        let distanceToTranslate = getFullDistance();
        setTimeout(()=>{
            sliderTrack.current.style.transition = `${ duration }s linear`;
            sliderTrack.current.style.transform = `translateX(-${ distanceToTranslate }px)`;
        }, 0)
    }

    function restartTransition(e){
        if(e.target === e.currentTarget){
            sliderTrack.current.style.transition = "none";
            sliderTrack.current.style.transform = "translateX(0)";
            beginTransition();
        }
    };

    function setSpeed(){
        let fullDistance = getFullDistance();
        let slowDuration = getDuration(fullDistance);
        slowDuration *= 3;
        sliderTrack.current.style.transition = `${ Math.round(slowDuration) }s linear`;
        sliderTrack.current.style.transform = `translateX(-${ fullDistance - 1 }px)`;
    }

    function resetSpeed(){
        let fullDistance = getFullDistance();
        let slowDuration = getDuration(fullDistance);
        sliderTrack.current.style.transition = `${ Math.round(slowDuration) }s linear`;
        sliderTrack.current.style.transform = `translateX(-${ fullDistance + 1 }px)`;
    }

    function convertVwToPx(distance){
        return (distance * document.documentElement.clientWidth) / 100;
    }

    function getDuration(fullDistance){
        let distanceToTranslate = getRemainingDistance(fullDistance);
        let speed = fullDistance / duration
        return distanceToTranslate / speed;
    }
    

    useEffect(()=>{
        
        setCloneNodes();
        beginTransition();

        sliderTrack.current.addEventListener("transitionend", restartTransition);
        sliderTrack.current.addEventListener("mouseenter", setSpeed);
        sliderTrack.current.addEventListener("mouseleave", resetSpeed);
    }, [])

    return(
        <div className={`${styles.sliderContainer} boxW100`}>

            <div className={`${styles.backgroundBlender} ${styles.leftBlender}`}>
            </div>

            <div ref={sliderTrack} id="sliderTrack" className={`${styles.sliderTrack} boxW100H100 flexRow sc`}>

                {
                    dataTwo.map((elem, index) => <Card key={index} number={index} text={elem}></Card>)
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
            <div className={`${cardStyles.cardSlidetItemShadow} boxW100H100 flexRow cc`}>
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