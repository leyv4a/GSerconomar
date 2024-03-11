import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';

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
         <div className="container pt-5">
        <div className="row">
          <div className="d-none d-sm-none d-lg-flex d-md-none d-xl-flex col-6  justify-content-center align-items-center " style={{height: '60vh'}}>
              <img src="/LogoSerChico.png" alt="Serconomar" style={{width: '100%'}}/>
          </div>
          <div className=" col-sm-12 col-12 col-md-12 col-lg-6 col-xl-6 text-center py-5 px-5 ">
            <div className='bg-light card p-3 shadow'>
              <h1 className='mb-3 fs-2'>{cabeceroForm} <Cursor/></h1>

            {/* Campo nombre */}
            <div className="form-floating mb-3">
              <input type="text" className="form-control"  placeholder="Nombre"/>
              <label >{t('header.productos')}</label>
            </div>

            {/* Campo correo */}
            <div className="form-floating mb-3">
              <input type="email" className="form-control"  placeholder="Correo"/>
              <label >Correo</label>
            </div>
            {/* Campo numero de telefono */}
            <div className="input-group mb-3">
            <select className="form-select" aria-label="Select country" style={{maxHeight: '3.6rem' , maxWidth: '4rem'}}> 
             {countries.map(country => {
              return (
                <option value={country.code}>{country.flag}</option>
              )
             })}
            </select>
            <div class="form-floating ">
              <input type="tel" class="form-control" placeholder="Telefono"/>
              <label >Telefono</label>
            </div>

          </div>

          <div className="form-floating mb-3">
            <textarea rows={5} style={{resize: 'none'}} className="form-control" placeholder="¡Deja tu mensaje!" ></textarea>
            <label >Mensaje</label>
          </div>


          {/* Boton */}
          <div className="mb-3 d-grid gap-2">
            <button className='btn btn-primary btn-lg'> Enviar </button>
          </div>
            
            {/* Aviso  */}
            <div className="mb-3">
            <p><small>Al hacer click al boton 'Enviar', estas aceptando las <a href='#hola'>Política de Privacidad y Términos de Servicio</a> </small></p>
            </div>
            
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default Main