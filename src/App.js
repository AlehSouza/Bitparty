
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left">
        <h1>bitparty</h1>
        <div className="header">
          <p>festival de <b>rock 2021</b></p>
        </div>
        <div className="description">
          <p>
            Você não vai perder essa né? Fique por dentro de todas as novidades, sobre artistas
            e cantores que estarão presentes no BitParty Rock 2021 !
          <br />
          E receba pequenos teasers dos eventos mais IRADOS! que vão ocorrer no local,
          vem com a gente, é BitParty, é rolê garantido! ;)
          </p>
        </div>
        <div className="input_send">
          <input type="email" required placeholder="Example@gmail.com" />
          <button>
            <span class="material-icons">
              arrow_forward_ios
            </span>
          </button>
        </div>
        <p className="footer">
          <b>
            Todos os direitos reservados a © BItParty - Saiba mais <a href="">aqui</a>
          </b>
        </p>
      </div>

      <div className="right">
      </div>

    </div>
  );
}

export default App;
