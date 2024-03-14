
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
import Privacidad from './components/pages/Aviso.jsx'
import Home from './components/pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
  <>
  <I18nextProvider i18n={i18n}>
  <Router>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/priv" element={<Privacidad/>} />
          <Route path="/bdt" element={<Privacidad/>} />
          </Routes> 
          {/* Aquí puedes agregar más rutas según sea necesario */}
      </Router>
  </I18nextProvider>
  </>
  )
}

export default App
