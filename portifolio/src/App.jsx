import Cabeçalho from "./components/Cabeçalho/Cabeçalho";
import Sobre from './components/Sobre/Sobre';
import Skills from "./components/Skills/Skills";
import Projetos from "./components/Projetos/Projetos";
import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";

function App() {
  return(
    <div className="container">
      <Cabeçalho/>
      <Sobre/>
      <Skills/>
      <Projetos/>
      <Contatos/>
      <Footer/>
    </div>
  )
}

export default App
