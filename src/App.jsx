import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import Sobre from './pages/Sobre'
import ComoFunciona from './pages/ComoFunciona'
import Orcamentos from './pages/Orcamentos'
import Simulacao from './pages/Simulacao'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/orcamentos" element={<Orcamentos />} />
            <Route path="/simulacao" element={<Simulacao />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

