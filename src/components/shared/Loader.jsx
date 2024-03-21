import React from 'react'
import './Loader.css'

export default function Loader() {
  const estilos = {
    position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
  }
  return (
    <div className="wrap" style={{estilos}}>

    <div className='d-flex justify-content-center align-items-center' style={{width: '100vw', height:'100vh', backgroundColor:'#d9f8ff'}}>
        <button className="button">
        <span className="liquid"></span>  
        <span className="btn-txt"></span>
        </button>
    </div>
  </div>
  )
}
