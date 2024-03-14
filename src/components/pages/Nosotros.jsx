import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Nosotros() {

    
  const { t } = useTranslation();
  return (
    <section id={`${t('header.nosotros2')}`} className='d-flex align-items-center overflow-y-hidden' style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/nosotros/almacenpt.png)',
        backgroundSize: 'cover'
    }}>
     <div className="container ">
        <div className="row  py-5">
         <div className="col-12 col-xs-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8  bg-light p-5 shadow rounded" >
         <h5 className="text-dark text-center fs-2 text-primary-emphasis fw-bolder" style={{fontFamily: 'Cosmos'}}>{t('nosotros.titulo')}</h5>
            <p className="fs-3 text-dark my-3 fw-bolder " style={{fontFamily: 'Cosmos'}}>{t('nosotros.subtitulo')}</p>
            <div className="card over" >
              <div className="card-body overflow-hidden bg-light fs-5" style={{fontFamily: 'Cosmos'}} >
                <p className="text-dark"> {t('nosotros.texto1')}<br /> <br />
                <span className=' d-sm-none d-none d-md-none d-lg-block d-xl-block d-xxl-block'>{t('nosotros.texto2')}</span></p>
                  <p className="d-sm-none d-none d-md-none d-lg-none d-xl-block d-xxl-block">
                  {t('nosotros.texto3')}
                </p>
              </div>
            
        </div>

         </div>
        </div>   
     </div>
    </section>
  )
}
