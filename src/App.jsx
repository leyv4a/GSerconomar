import Header from './components/shared/Header.jsx'
import Main from './components/pages/Main.jsx'
import Certificaciones from './components/pages/Certificaciones.jsx'
import Divider from './components/shared/Divider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';





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
  <main style={estilos.main} >
    <div style={estilos.backgroundMain}>
      <Header/>
      <Main/>
    </div>
  </main>
      <Certificaciones/>

  </>
  )
}

export default App
