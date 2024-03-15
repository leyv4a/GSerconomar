import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import Harina from '../products/Harina.jsx';
import Soluble from '../products/Soluble.jsx';
import Aceite from '../products/Aceite.jsx';


function Producto() {
  
  const [productoActual, setProductoActual] = useState(null);
  const [producto, setProducto] = useState("Harina");

  const renderizarProducto = (componente) => {
    setProductoActual(componente);
  };
  useEffect(()=>{
    renderizarProducto(<Harina/>);
  },[])

  const { t } = useTranslation();

  return (
    <>
    <section id={`${t('header.productos')}`} className='pt-5 container' style={{width: '100vw', }}>
     <div className=" d-flex flex-column align-items-center gap-4" style={{width: '100%', height: '30vh'}}>
      <h2 className='fs-1'><span className='border-bottom border-primary-subtle border-4 ' style={{fontFamily: 'Cosmos'}}>{t('productos.presentacion')}&nbsp; &nbsp;</span></h2>
      <div className="d-flex justify-content-evenly align-items-center " style={{width:' 80vw'}}>
      <div>
        <input onClick={() => {renderizarProducto(<Harina />); setProducto('Harina')}} type="image" src="/productos/harina.jpg" style={{width:'7rem'}} className={`rounded-circle ${producto == "Harina" ? 'shadow' : ''}`}/>
      </div>
      <div>
        <input onClick={() => {renderizarProducto(<Aceite />); setProducto('Aceite')}} type="image" src="/productos/aceite.png" style={{width:'7rem'}} className={`rounded-circle ${producto == "Aceite" ? 'shadow' : ''}`}/>
      </div>
      <div>
        <input onClick={() =>{ renderizarProducto(<Soluble />); setProducto('Soluble')}} type="image" src="/productos/soluble.png" style={{width:'7rem'}} className={`rounded-circle ${producto == "Soluble" ? 'shadow' : ''}`} />
      </div>
      </div>
     </div>
     <div className="" style={{width: '100%'}}>
      {productoActual}
     </div>
     
    </section>
    </>
  )
}

export default Producto