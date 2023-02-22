import React from 'react'
import './bolos.css'
import bolos3 from '../../assets/bolo2.png'
import bolos4 from '../../assets/bolo4.png'
import bolos5 from '../../assets/bolo5.png'
import bolos6 from '../../assets/bolo6.png'

const Bolos = () => {
  return (
    <section id='bolos' className='bolos-section'>
      <div className='line-top'></div>
      <div className='line-top'></div>
      <h1 className='h1_bolos'>Bolos e Tortas</h1>
      <div className='container bolos_container'>
          <div className='bolos_cards'>
            <div className='bolos_img'>
              <img src={bolos3} alt="" />
            </div>
            <div className='bolos_text'>
                <h4>Bolo de 4kg</h4>
                <p>Recheio: Morango com Leite Ninho</p>
            </div>
          </div>
          <div className='bolos_cards'>
            <div className='bolos_img'>
              <img src={bolos4} alt="" />
            </div>
            <div className='bolos_text'>
                <h4>Bolo de 4kg</h4>
                <p>Recheio: Morango com Leite Ninho</p>
            </div>
          </div>
          <div className='bolos_cards'>
            <div className='bolos_img'>
              <img src={bolos5} alt="" />
            </div>
            <div className='bolos_text'>
                <h4>Bolo de 4kg</h4>
                <p>Recheio: Morango com Leite Ninho</p>
            </div>
          </div>
          <div className='bolos_cards'>
            <div className='bolos_img'>
              <img src={bolos6} alt="" />
            </div>
            <div className='bolos_text'>
                <h4>Bolo de 4kg</h4>
                <p>Recheio: Morango com Leite Ninho</p>
            </div>
          </div>
      </div>
      <button className='btn btn-bolos'>
        Faca seu Pedido
      </button>
    </section>
  )
}

export default Bolos