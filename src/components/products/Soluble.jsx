import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Soluble() {
  const { t } = useTranslation();
  return (
    <div>
    <h4 className='fs-2 text-primary-emphasis fw-bolder lh-1' style={{fontFamily: 'Cosmos'}}>{t('productos.soluble')}</h4>
    <p className='fs-4 lh-1' style={{fontFamily: 'Cosmos', textAlign:'justify'}}>{t('productos.solubleinfo')}</p>
    {/* <button className='btn btn-primary btn-lg'>{t('productos.fichatecnica')}</button> */}
    <div className='d-flex flex-column gap-4 mt-2' style={{fontFamily: 'Cosmos'}}>
      <div className='lh-1'>
        <h4 className='fw-bolder text-primary-emphasis fs-2 lh-1' >{t('productos.harinacalidad')}</h4>
        <p className='text-primary-emphasis fs-4 lh-1' ><small>{t('productos.harinavariables')}</small><br/><span className='fs-3 lh-1'>{t('productos.harinaorgano-lep')}</span></p>
      </div>
      <div className="d-flex flex-row gap-5">
      <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.solubleolortitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.solubleolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.solublecolortitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.solublecolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.solubleproteinatitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.solublemenor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.solubleproteinaporcentaje')}</span></p>
        </div>
        <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.solubleconcentraciontitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.solublemenor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.solubleconcentracionporcentaje')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.solublephtitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.solublemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.solublephporcentaje')}</span></p>
        </div>
        <div>
        <p className='d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block text-primary-emphasis fs-4 lh-1' >{t('productos.solublegrasatitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.solublemayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.solublegrasaporcentaje')}</span></p>
        </div>
      </div>
    </div>
    </div>
  )
}