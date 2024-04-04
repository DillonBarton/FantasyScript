import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import styles from './scrollPhase.module.css'

export default function ScrollPhase({reference, section}) {

    useEffect(() =>{
        console.log(section)
    }, [section])
    
    return(
        <div className={`${styles.scrollPhase} flexRow cc flexGrow`}>
            <div ref={reference} className={styles.phaseImageContainer}>
                <Image layout="fill" src="/images/SEOwood.jpeg"/>
            </div>
        </div>
    )
}

export function useScrollHeightTracker() {


    const phaseContainer = useRef(null)
    const phaseImage = useRef(null)
    const [ sectionNumber, setSectionNumber ] = useState(1)

    useEffect(()=>{
        window.addEventListener("scroll", elementIsInViewport)
    })

    // only begins calculations if phaseImage is in view as to not slow down site
    function elementIsInViewport(){

        const parentMeasurements = phaseContainer.current.getBoundingClientRect();
        const childMeasurements = phaseImage.current.getBoundingClientRect();
        const parentDistanceFromTop = Math.round(parentMeasurements.top + window.scrollY);
        const childDistanceFromTop = Math.round(childMeasurements.top + window.scrollY);

        if(childDistanceFromTop - 10 >= parentDistanceFromTop){
            calculateAndSetSectionNumber(parentDistanceFromTop, childDistanceFromTop, parentMeasurements, childMeasurements)
            calculateAndSetElemPosition(parentDistanceFromTop, childDistanceFromTop, childMeasurements)
        }

    }

    function calculateAndSetSectionNumber(parentDistanceFromTop, childDistanceFromTop, parentMeasurements, childMeasurements ){

        var childPos = Math.round(childDistanceFromTop + childMeasurements.height - parentDistanceFromTop);
        var numOfSections = Math.ceil(parentMeasurements.height / childMeasurements.height);

        if((parentMeasurements.height - 50) <= childPos && sectionNumber !== numOfSections){
            setSectionNumber(numOfSections);
        } else {
            for (let i = 1; i < numOfSections; i++){
                let section = i * childMeasurements.height;
                if( childPos >= section - 50 && childPos <= section + (childMeasurements.height - 50)){
                    sectionNumber !== i ? setSectionNumber(i) : null;
                }
            }
        }
    }

    function calculateAndSetElemPosition(parentDistanceFromTop, childDistanceFromTop, childMeasurements){

        var childPos = childDistanceFromTop + childMeasurements.height - parentDistanceFromTop;
        var childSectionFloat = childPos / childMeasurements.height;
        let evenOdd = isOdd(childSectionFloat)
        var multiplier = childSectionFloat - Math.floor(childSectionFloat)

        if(evenOdd === 0){
            phaseImage.current.style.right = `${Math.round(25 * multiplier)}%`
        } else {
            phaseImage.current.style.right = `${Math.round(25 * (1 - multiplier))}%`
        }

    }

    function isOdd(num){
        return Math.floor(num % 2);
    }
    return [phaseContainer, phaseImage, sectionNumber]
}