import React from 'react'
import { FaCalendarAlt, FaPhoneAlt, FaFacebook  } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import { useTranslation } from 'react-i18next';
export default function Footer() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
  return (
    <section className='py-5 ' style={{width: '100vw',fontFamily: 'Cosmos', backgroundColor: '#1C3D4A'}}>
        <div className="container" style={{height: '100%'}}>
            <div className="row text-center" style={{height: '100%'}}>
                <div style={{height: '100%'}} className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 py-2 d-flex align-items-center justify-content-center" ><img src="/maritima/LogoMI.png" alt="Maritima Intercontinental" style={{width: '50%'}}/></div>
                <div style={{height: '100%', fontFamily: 'sans-serif', textAlign: 'justify'}} className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5 py-2">
                    <p className='text-white'>{t('footer.contacto')}<br/></p>
                    <p className='text-white'><IoMdMail className='fs-5'/> <a href='mailto:sugerencias@serconomar.com'>{t('footer.email')}</a> </p>
                    <p className='text-white'><FaPhoneAlt/> +52 (622) 221 6131. </p>
                    <p className='text-white'> <FaPhoneAlt/> +52 (622) 221 6130. </p>
                    <p className='text-white'> <FaLocationDot className='fs-5'/>  {t('footer.direccion')}</p>
                    <hr className='text-white'/>
                    <p className='text-white fs-5 fw-bolder lh-1' style={{fontFamily: 'Cosmos'}}> {t('footer.redessociales')} </p>
                    <a className='text-white fs-3 lh-1' href="https://www.facebook.com/serconomarmx" target="_blank"><FaFacebook/></a>
                </div>
                <div style={{height: '100%'}} className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 py-2 d-flex align-items-center justify-content-center flex-column">
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className='px-5 fw-bolder rounded-bottom-0'
                    style={{ width: '15rem' }}>
                        <FaCalendarAlt />
                        &nbsp;
                        {t('footer.horario')}
                </Button>
                <div style={{ minHeight: '150px' }}>
                    <Collapse  in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card className='rounded-top-0' body style={{ width: '15rem' }}>
                            <div className="d-flex justify-content-between">
                                <div className='lh-1 fw-bolder text-primary-emphasis' style={{textAlign: 'justify'}}>
                                    <p >{t('footer.lunes')}</p>
                                    <p>{t('footer.martes')}</p>
                                    <p>{t('footer.miercoles')}</p>
                                    <p>{t('footer.jueves')}</p>
                                    <p>{t('footer.viernes')}</p>
                                    <p>{t('footer.sabado')}</p>
                                    <p>{t('footer.domingo')}</p>
                                </div>
                                <div className='lh-1' style={{textAlign: 'justify'}}>
                                    <p>08:00 - 16:30</p>
                                    <p>08:00 - 16:30</p>
                                    <p>08:00 - 16:30</p>
                                    <p>08:00 - 16:30</p>
                                    <p>08:00 - 16:30</p>
                                    <p>08:00 - 13:00</p>
                                    <p>{t('footer.cerrado')}</p>
                                 
                                </div>
                            </div>
                        </Card>
                    </div>
                    </Collapse>
                </div>


                </div>
            </div>
        <hr className='text-white'/>
        <h2 className='fs-5 text-light text-center  lh-1' style={{color : '#7e02b7', fontFamily: 'monospace'}}>{t('desarrollo.copy')}<a className='text-light' target='_blank' href='https://www.geverel.com'>{t('desarrollo.pagina')}</a></h2>
        </div>
    </section>
  )
}
