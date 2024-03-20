import React from 'react'
import './Loader.css'

export default function Loader() {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{width: '100vw', height:'100vh', backgroundColor:'#d9f8ff'}}>
        <button className="button">
        <span className="liquid"></span>  
        <span className="btn-txt"></span>
        </button>
    </div>
  )
}
