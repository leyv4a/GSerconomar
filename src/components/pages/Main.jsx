import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import Aviso from './Aviso';
import Contacto from '../forms/Contacto';

function Main() {
  const { t } = useTranslation();

    const [cabeceroForm] = useTypewriter({
        words:['¡Mantente en contacto!', '¡Keep in touch!','¡On reste en contact!' ,'¡Mantenha-se em contato!'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 50
    });

    const countries = [
        // América
        { code: '+52', name: 'México', flag: '🇲🇽' },
        { code: '+1', name: 'Estados Unidos', flag: '🇺🇸' },
        { code: '+55', name: 'Brasil', flag: '🇧🇷' },
        { code: '+54', name: 'Argentina', flag: '🇦🇷' },
        { code: '+1', name: 'Canadá', flag: '🇨🇦' },
        { code: '+56', name: 'Chile', flag: '🇨🇱' },
        { code: '+57', name: 'Colombia', flag: '🇨🇴' },
        { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
        { code: '+51', name: 'Perú', flag: '🇵🇪' },
        // Europa
        { code: '+44', name: 'Reino Unido', flag: '🇬🇧' },
        { code: '+33', name: 'Francia', flag: '🇫🇷' },
        { code: '+49', name: 'Alemania', flag: '🇩🇪' },
        { code: '+39', name: 'Italia', flag: '🇮🇹' },
        { code: '+34', name: 'España', flag: '🇪🇸' },
        { code: '+7', name: 'Rusia', flag: '🇷🇺' },
        { code: '+46', name: 'Suecia', flag: '🇸🇪' },
        { code: '+31', name: 'Países Bajos', flag: '🇳🇱' },
        // Asia
        { code: '+86', name: 'China', flag: '🇨🇳' },
        { code: '+91', name: 'India', flag: '🇮🇳' },
        { code: '+81', name: 'Japón', flag: '🇯🇵' },
        { code: '+82', name: 'Corea del Sur', flag: '🇰🇷' },
        { code: '+65', name: 'Singapur', flag: '🇸🇬' },
        { code: '+971', name: 'Emiratos Árabes Unidos', flag: '🇦🇪' },
        { code: '+966', name: 'Arabia Saudita', flag: '🇸🇦' },
        { code: '+65', name: 'Singapur', flag: '🇸🇬' },
        // Puedes agregar más países según sea necesario
      ];
  return (
   <>
         <div id={t('header.inicio')} className="container pt-5" style={{overflow: 'hidden'}}>
        <div className="row" style={{overflow: 'hidden'}}>
          <div className="d-none d-sm-none d-lg-flex d-md-none d-xl-flex col-6  justify-content-center align-items-center " style={{height: '60vh'}}>
              <img src="/LogoSerChico.png" alt="Serconomar" style={{width: '100%'}}/>
          </div>
          <div className="col-sm-12 col-12 col-md-12 col-lg-6 col-xl-6 text-center py-5 px-5" >
            <Contacto/>
          </div>
        </div>
      </div>
   </>
  )
}

export default Main