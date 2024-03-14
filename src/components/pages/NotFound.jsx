import React from 'react'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
    const {t} = useTranslation();
    const estilos ={
        main:{
          height: '100vh',
          width: '100vw',
          minHeight: '100vh'
        },
        backgroundMain:{
          height: '100%',
          background: 'url("./404bg.svg") ',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }
      }
  return (
    <div style={{backgroundColor: '#d9f8ff'}}>
    <main style={estilos.main} >
    <div className='d-flex justify-content-center align-items-center' style={estilos.backgroundMain}>
        <h2 className='text-light fw-bolder' style={{fontFamily: 'Cosmos', fontSize: '5vw', textShadow: '1px 2px 2px black'}}>{t('notfound.titulo')}</h2>
    </div>
  </main>
      </div>
  )
}
