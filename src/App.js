// import logo from './logo.svg';
import "./App.css";
import Rscreen from "./components/rscreen/Rscreen";
import Screen from "./components/screen/Screen";

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <Screen />
        <Rscreen />
      </div>
    </div>
  );
}

export default App;
