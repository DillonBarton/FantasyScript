import Head from 'next/head';
import { useLayoutEffect, useState} from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import Section from '../components/Section'
import SectionDivider from '../components/InformationDisplay/SectionDivider/SectionDivider'
import NewApplicantForm from "../components/Forms/NewApplicantForm";

export default function Home() {

    const [ loading, setLoading ] = useState(false)
    const [ loaded ] = usePageLoaderHook(loading)

    useLayoutEffect(()=>{
        setTimeout(()=>{
            setLoading(true)
        }, 0)
        
    })

    return (
        <Layout pageTitle={`Home`} metaTags={{keyWords: ' Index, Home', description: ''}}>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            <SectionDivider direction={false}/>
            <Section/>
            <NewApplicantForm/>
        </Layout>
      )
}
