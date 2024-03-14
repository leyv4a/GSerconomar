import React from 'react';
import { useTranslation } from 'react-i18next';
import { GiArcheryTarget } from "react-icons/gi";
import { FaLightbulb, FaHandshake, FaMedal  } from "react-icons/fa";

export default function Filosofia() {
    const { t } = useTranslation();
  
  return (
    <section id={`${t('header.filosofia')}`} className='container mb-5'>
        <div className="row">
            <h2 className='text-center fs-1 text-primary-emphasis fw-bolder' style={{fontFamily: 'Cosmos'}}>{t('filosofia.filosofia')}</h2>
        <div className="col-xl-3 my-3 col-lg-6 col-md-6">
        <div className="card border-secondary py-2 bg-light" style={{height: "27rem"}}>
        <p className='fs-1 fw-bolder text-primary-emphasis text-center'><GiArcheryTarget/></p>
            <div className="card-body ">
              <h5 className="text-center text-dark">{t('filosofia.mision')}</h5>
              <p className="card-text text-dark">{t('filosofia.misiontexto')}</p>
            </div>
          </div>
         </div> 
         <div className="col-xl-3 my-3 col-lg-6 col-md-6">
        <div className="card border-secondary py-2 bg-light" style={{height: "27rem"}}>
        <p className='fs-1 fw-bolder text-primary-emphasis text-center'>  <FaLightbulb/></p>
            <div className="card-body ">
              <h5 className="text-center text-dark">{t('filosofia.vision')}</h5>
              <p className="card-text text-dark">{t('filosofia.visiontexto')}</p>
            </div>
          </div>
         </div> 
         <div className="col-xl-3 my-3 col-lg-6 col-md-6">
        <div className="card border-secondary py-2 bg-light" style={{height: "27rem"}}>
        <p className='fs-1 fw-bolder text-primary-emphasis text-center'>  <FaHandshake/></p>
            <div className="card-body ">
              <h5 className="text-center text-dark">{t('filosofia.valores')}</h5>
              <ul>
                <li className='mb-3'>{t('filosofia.valorestexto1')}</li>
                <li className='mb-3'>{t('filosofia.valorestexto2')}</li>
                <li className='mb-3'>{t('filosofia.valorestexto3')}</li>
                <li className='mb-3'>{t('filosofia.valorestexto4')}</li>
                <li>{t('filosofia.valorestexto5')}</li>
              </ul>
            </div>
          </div>
         </div> 
         <div className="col-xl-3 my-3 col-lg-6 col-md-6">
        <div className="card border-secondary py-2 bg-light" style={{height: "27rem"}}>
        <p className='fs-1 fw-bolder text-primary-emphasis text-center'>  <FaMedal/></p>
            <div className="card-body ">
              <h5 className="text-center text-dark">{t('filosofia.calidad')}</h5>
              <p className="card-text text-dark">{t('filosofia.calidadtexto')}</p>
            </div>
          </div>
         </div> 

        </div>
    </section>
  )
}
