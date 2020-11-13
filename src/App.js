import React from 'react';
import './App.css';
import Forecast from "./Components/Forecast/Forecast";
import Logo from './Components/Logo/Logo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo />
       <h1>React Weather App</h1>
     </header>
      <main>
        <Forecast />
      </main>
      <footer>
        hi
      </footer>
    </div>
  );
}

export default App;
