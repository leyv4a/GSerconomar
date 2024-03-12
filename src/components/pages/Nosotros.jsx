import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Nosotros() {

    
  const { t } = useTranslation();
  return (
    <section className='' style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/nosotros/almacenpt.png)',
        backgroundSize: 'cover'
    }}>
     <div className="container">
        <div className="row p-5">
         <div className="col-12 col-xs-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 bg-light p-5">
         <h5 class="text-dark text-center fs-2 text-primary-emphasis fw-bolder" style={{fontFamily: 'Cosmos'}}>{t('nosotros.titulo')}</h5>
            <p class="fs-3 text-dark my-3 fw-bolder ">{t('nosotros.subtitulo')}</p>
            <div class="card over">
              <div class="card-body overflow-hidden bg-light fs-4" >
                <p class="text-dark"> {t('nosotros.texto1')}<br /> <br />
                {t('nosotros.texto2')}</p>
                  <p class="d-sm-none d-none d-md-block d-lg-block d-xl-block">
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
