import React, {useState,useEffect} from 'react';
import Header from '../shared/Header.jsx';
import Footer from './Footer.jsx';
import Loader from '../shared/Loader.jsx';

export default function BolsaTrabajo() {

    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('https://sheetdb.io/api/v1/wfpt5bg0tpr90')
        .then((response) => response.json())
        .then((response )=> setData(response))
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getData();
        
    }, [])

    useEffect(() => {
        // Simulación de carga de datos (ejemplo)
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);

    const estilos ={
        main:{
          height: '100vh',
          width: '100vw',
          minHeight: '100vh',
          overflow: 'hidden'
        },
        backgroundMain:{
          height: '100%',
          background: 'url("./bdtBg.svg") ',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          overflowY: 'scroll'
        }
      }
  return (
    <>
    {loading ? <Loader />
    :
    
    <section>
    <main style={estilos.main}>
    <div style={estilos.backgroundMain}>
        <Header backg={'bg-light'} isHome={false}/>
        <div className="container pt-5 " style={{height:'70%'}}>
            <div className="row pt-5" >
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 ">
                {data.map((item)=>(
                item.Estado == 'Activo' ? 
                    <div className="mb-3 text-primary-emphasis" style={{fontFamily: 'Cosmos'}}>
                    <h3 className='lh-1 fw-bolder'>{item.Titulo}</h3>
                    <label className='fs-5'><strong>Descripcion: </strong>{item.Descripcion} </label><br/>
                    <label className='fs-5'><strong>Requisitos: </strong>{item.Requisitos} </label><br/>
                    <label className='fs-5'><strong>Ubicacion: </strong> {item.Ubicacion}</label><br/>
                    <label className='fs-5'><strong>Estado civil: </strong>{item.EstadoCivil}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Edad: </strong>{item.Edad}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Sexo: </strong>{item.Sexo}</label><br/>
                    <label className='fs-5'><strong>Escolaridad: </strong> {item.Escolaridad}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Espacios disponibles: </strong>{item.Cantidad}</label><br/>
                    {/* <label className=''><small>{}</small></label> */}
                    {/* <a target='_blank' href={`https://wa.me/526221449886?text=Vacante = ${item.Titulo}`} className='btn btn-success'>Whatsapp</a>&nbsp; */}
                    <a target='_blank' href={`https://api.whatsapp.com/send?phone=${6221449886}&text=Hola%20quiero%20más%20información%20de%20la%20vacante%20${item.Titulo}`} className='btn btn-success'>Whatsapp</a>&nbsp;
                    <button className='btn btn-primary'>Messenger</button>
                    <hr className='lh-1'/>
                   </div> 
                :
                ''
                ))
                }
                </div>
            </div>
        </div>
        </div>
    </main>
    <Footer/>
    </section>
    }
   
    </>
  )
}
