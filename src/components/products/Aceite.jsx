import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Aceite() {
  const { t } = useTranslation();
  return (
    <div>
    <h4 className='fs-2 text-primary-emphasis fw-bolder lh-1' style={{fontFamily: 'Cosmos'}}>{t('productos.aceite')}</h4>
    <p className='fs-4 lh-1' style={{fontFamily: 'Cosmos'}}>{t('productos.aceiteinfo')}</p>
    {/* <button className='btn btn-primary btn-lg'>{t('productos.fichatecnica')}</button> */}
    <div className='d-flex flex-column gap-4 mt-2' style={{fontFamily: 'Cosmos'}}>
      <div className='lh-1'>
        <h4 className='fw-bolder text-primary-emphasis fs-2 lh-1' >{t('productos.harinacalidad')}</h4>
        <p className='text-primary-emphasis fs-3'>{t('productos.harinaorgano-lep')}</p>
      </div>
      <div className="d-flex flex-row gap-5">
      <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinaolortitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.aceiteolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.aceitecolortitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.aceitecolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.aceiteagltitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.aceitemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.aceiteaglporcentaje')}</span></p>
        </div>
        <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.aceitehumedadtitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.aceitemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.aceitehumedadporcentaje')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.aceiteestearinastitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.aceitemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.aceiteestearinasporcentaje')}</span></p>
        </div>
        <div>
        <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.aceiteperoxidotitle')}<br/>
          <span className='text-dark fs-5 lh-1'>{t('productos.aceitemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder lh-1'>{t('productos.aceiteperoxidoporcentaje')}</span>
          <sub className='text-dark lh-1'><small className='lh-1'>{t('productos.aceiteperoxidosub')}</small></sub></p>
        </div>
      </div>
    </div>
    </div>
  )
}