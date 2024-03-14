import React from 'react'
import Header from '../shared/Header.jsx'
import Footer from './Footer.jsx'
import { useTranslation } from 'react-i18next'

export default function Aviso() {
    const { t } = useTranslation();

    const estilos ={
        main:{
        //   height: '100vh',
          width: '100vw',
          minHeight: '100vh',
          backgroundColor: '#d9f8ff'
        }
      }
  return (
    <>
     <main style={estilos.main} >
      <Header backg={'bg-light'} isHome={false}/>
     <div className="container py-5">
        <div className="row py-5">
        <div className="col" style={{fontFamily: 'Cosmos'}}>
            <h4 className='fw-bolder'>{t('terminos.titulo')}</h4>
            <h5>{t('terminos.bienvenida')}</h5>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto1titulo')}</span>{t('terminos.texto1texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto2titulo')}</span>{t('terminos.texto2texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto3titulo')}</span>{t('terminos.texto3texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto4titulo')}</span>{t('terminos.texto4texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto5titulo')}</span>{t('terminos.texto5texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('terminos.texto6titulo')}</span>{t('terminos.texto6texto')}</p>
            <h5>{t('terminos.footer')}</h5>
            <hr/>
            <h4 className='fw-bolder'>{t('privacidad.titulo')}</h4>
            <h5>{t('privacidad.subtitulo')}</h5>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto1titulo')}</span>{t('privacidad.texto1texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto2titulo')}</span>{t('privacidad.texto2texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto3titulo')}</span>{t('privacidad.texto3texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto4titulo')}</span>{t('privacidad.texto4texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto5titulo')}</span>{t('privacidad.texto5texto')}</p>
            <p className='lh-1'><span className='fw-bolder'>{t('privacidad.texto6titulo')}</span>{t('privacidad.texto6texto')}</p>
            <h5>{t('privacidad.footer1')}</h5>
            <h5>{t('privacidad.footer2')}</h5>
            <h2 className='fw-bolder'>{t('privacidad.fecha')}{t('privacidad.fechafecha')}</h2>
        </div>
      
        </div>
     </div>
    </main>
  <Footer/>
    </>

  )
}
