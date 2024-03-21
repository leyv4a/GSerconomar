import React, {useState,useEffect} from 'react';
import Header from '../shared/Header.jsx';
import Footer from './Footer.jsx';
import Loader from '../shared/Loader.jsx';
import axios from 'axios';

export default function BolsaTrabajo() {

    const [loading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = () => {
        axios.get('https://script.google.com/macros/s/AKfycbwg5thY3nzYMYARcYYwMkqOSn1JLDGW9iYxql8x00EN_mptL9crBfg3hN8do7cGE6G14Q/exec?path=BDT&action=read')
        .then(response => {
          const formattedData = response.data.data.map(item => ({
              ...item,
              Estado: item.Estado.toLowerCase()
          }));
          setData(formattedData);
      })
        .catch(error => console.log(error));
       
    }

  
    useEffect(() => {
        getData();
        
    }, [])

    useEffect(() => {
        // Simulación de carga de datos (ejemplo)
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      }, []);

    const estilos ={
        main:{
          width: '100vw',
          minHeight: '100vh',
        },
        backgroundMain:{
          height: '100%',
          background: 'url("./bdtBg.svg") ',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
        loader:{
          position: 'absolute',
          top: '500000%'

        }
      }
      
  return (
    <>
       {loading ? <Loader />
    :
    ""
    }
    <Header  backg={'bg-light'} isHome={false}/>
    <section style={loading? estilos.loader : {}} >
    <main style={estilos.main}>
    <div style={estilos.backgroundMain}>
        <div className="container pt-5 ">
            <div className="row pt-5" >
                <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 ">
                {data.map((item, index)=>(
                item.Estado == 'activo' ? 
                    <div key={index} className="mb-3 text-primary-emphasis" style={{fontFamily: 'Cosmos'}}>
                    <h3 className='lh-1 fw-bolder'>{item.Titulo}</h3>
                    <label className='fs-5'><strong>Descripcion: </strong>{item.Descripcion} </label><br/>
                    <label className='fs-5'><strong>Requisitos: </strong>{item.Requisitos} </label><br/>
                    <label className='fs-5'><strong>Ubicacion: </strong> {item.Ubicacion}</label><br/>
                    <label className='fs-5'><strong>Estado civil: </strong>{item.EstadoCivil}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Edad: </strong>{item.Edad}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Sexo: </strong>{item.Sexo}</label><br/>
                    <label className='fs-5'><strong>Escolaridad: </strong> {item.Escolaridad}</label>&nbsp;&nbsp;&nbsp;
                    <label className='fs-5'><strong>Espacios disponibles: </strong>{item.Cantidad}</label><br/>
                    <a target='_blank' href={`https://api.whatsapp.com/send?phone=${6221657392}&text=Hola%20quiero%20más%20información%20de%20la%20vacante%20${item.Titulo}`} className='btn btn-success'>Whatsapp</a>&nbsp;
                    <button disabled target='_blank' href='fb://messaging/serconomarmx' className='btn btn-primary'>Messenger</button>
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
   
   
    </>
  )
}

