import React from 'react'
import './top.css'
import bolo from '../../assets/bolo2.png'

const Top = () => {
  return (
    <section className='section_top'>
      <div className='container top_container'>
        <div className='top_infos'>
          <h4>#MelhoresBombonsDaRegião</h4>
          <h1>Faça já o seu Pedido! </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum adipisci reiciendis.
          </p>
        </div>
        <div className='top_img'>
          <img src={bolo} alt="bolo de morango" />
        </div>
        <button className='btn btn_top'>Fazer Pedido</button>
      </div>
    </section>
  )
}

export default Top