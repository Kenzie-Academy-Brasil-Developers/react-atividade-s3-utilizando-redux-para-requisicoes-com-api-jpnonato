import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import Digimons from './components/digimons'
import axios from 'axios';

function App() {

  // axios.get('https://digimon-api.vercel.app/api/digimon').then((response) => console.log(response.data))

  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;
