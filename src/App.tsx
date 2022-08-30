import React from 'react'
import NavBar from './components/NavBar'
import './App.css'
import LandingSection from './components/LandingSection'
import QuemSomosSection from './components/QuemSomosSection'
import NossaEquipe from './components/NossaEquipe'
import NossoProjeto from './components/NossoProjeto'
import Contato from './components/Contato'
import Rodape from './components/rodape'
import SobreNos from './components/SobreNos'
import NossoAplicativo from './components/NossoAplicativo'
import CriacaoApp from './components/CriacaoApp'
import Video from './components/Video/index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingSection />
      <QuemSomosSection />
      <NossaEquipe/>
      <SobreNos/>
      <NossoProjeto/>
      <NossoAplicativo/>
      <CriacaoApp/>
      <Video/>
      <Contato/>
      <Rodape/>
    </div>
  )
}

export default App
