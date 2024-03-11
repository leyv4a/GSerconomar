import React, {useEffect, useState} from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    const mobileWidth = 768;
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
  <nav className={`navbar navbar-expand-lg fixed-top ${isMobile ? ' bg-light' : ''} ${isScrolled ? ' bg-light' : ''}`} >
  <div className="container py-1">
    <a className="navbar-brand d-block d-sm-block d-md-none d-lg-none d-xl-none" href="#"><img style={{width: '126px'}} src='/LogoSerChico.png'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav me-auto mb-2 mb-lg-0 mt-xs-5 fw-semibold">
         <a className="nav-link active text-center" href="#">{t('header.productos')}</a>
        <a className="nav-link active text-center" href="#">{t('header.nosotros')}</a>
        <a className="nav-link active text-center" href="#">{t('header.procesos')}</a>
        <a className="nav-link active text-center" href="#">{t('header.filosofia')}</a>
      </div>
      <span className="d-flex justify-content-center">
        <a className="btn btn-primary " href="#">Bolsa de trabajo</a>
      </span>
    </div>
  </div>
</nav>
</>
  )
}

export default Header