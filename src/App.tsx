import React, { useState } from 'react';
import './App.css';

// JSX: Sintaxe de xml dentro do JavaScript

import Header from './Header'

function App() {
  const [counter, setCounter] = useState(0);

  function handleButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title= {`Contador: ${counter}`} />

      <h1>Conteúdo da aplicação</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}

export default App;
