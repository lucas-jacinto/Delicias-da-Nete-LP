import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Top from './components/top/Top'
import Bolos from './components/bolos/Bolos'
import Bombons from './components/bombons/Bombons'
import FAQs from './components/faqs/FAQs'
import Galeria from './components/galeria/Galeria'
import Sobre from './components/sobre/Sobre'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <Top />
    <Bolos />
    <Bombons />
    <FAQs />
    <Galeria/>
    <Sobre/>
    <Footer />
  </React.StrictMode>
)
