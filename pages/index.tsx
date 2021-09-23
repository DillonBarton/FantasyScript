import Head from 'next/head';
import {useEffect, useLayoutEffect, useMemo, useState} from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import PhaseDisplay from '../components/InformationDisplay/PhaseDisplay/PhaseDisplay'
import NewApplicantForm from "../components/Forms/NewApplicantForm";
import useStateManager, { ApiCall } from '../Reducer/StateManegement'
import useAxios from "../hooks/useAxios";
import GlassScrollBar from "../components/scrollBars/GlassScrollBar/GlassScrollBar";
import GlassPanelCarousel from '../components/Carousels/GlassPanelCarousel/GlassPanelCarousel';

export default function Home() {

    const [ URL, setURL ] = useState('')
    const [ dispatch, payLoad ] = useStateManager({})
    const [ loaded, setLoaded, setLoading ] = usePageLoaderHook(false)

    useLayoutEffect(()=>{
        setLoaded()
    })

    return (
        <Layout pageTitle={`Home`} metaTags={{keyWords: ' Index, Home', description: ''}}>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            {/*<PhaseDisplay/>*/}
            <NewApplicantForm/>
        </Layout>
      )
}
