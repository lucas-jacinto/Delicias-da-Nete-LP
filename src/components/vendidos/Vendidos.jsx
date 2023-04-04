import React from 'react'
import './vendidos.css'
import tabela from '../../assets/valores-tabela.png'

const vendidos = () => {
  return (
    <section>
      <div className='line-top4'></div>
      <div className='line-top4'></div>
        <h1 className='h1_valores'>Valores</h1>
        <div className='valores valores_container'>
          <div className='img-tabela'>
            <img src={tabela} alt='tabela de valores'/>
          </div>
        </div>
    </section>
  )
}

export default vendidos
