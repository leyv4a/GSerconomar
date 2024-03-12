import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Mexicana() {
  const { t } = useTranslation();

  return (
    <section id="mexicana" style={{height: '25vh'}}>
    <div className="d-flex flex-column " 
      // style={{ 
      // background: 'rgb(119, 191, 190)',
      // backgroundImage: 'linear-gradient(180deg, rgba(119,191,190,1) 1%, rgba(119,191,190,1) 14%, rgba(35,132,154,1) 100%)'}}
    style={{
    width: '100%',
    height: '25vh',
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 100%), url(/ocean3.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}}
      >
      <div className="my-auto text-white">
        <h2 className=" text-center">{t('mexicana.header')}</h2>
        <h4 className=" text-center d-none d-sm-none d-md-block d-xl-bl">{t('mexicana.text')}</h4>
      </div>
    </div>
  </section>
  )
}
