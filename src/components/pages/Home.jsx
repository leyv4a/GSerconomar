import React from 'react'
import Header from '../shared/Header.jsx';
import Main from './Main.jsx';
import Certificaciones from './Certificaciones.jsx';
import Producto from './Producto.jsx';
import Nosotros from './Nosotros.jsx';
import Procesos from './Procesos.jsx';
import Filosofia from './Filosofia.jsx';
import Mexicana from './Mexicana.jsx';
import Mapa from './Mapa.jsx';
import Footer from './Footer.jsx'

   


export default function Home() {
    const estilos ={
        main:{
          height: '100vh',
          width: '100vw',
          minHeight: '100vh'
        },
        backgroundMain:{
          height: '100%',
          background: 'url("./mainBackground.svg") ',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }
      }
  return (
    <>
    <main style={estilos.main} >
    <div style={estilos.backgroundMain}>
      <Header backg={'bg-light'} isHome={true}/>
      <Main/>
    </div>
  </main>
  <section className='d-flex flex-column gap-5'>
      <Certificaciones/>
      <Producto/>
      <Nosotros/>
      <Procesos/>
      <Filosofia/>
      <Mexicana/> 
      <Mapa/>
      <Footer/>
  </section>
      </>
  )
}
