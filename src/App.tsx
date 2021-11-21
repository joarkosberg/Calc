import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Calculator from './modules/calculator/calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator/>
      </header>
    </div>
  );
}

export default App;
