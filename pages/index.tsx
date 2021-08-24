import {useEffect, useMemo, useState} from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import FSPageLoader from "../components/FSPageLoader";
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import PhaseDisplay from '../components/InformationDisplay/PhaseDisplay/PhaseDisplay'
import NewClientForm from "../components/Forms/NewClientForm";
import StateManager, { ApiCall } from '../Reducer/StateManegement'

export default function Home() {

    const dataLocation = new ApiCall('http://localhost:3000/api', '/clients', 'index', null);
    const [dispatch, payLoad] = useMemo(() => StateManager(dataLocation), [])
    const [loaded, setLoaded, setLoading] = usePageLoaderHook(false)



    useEffect(()=>{
        dispatch(dataLocation)
        console.log(payLoad)
    }, [])

    return (
        <Layout pageTitle={`Home`}>
            {loaded}
            {/*<div style={{zIndex: 1000, height: "500px", width: "500px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "4rem", color: "purple", backgroundColor: "black"}}>*/}
            {/*    {}*/}
            {/*</div>*/}
            <DreamSpace/>
            <FSHero/>
            <PhaseDisplay/>
            <NewClientForm/>
        </Layout>
      )
}
