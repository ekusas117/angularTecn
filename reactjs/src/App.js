import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import { Provider } from "react-redux";
import store from "./store";
// Import Components
import MiComponent from "./component/MiComponent";
import Players from "./component/Players";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Players/>
        <header className="App-header">
          <img width="200" src={logo} className="App-logo" alt="logo" />
          <section className="components">
            <MiComponent />
          </section>
          <ul>
            <li>
              ¿Qué es React? React es una librería de JavaScript declarativa,
              eficiente y flexible para construir interfaces de usuario. Permite
              componer IUs complejas de pequeñas y aisladas piezas de código
              llamadas “componentes”.
            </li>
            <li>
              <b>Componente</b>: El concepto de componente es algo bastante
              sencillo de entender, básicamente se trata de un elemento software
              visual que tiene su propio estado, recibe unas propiedades e
              implementa su propia lógica de renderizado.
            </li>
            <li>
              <b>Component</b>: basically it is a visual element that has its
              own state, receives some properties and implements its own
              rendering logic.
            </li>
          </ul>
        </header>
      </div>
    </Provider>
  );
}

export default App;
