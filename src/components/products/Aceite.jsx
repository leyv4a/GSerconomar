import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Aceite() {
  const { t } = useTranslation();
  return (
    <div>
    <h4 className='fs-2 text-primary-emphasis' style={{fontFamily: 'Cosmos'}}>{t('productos.aceite')}</h4>
    <p className='fs-3 fw-4' style={{fontFamily: 'Cosmos'}}>{t('productos.aceiteinfo')}</p>
    <button className='btn btn-primary btn-lg'>{t('productos.fichatecnica')}</button>
    </div>
  )
}