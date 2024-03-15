import React, {useState, useRef} from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import Swal from 'sweetalert2';

export default function Contacto() {
    const { t } = useTranslation();
    const recaptchaRef = useRef();

    const [cabeceroForm] = useTypewriter({
        words:['¡Mantente en contacto!', '¡Keep in touch!','¡On reste en contact!' ,'¡Mantenha-se em contato!'],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 50
    });

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
          .min(2, t('mainForm.nombremin'))
          .required(t('mainForm.requerido')),
        correo: Yup.string()
          .email(t('mainForm.correoinvalido'))
          .required(t('mainForm.requerido')),
        telefono: Yup.string()
          .matches(/^[0-9]+$/, t('mainForm.telefonoinvalido'))
          .min(10, t('mainForm.telefonomin'))
          .max(10, t('mainForm.telefonomax'))
          .required(t('mainForm.requerido')),
        mensaje: Yup.string()
          .min(10, t('mainForm.mensajemin'))
          .required(t('mainForm.requerido')),
      });

    const handleSubmit = async (values, { resetForm }) => {
        const token = await recaptchaRef.current.executeAsync();
        Swal.fire({
            title: t('mainForm.gracias'),
            text: t('mainForm.graciascontacto'),
            imageUrl: "/LogoSerChico.png",
            imageWidth: 200,
            imageHeight: 100,
            imageAlt: "Serconomar",
            showCloseButton : true,
            confirmButtonText: "Ok",
            confirmButtonColor: '#1C3D4A',
            showCancelButton: false,
         
          });
    
        // clg de prueba
        // console.log('Token de ReCAPTCHA:', token);
        // console.log('Valores del formulario:', values);
    
        // Aquí  se hara la peticion al backend
    
        // Resetea el formulario después de enviar
        resetForm();
      };
    

  return (
    <div className='bg-light card p-3 shadow'>
    <h1 className='mb-3 fs-2'>{cabeceroForm} <Cursor/></h1>

    <Formik
  initialValues={{
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  }}
  validationSchema={validationSchema}
  onSubmit={(values, { resetForm }) => {
    handleSubmit(values,{ resetForm });
  }}
>
  {formik => (
    <Form>
      {/* Campo nombre */}
      <div className="form-floating mb-3">
        <Field type="text" name="nombre" className="form-control" placeholder="Nombre" />
        <label htmlFor="nombre">{t('mainForm.nombre')}</label>
        <ErrorMessage name="nombre" component="div" className="text-danger text-start" />
      </div>

      {/* Campo correo */}
      <div className="form-floating mb-3">
        <Field type="email" name="correo" className="form-control" placeholder="Correo" />
        <label htmlFor="correo">{t('mainForm.correo')}</label>
        <ErrorMessage name="correo" component="div" className="text-danger text-start" />
      </div>

      {/* Campo telefono */}
      <div className="form-floating mb-3">
        <Field type="tel" name="telefono" className="form-control" placeholder="Telefono" />
        <label htmlFor="telefono">{t('mainForm.telefono')}</label>
        <ErrorMessage name="telefono" component="div" className="text-danger text-start" />
      </div>

      {/* Campo mensaje */}
      <div className="form-floating mb-3">
        <Field as="textarea" rows={5} style={{resize: 'none'}} className="form-control" name="mensaje" placeholder="¡Deja tu mensaje!" />
        <label htmlFor="mensaje">{t('mainForm.mensaje')}</label>
        <ErrorMessage name="mensaje" component="div" className="text-danger text-start" />
      </div>
      {/* CAPTCHA */}
      <div className="mb-3">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey="6LeCMJopAAAAAH04GPtjIt8ZCHhNGb5QeFyI1X8H"
        size="invisible"
        />  
      </div>

      {/* Boton */}
      <div className="mb-3 d-grid gap-2">
        <button type="submit" className="btn btn-primary btn-lg">{t('mainForm.enviar')}</button>
      </div>
    </Form>
  )}
</Formik>
  
  {/* Aviso  */}
  <div className="mb-3">
  <p><small>{t('mainForm.aviso')} <Link to={'/priv'}>{t('mainForm.politicas')}</Link> </small></p>
  </div>
  </div>
  )
}
