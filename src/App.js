import logo from './logo.svg';
import './App.css';
import Search from './components/search'
import Digimons from './components/digimons'
import axios from 'axios';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <header className="App-header">
         <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;
