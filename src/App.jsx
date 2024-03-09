import Header from './components/shared/Header.jsx'
import Main from './components/pages/Main.jsx'
import Certificaciones from './components/pages/Certificaciones.jsx'
import Divider from './components/shared/Divider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {



  const estilos ={
    main:{
      position: 'absolute',
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
      <Certificaciones/>
    </div>
  </main>

  </>
  )
}

export default App
