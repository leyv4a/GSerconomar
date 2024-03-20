import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n.js'; // Importa la configuración de i18n
import { TbLanguage } from "react-icons/tb";
import {Link} from 'react-router-dom';

function Header( {isHome, backg} ) {
  const { t, i18n  } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    const mobileWidth = 990;
    setIsMobile(window.innerWidth < mobileWidth);
  };

  const handleScroll = () => {
    const scrollThreshold = 100; // Puedes ajustar esto según tus necesidades
    setIsScrolled(window.scrollY > scrollThreshold);
  };

  // Agrega un event listener para manejar cambios de tamaño de ventana
  useEffect(() => {
    handleResize()
    
    window.addEventListener('load', handleResize);

    // Agrega un event listener para manejar el scroll cuando no es mobile
    if (!isMobile) {
      window.addEventListener('scroll', handleScroll);
    }

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  return (
   <>
  <nav className={`navbar navbar-expand-lg fixed-top  ${isMobile ?  backg : ''} ${isScrolled ?  backg +' shadow' : ''}`} style={{height: '10vh'}}>
  <div className="container py-1">
  {
    isHome?  
    <a className={`navbar-brand d-block d-sm-block d-md-block ${isScrolled ? ' ' : 'd-lg-none d-xl-none d-xxl-none'}`} href={`#${t('header.inicio')}`}><img style={{width: '126px'}} src='/LogoSerChico.png'></img></a>
    :
    <Link className={`navbar-brand d-block d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block`} to={"/"}><img style={{width: '126px'}} src='/LogoSerChico.png'></img></Link>
}
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto mb-2 mb-lg-0 mt-xs-5 fw-semibold">
       {
        isHome?
        <>
        <a className="nav-link active text-center" href={`#${t('header.productos')}`}>{t('header.productos')}</a>
        <a className="nav-link active text-center" href={`#${t('header.nosotros2')}`}>{t('header.nosotros')}</a>
        <a className="nav-link active text-center" href={`#${t('header.procesos')}`}>{t('header.procesos')}</a>
        <a className="nav-link active text-center" href={`#${t('header.filosofia')}`}>{t('header.filosofia')}</a>
        </>
        :
        ''
       }
      </div>
      <span className="d-flex justify-content-center">
        <div className='me-2'>
          <select className='form-select ' onChange={changeLanguage} value={i18n.language} style={{cursor: 'pointer'}}>
            <option value="es-MX">Español</option>
            <option value="en-US">English</option>
          </select>
        </div>
       {
        isHome? 
        <Link className="btn btn-primary " to={"/bdt"}>{t('header.bolsatrabajo')}</Link>
        :
        ''
       }
        {/* <a className="btn btn-primary " href="#">{t('header.bolsatrabajo')}</a> */}
      </span>
    </div>
  </div>

</nav>
</>
  )
}

export default Header