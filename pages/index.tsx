import {useEffect, useLayoutEffect, useMemo, useState} from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import PhaseDisplay from '../components/InformationDisplay/PhaseDisplay/PhaseDisplay'
import NewClientForm from "../components/Forms/NewClientForm";
import useStateManager, { ApiCall } from '../Reducer/StateManegement'
import useAxios from "../hooks/useAxios";
import GlassScrollBar from "../components/scrollBars/GlassScrollBar/GlassScrollBar";

export default function Home() {

    const [ URL, setURL ] = useState('http://localhost:3000/api/Clients')
    const [ data, Loading ] = useAxios(URL)
    const [ dispatch, payLoad ] = useStateManager({})
    const [loaded, setLoaded, setLoading] = usePageLoaderHook(false)



    useEffect(()=>{
        setURL('http://localhost:3000/api/Users')

    }, [])
    useLayoutEffect(()=>{
        setLoaded()
    })

    return (
        <Layout pageTitle={`Home`}>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            <PhaseDisplay/>
            <NewClientForm/>
            <GlassScrollBar/>
        </Layout>
      )
}
