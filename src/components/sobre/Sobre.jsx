import './sobre.css'
import foto1 from '../../assets/exp-nete-foto.jpg'
import {MdLocationOn} from 'react-icons/md'
import {AiFillFacebook,AiFillInstagram,AiOutlineWhatsApp} from 'react-icons/ai'


const Sobre = () => {
  return (
    <section id='sobre'>
      <h1 className='h1_sobre'>Contato </h1>
      <div className='container sobre_container'>
      <div className='img-sobre'>
          <img src={foto1} alt="" />
          <h4>Luzinete Jacinto</h4>
          <h6>CONFEITEIRA</h6>
        </div>
        <div className='conteudo-sobre'>
          <h2>Estamos Localizados em: <a href='https://goo.gl/maps/ckmBGvvVwZzGBT8x5' target='_blank' rel="noreferrer">Petrolina de Goias-GO <MdLocationOn className='icon-sobre'/></a></h2>
          <div className='socials-sobre'>
            <a href="https://goo.gl/maps/ckmBGvvVwZzGBT8x5" target='_blank' rel="noreferrer"><AiFillFacebook/></a>
            <a href="https://goo.gl/maps/ckmBGvvVwZzGBT8x5" target='_blank' rel="noreferrer"><AiFillInstagram/></a>
            <a href="https://goo.gl/maps/ckmBGvvVwZzGBT8x5" target='_blank' rel="noreferrer"><AiOutlineWhatsApp/></a>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit sint, harum in odit non, voluptatem repellendus soluta eaque, amet similique adipisci cupiditate placeat ex. Dignissimos culpa earum velit veritatis?</p>
          <button className='btn btn-sobre'>Encomende ja</button>
        </div>
      </div>
    </section>
  )
}

export default Sobre