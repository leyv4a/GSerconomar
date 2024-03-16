import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Harina() {
  const { t } = useTranslation();
  return (
    <div>
    <h4 className='fs-2 text-primary-emphasis fw-bolder lh-1' style={{fontFamily: 'Cosmos'}}>{t('productos.harina')}</h4>
    <p className='fs-4 lh-1' style={{fontFamily: 'Cosmos', textAlign:'justify'}}>{t('productos.harinainfo')}</p>
    {/* <button className='btn btn-primary btn-lg'>{t('productos.fichatecnica')}</button> */}
    <div className='d-flex flex-column gap-4 mt-2' style={{fontFamily: 'Cosmos'}}>
      <div className='lh-1'>
        <h4 className='fw-bolder text-primary-emphasis fs-2 lh-1' >{t('productos.harinacalidad')}</h4>
        <p className='text-primary-emphasis fs-4 lh-1' ><small>{t('productos.harinavariables')}</small><br/><span className='fs-3 lh-1'>{t('productos.harinaorgano-lep')}</span></p>
      </div>
      <div className="d-flex flex-row gap-5">
      <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinaolortitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.harinaolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinacolortitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.harinacolortext')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinaproteinatitle')} <br/>
          <span className='text-dark fs-5'>{t('productos.harinaproteinamayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.harinaproteinaporcentaje')}</span></p>
        </div>
        <div>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinagrasatitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.harinagrasamayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.harinagrasaporcentaje')}</span></p>
          <p className='text-primary-emphasis fs-4 lh-1' >{t('productos.harinahumedadtitle')}<br/>
          <span className='text-dark fs-5'>{t('productos.harinahumedadmayor')}</span><br/>
          <span className='fs-1 text-primary-emphasis fw-bolder '>{t('productos.harinahumedadporcentaje')}</span></p>
        </div>
      </div>
    </div>
    </div>
  )
}