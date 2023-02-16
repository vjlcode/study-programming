import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import ComoComecar from "./components/pages/ComoComecar"
import ConceitoBasico from "./components/pages/ConceitoBasico"
import EstruturaCondicional from "./components/pages/EstruturaCondicional"
import EstruturaRepeticao from "./components/pages/EstruturaRepeticao"
import EstruturaDados from "./components/pages/EstruturaDados"
import SubRotinas from "./components/pages/SubRotinas"
import Portugol from "./components/pages/Portugol"

import NavBar from "./components/layout/NavBar"
import Container from "./components/layout/Container"

function App() {
  return (
    <Router>
      <NavBar>
        <div>
          <Link to="/">Como começar</Link>
          <Link to="/conceito_basico">Conceitos Básicos</Link>
          <Link to="/estrutura_condicional">Estrutura Condicional</Link>
          <Link to="/estrutura_repeticao">Estrutura de Repetição</Link>
          <Link to="/estrutura_dados">Estrutura de Dados</Link>
          <Link to="/subrotinas">Sub-rotinas e Programação</Link>
          <Link to="/portugol">Contato</Link>
        </div>
      </NavBar>

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<ComoComecar />} />
          <Route exact path="/conceito_basico" element={<ConceitoBasico />} />
          <Route
            exact
            path="/estrutura_condicional"
            element={<EstruturaCondicional />}
          />
          <Route
            exact
            path="/estrutura_repeticao"
            element={<EstruturaRepeticao />}
          />
          <Route exact path="/estrutura_dados" element={<EstruturaDados />} />
          <Route exact path="/subrotinas" element={<SubRotinas />} />
          <Route exact path="/portugol" element={<Portugol />} />
        </Routes>
      </Container>
      <footer>
        <span>&copy;</span> Desenvolvidor por Vilson Jesuino
      </footer>
    </Router>
  )
}

export default App
