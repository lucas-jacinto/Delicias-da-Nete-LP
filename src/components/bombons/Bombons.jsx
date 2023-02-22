import React from 'react'
import './bombons.css'

import bombom1 from '../../assets/bombom3.png'
import bombom2 from '../../assets/bombom4.png'
import bombom3 from '../../assets/bombom5.png'
import bombom4 from '../../assets/bombom6.png'

const Bombons = () => {
  return (
    <section id='bombons' className='bombons_section'>
      <div className='line-top2'></div>
      <div className='line-top2'></div>
      <h1 className='h1_bombons'>Bombons </h1>
      <div className='container bombons_container'>

        <div className='bombons_cards'>
            <div className='bombons_img'>
              <img src={bombom1} alt="imagem do bombom" />
            </div>
            <div className='bombons_text'>
                <h4>Bombom de Morango</h4>
                <p>Recheio: Morango, Brigadeiro Branco e cobertura de Chocolate.</p>
            </div>
        </div>

        <div className='bombons_cards'>
            <div className='bombons_img'>
              <img src={bombom3} alt="imagem do bombom" />
            </div>
            <div className='bombons_text'>
                <h4>Bombom de Morango</h4>
                <p>Recheio: Morango, Brigadeiro Branco e cobertura de Chocolate.</p>
            </div>
        </div>

        <div className='bombons_cards'>
            <div className='bombons_img'>
              <img src={bombom4} alt="imagem do bombom" />
            </div>
            <div className='bombons_text'>
                <h4>Bombom de Morango</h4>
                <p>Recheio: Morango, Brigadeiro Branco e cobertura de Chocolate.</p>
            </div>
        </div>

        <div className='bombons_cards'>
            <div className='bombons_img'>
              <img src={bombom2} alt="imagem do bombom" />
            </div>
            <div className='bombons_text'>
                <h4>Bombom de Morango</h4>
                <p>Recheio: Morango, Brigadeiro Branco e cobertura de Chocolate.</p>
            </div>
        </div>
      </div>
      <button className='btn btn-bombons'>
        Faca seu Pedido
      </button>
    </section>
  )
}

export default Bombons