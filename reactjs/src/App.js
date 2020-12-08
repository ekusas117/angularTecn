import logo from "./assets/css/logo.svg";
import "./assets/css/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width="200" src={logo} className="App-logo" alt="logo" />
        <p>React JS</p>
        <ul>
          <li>
            <b>Componente</b>: El concepto de componente es algo bastante sencillo de
            entender, básicamente se trata de un elemento software visual que
            tiene su propio estado, recibe unas propiedades e implementa su
            propia lógica de renderizado.
          </li>
          <li>
          <b>Component</b>: basically it is a visual element that has its own state,
            receives some properties and implements its own rendering logic.
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
