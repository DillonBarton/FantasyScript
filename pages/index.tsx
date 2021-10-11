import Head from 'next/head';
import React, { useLayoutEffect, useState, useRef, useEffect } from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import Section from '../components/InformationDisplay/Section/Section'
import SectionDivider from '../components/InformationDisplay/SectionDivider/SectionDivider'
import BubbleDisplay from '../components/CustomDesigns/BubbleDisplay/BubbleDisplay'
import useScrollFade from '../hooks/useScrollFade';
import NewApplicantForm from "../components/Forms/NewApplicantForm";
import Hero from '../components/Hero';
import FilmDisplay from '../components/CustomDesigns/filmDisplay/FilmDisplay';

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
            dividerBottom={'none'}
            section={bubble}
            inViewport={bblAnimation}
            key={'bubble'}
            title={"about us"}
            subtitle={"London web design specialists"}
            paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <BubbleDisplay/>
            </Section>
            
            <Section
            reversed={true}
            dividerBottom={'page'}
            section={film}
            inViewport={flmAnimation}
            key={'film'}
            title={"our services"}
            subtitle={"building your company's image"}
            paragraphs={["Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip.", "Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip."]}>
                <FilmDisplay/>
            </Section>
            <NewApplicantForm/>
        </Layout>
      )
}
