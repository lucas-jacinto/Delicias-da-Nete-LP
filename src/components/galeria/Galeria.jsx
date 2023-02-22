import React from 'react'
import './galeria.css'

import bolo2 from '../../assets/bolo2.png'
import bolo3 from '../../assets/bolo4.png'
import bolo4 from '../../assets/bolo5.png'
import bolo5 from '../../assets/bolo6.png'

import bombom1 from '../../assets/bombom5.png'
import bombom3 from '../../assets/bombom3.png'
import bombom4 from '../../assets/bombom4.png'
import bombom5 from '../../assets/bombom6.png'




const Galeria = () => {
  return (
    <section id='galeria' className='galeria-section'>
      <div className='line-top3'></div>
      <div className='line-top3'></div>
      <h1 className='h1_galeria'>Galeria</h1>
      <div className='container galeria_container'>
        <div className='galeria_imgs'>
         <img src={bolo3} alt="bolo imagem" /> 
         <img src={bombom5} alt="bolo imagem" /> 
         <img src={bolo4} alt="bolo imagem" /> 

         <img src={bolo3} alt="bolo imagem" /> 
         <img src={bombom5} alt="bolo imagem" /> 
         <img src={bolo4} alt="bolo imagem" /> 

         <img src={bolo3} alt="bolo imagem" /> 
         <img src={bombom5} alt="bolo imagem" /> 
         <img src={bolo4} alt="bolo imagem" /> 

         <img src={bolo5} alt="bolo imagem" /> 
         <img src={bombom1} alt="bolo imagem" /> 
         <img src={bombom3} alt="bolo imagem" /> 

         <img src={bolo2} alt="bolo imagem" /> 
         <img src={bombom4} alt="bolo imagem" /> 
         <img src={bolo5} alt="bolo imagem" /> 
         <img src={bolo4} alt="bolo imagem" /> 
        </div>
      </div>
    </section>
  )
}

export default Galeria