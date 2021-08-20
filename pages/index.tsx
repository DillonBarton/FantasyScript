import {useEffect, useState} from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import FSPageLoader from "../components/FSPageLoader";
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import FSHero from '../components/FSHero'
import PhaseDisplay from '../components/InformationDisplay/PhaseDisplay/PhaseDisplay'
import NewClientForm from "../components/Forms/NewClientForm";
import useStateManager from '../Reducer/StateManegement'

export default function Home() {
    const [URL, setURL] = useState('http://localhost:3000/api/clients')
    const [page, setPage] = useState('index')
    const [component, setComponent] = useState(null)
    const {payLoad} = useStateManager({URL, page, component})
    const [loaded, setLoaded, setLoading] = usePageLoaderHook(false)

    useEffect(()=>{
        setLoaded
    })

    useEffect(()=>{
        console.log(payLoad)
    })

    return (
        <Layout pageTitle={`Home`}>
            {loaded}
            <DreamSpace/>
            <FSHero/>
            <PhaseDisplay/>
            <NewClientForm/>
        </Layout>
      )
}
