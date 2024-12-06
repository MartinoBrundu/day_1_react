import './App.css';
import ButtonComponent from './Components/ButtonComponent'
import NewImage from './Components/NewImage';

function App() {
  return (
    <div className="App">
      <header >
        <NewImage imageProps="https://placecats.com/neo/300/200" alt="Gattino" />
        <ButtonComponent etichetta= "Cliccami"/>
      </header>
    </div>
  );
}

export default App;
