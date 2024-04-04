"use client"

import dynamic from 'next/dynamic';
import { useLayoutEffect, useState, useRef } from 'react'

import usePageLoaderHook from "@/hooks/pageLoaderHook"
import DreamSpace from '../styled-components/DreamSpace'
const FSHero = dynamic( ()=> import('../components/FSHero'))
import Section from '../components/Section/Section'
import SectionDivider from '../components/SectionDivider/SectionDivider'
const BubbleDisplay = dynamic( ()=> import('@/components/bubbleDisplay/BubbleDisplay'))
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
const GlideSliderReverse = dynamic(() => import('../components/GlideSlider/GlideSliderReverse'))
const GlideSlider = dynamic(() => import('../components/GlideSlider/GlideSlider'))
const NewApplicantForm = dynamic( ()=> import('../components/Forms/NewApplicantForm'))
const FilmDisplay = dynamic( ()=> import('../components/filmDisplay/FilmDisplay'))

/**
 * TODO - Install Vite and bun
 *
 * @constructor
 */

export default function HomePage() {

    const [ loading, setLoading ] = useState(false)
    const [ loaded ] = usePageLoaderHook(loading)

    useLayoutEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        }, 800)

    })

    return (
        <>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            <Section
                reversed={false}
                dividerBottom={'section'}
                dividerTop={'none'}
                key={'bubble'}
                title={"about us"}
                subtitle={"London web design specialists"}
                paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <BubbleDisplay/>
            </Section>

            <SectionDivider reference={null}>
                <GlideSliderReverse
                    unitOfMeasurement={'vw'}
                    duration={70}
                    width={80}
                />
                <GlideSlider
                    unitOfMeasurement={'px'}
                    duration={30}
                    width={330}
                />
            </SectionDivider>

            <Section
                reversed={true}
                dividerBottom={'page'}
                dividerTop={'section'}
                key={'film'}
                title={"our services"}
                subtitle={"building your digital image"}
                paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <FilmDisplay/>
            </Section>
            <NewApplicantForm/>
        </>
    )
}
