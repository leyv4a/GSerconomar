import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import Harina from '../products/Harina.jsx';
import Soluble from '../products/Soluble.jsx';
import Aceite from '../products/Aceite.jsx';


function Producto() {
  
  const [productoActual, setProductoActual] = useState(null);

  const renderizarProducto = (componente) => {
    setProductoActual(componente);
  };
  useEffect(()=>{
    renderizarProducto(<Harina/>);
  },[])

  const { t } = useTranslation();

  return (
    <>
    <section id='productos' className='pt-5 container' style={{width: '100vw', height: '100vh'}}>
     <div className=" d-flex flex-column align-items-center gap-4" style={{width: '100%', height: '30%'}}>
      <h2 className='fs-1'><span className='border-bottom border-primary border-4 ' style={{fontFamily: 'Cosmos'}}>{t('productos.presentacion')}&nbsp; &nbsp;</span></h2>
      <div className="d-flex justify-content-evenly align-items-center " style={{width:' 70%'}}>
      <div>
        <input onClick={() => renderizarProducto(<Harina />)} type="image" src="/harina.jpg" style={{width:'7rem'}} className="rounded-circle" />
      </div>
      <div>
        <input onClick={() => renderizarProducto(<Soluble />)} type="image" src="/soluble.png" style={{width:'7rem'}} className="rounded-circle" />
      </div>
      <div>
        <input onClick={() => renderizarProducto(<Aceite />)} type="image" src="/aceite.png" style={{width:'7rem'}} className="rounded-circle" />
      </div>
      </div>
     </div>
     <div className="" style={{width: '100%', height: '70%'}}>
      {productoActual}
     </div>
    </section>
    </>
  )
}

export default Producto