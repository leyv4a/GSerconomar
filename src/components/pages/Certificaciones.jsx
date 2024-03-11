import React, {useEffect, useState} from 'react';
import { PiCertificateFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Haccp from '/haccp.png';
import Msc from '/msc.png';
import Senasica from '/senasica.png';

//77bfbe
function Certificaciones() {

  const [isMobile, setIsMobile] = useState(false);


  const handleResize = () => {
    const mobileWidth = 768;
    setIsMobile(window.innerWidth < mobileWidth);
  };
  useEffect(() => {
    handleResize()

    window.addEventListener('load', handleResize);

    // Agrega un event listener para manejar el scroll cuando no es mobile
  

    // Limpia los event listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('load', handleResize);
    };
  }, []);

 


  return (
    <div className=" d-flex justify-content-center" style={{backgroundColor: '#77bfbe'}} >
    <Marquee speed={100} autoFill pauseOnHover gradient={!isMobile} gradientColor="#77bfbe" style={{width: '50%', height: '40vh', overflowY: 'hidden'}}> 
      <div className="" style={{width: '70%', height: '100%'}}>
        <img style={{width: '100%'}} src={Haccp}></img>
      </div>
      <div className="" style={{width: '80%', height: '100%'}}>
       <img className="" style={{width: '100%'}} src={Senasica}></img>
      </div>
     <div className="" style={{width: '40%', height: '100%'}}>
      <img style={{width: '100%'}} src={Msc}></img>
     </div>
     
    </Marquee>
    </div>
  )
}

export default Certificaciones