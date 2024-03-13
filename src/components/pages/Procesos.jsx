import React from 'react'
import ImageGallery from 'react-image-gallery';
import { useTranslation } from 'react-i18next';
import 'react-image-gallery/styles/css/image-gallery.css'

export default function Procesos() {
    const { t } = useTranslation();

    const images = [
        {
            original: '/procesos/almacenpt.png',
            thumbnail: '/procesos/almacenpt.png'
        },
        {
            original: '/procesos/aduana1.png',
            thumbnail: '/procesos/aduana1.png'
        },
        {
            original: '/procesos/centrifuga.png',
            thumbnail: '/procesos/centrifuga.png'
        }
    ]
  return (
    <section className='container' style={{width: '100vw', height: '100vh'}}>
        <div className="row h-100">
            <div className="col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
                <h2 className='text-primary-emphasis fw-bolder' style={{fontFamily: 'Cosmos', textAlign: 'justify'}}>{t('procesos.titulo')}</h2>
                <h5 className='fs-3' style={{fontFamily: 'Cosmos', textAlign: 'justify'}}>{t('procesos.texto')}</h5>
            </div>
            <div className="col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6 my-auto text-center">
                <h3 className='text-primary-emphasis  fw-bolder' style={{fontFamily: 'Cosmos'}}>{t('procesos.conocenos')}</h3>
            <ImageGallery items={images}/>
            </div>
        </div>
    </section>
  )
}
