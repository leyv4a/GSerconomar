import Header from './components/shared/Header.jsx'
import Main from './components/pages/Main.jsx'
import Certificaciones from './components/pages/Certificaciones.jsx'
import Producto from './components/pages/Producto.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
import Mexicana from './components/pages/Mexicana.jsx';
import Nosotros from './components/pages/Nosotros.jsx';
import Procesos from './components/pages/Procesos.jsx';
import Filosofia from './components/pages/Filosofia.jsx';
import Mapa from './components/pages/Mapa.jsx';

function App() {


  const estilos ={
    main:{
      height: '100vh',
      width: '100vw',
      minHeight: '100vh'
    },
    backgroundMain:{
      height: '100%',
      background: 'url("./mainBackground.svg") ',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }
  return (
  <>
  <I18nextProvider i18n={i18n}>
    <main style={estilos.main} >
      <div style={estilos.backgroundMain}>
        <Header/>
        <Main/>
      </div>
    </main>
        <Certificaciones/>
        <Producto/>
        <Nosotros/>
        <Procesos/>
        <Filosofia/>
        <Mexicana/> 
        <Mapa/>
  </I18nextProvider>
  </>
  )
}

export default App
