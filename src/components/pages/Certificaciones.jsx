import { PiCertificateFill } from "react-icons/pi";
import Marquee from "react-fast-marquee";
import Haccp from '/haccp.png';
import Msc from '/msc.png';
import Senasica from '/senasica.png';

//77bfbe
function Certificaciones() {
  return (
    <div className=" d-flex justify-content-center" style={{backgroundColor: '#77bfbe'}} >
    <Marquee speed={100} autoFill pauseOnHover gradient gradientColor="#77bfbe" style={{width: '50%', height: '40vh', overflowY: 'hidden'}}> 
      <div className="" style={{width: '70%', height: '100%'}}>
        <img style={{width: '100%'}} src={Haccp}></img>
      </div>
      <div className="" style={{width: '80%', height: '100%'}}>
       <img className="" style={{width: '100%'}} src={Senasica}></img>
      </div>
     <div className="" style={{width: '40%', height: '100%'}}>
      <img style={{width: '100%'}} src={Msc}></img>
     </div>
     
    </Marquee>
    </div>
  )
}

export default Certificaciones