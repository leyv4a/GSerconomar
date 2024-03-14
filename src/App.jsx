
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';
import Privacidad from './components/pages/Aviso.jsx'
import Home from './components/pages/Home.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import NotFound from './components/pages/NotFound.jsx';
import Mantenimiento from './components/pages/Mantenimiento.jsx';


function App() {

  return (
  <>
  <I18nextProvider i18n={i18n}>
  <Router>
    <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/priv" element={<Privacidad/>} />
          <Route path="/bdt" element={<Mantenimiento/>} />
          <Route path="*" element={<Navigate to="/nfp" replace />} />
        <Route path="/nfp" element={<NotFound />} />
          </Routes> 
      </Router>
  </I18nextProvider>
  </>
  )
}

export default App
