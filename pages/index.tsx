import dynamic from 'next/dynamic';
import { useLayoutEffect, useState, useRef } from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
const FSHero = dynamic( ()=> import('../components/FSHero'))
import Section from '../components/InformationDisplay/Section/Section'
import SectionDivider from '../components/InformationDisplay/SectionDivider/SectionDivider'
const BubbleDisplay = dynamic( ()=> import('../components/CustomDesigns/BubbleDisplay/BubbleDisplay'))
import useScrollFade from '../hooks/useScrollFade';
import GlideSliderReverse from '../components/Carousels/GlideSlider/GlideSliderReverse';
const GlideSlider = dynamic(() => import('../components/Carousels/GlideSlider/GlideSlider'))
const NewApplicantForm = dynamic( ()=> import('../components/Forms/NewApplicantForm'))
const FilmDisplay = dynamic( ()=> import('../components/CustomDesigns/filmDisplay/FilmDisplay'))

export default function Home() {

    const [ loading, setLoading ] = useState(false)
    const [ loaded ] = usePageLoaderHook(loading)
    const bubble = useRef(null);
    const [ bubbleAnimation, setBubbleAnimation ] = useState(false)
    const film = useRef(null);
    const [ filmAnimation, setFilmAnimation ] = useState(false)
    const bblAnimation = useScrollFade( bubble, bubbleAnimation, setBubbleAnimation);
    const flmAnimation = useScrollFade( film, filmAnimation, setFilmAnimation);

    useLayoutEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        }, 800)
        
    })

    return (
        <Layout pageTitle={`Home`} metaTags={{keyWords: ' Index, Home', description: ''}}>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            <Section
            reversed={false}
            dividerBottom={'section'}
            dividerTop={'none'}
            section={bubble}
            inViewport={bblAnimation}
            key={'bubble'}
            title={"about us"}
            subtitle={"London web design specialists"}
            paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <BubbleDisplay/>
            </Section>

            <SectionDivider reference={null}>
                <GlideSliderReverse
                unitOfMeasurement={'vw'}
                duration={60}
                width={80}
                />
                <GlideSlider
                unitOfMeasurement={'vw'}
                duration={60}
                width={80}
                />
            </SectionDivider>

            <Section
            reversed={true}
            dividerBottom={'page'}
            dividerTop={'section'}
            section={film}
            inViewport={flmAnimation}
            key={'film'}
            title={"our services"}
            subtitle={"building your digital image"}
            paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <FilmDisplay/>
            </Section>
            <NewApplicantForm/>
        </Layout>
      )
}
