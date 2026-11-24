import {useState} from 'react'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <main>
      <nav className="navegacao">

        <button
          className="abrirMenu"
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>


        <div className={`opcoesMenu ${menuAberto ? 'aberto' : ''}`}>
          <ul>
            <li><a href="#">Menu Principal</a></li>
            <li><a href="#">Nova Tarefa</a></li>
            <li><a href="#">Minhas Tarefas</a></li>
          </ul>
        </div>
      </nav>
      <section className="nomeSite">
        <h1 className="tituloprincipal">Agenda Online</h1>
        <p>O melhor local para gerenciar suas tarefas diárias</p>
      </section>
    </main>
  )
}

export default App