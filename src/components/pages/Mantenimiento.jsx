import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Mantenimiento() {

    const {t} = useTranslation();
    const estilos ={
        main:{
          height: '100vh',
          width: '100vw',
          minHeight: '100vh'
        },
        backgroundMain:{
          height: '100%',
          background: 'url("./maintbg.svg") ',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }
      }
  return (
    <div style={{backgroundColor: '#d9f8ff'}}>
    <main style={estilos.main} >
    <div className='d-flex justify-content-start align-items-center' style={estilos.backgroundMain}>
        <h2 className='text-info-emphasis fw-bolder my-5' style={{fontFamily: 'Cosmos', fontSize: '8vw'}}>{t('mantenimiento.titulo')}</h2>
    </div>
  </main>
      </div>
  )
}
