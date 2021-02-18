import "./App.css";

import PokemonViewer from "../PokemonViewer";
import DadJoke from "../DadJoke";
import BasicCounter from "../BasicCounter";
import SheepCounter from "../SheepCounter";
import ControlledInput from "../ControlledInput";

function App() {
  return (
    <div className="App">
      <h2>Task 1 - Counter</h2>
      <BasicCounter />
      <SheepCounter />
      <h2>Task 2 - Local Storage</h2>
      <ControlledInput />
      <h2>Task 3 - Fetch</h2>
      <PokemonViewer />
      <DadJoke />
    </div>
  );
}

export default App;
