import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting";
import Profile from "./Profile";
import ToDoList from "./ToDoList";
import EmotionMeter from "./EmotionMeter";
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <Greeting/>
      <small>Imagens</small>
      <hr />
      <Profile className="card" style="width: 18rem;"/>
      <small>Renderização de listas</small>
      <hr />
      <ToDoList className="form-check" />
      <small>Renderização condicional</small>
      <hr />
      <EmotionMeter/>
    </div>
  );
}

export default App;
