import { useEffect } from 'react'

import styles from '../styles/index.module.css'


import usePageLoaderHook from '../hooks/pageLoaderHook'
import Layout from '../components/Layout'
import DreamSpace from '../styled-components/DreamSpace'
import GlassCarousel from '../components/Carousels/GlassPanelCarousel/GlassPanelCarousel'
import Hero from '../components/FSHero'
import PhaseDisplay from '../components/InformationDisplay/PhaseDisplay/PhaseDisplay'

export default function Home() {

  const [loader, setLoaded, setLoading] = usePageLoaderHook(false)

  useEffect(()=>{
    setLoaded
  }, )


  return (
    
    <Layout pageTitle={`Home`}>
      {loader}
      <DreamSpace/>
      <Hero/>
      <PhaseDisplay/>
      <GlassCarousel/>
    </Layout>
  )
}
