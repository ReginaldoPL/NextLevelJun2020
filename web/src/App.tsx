import React from 'react';

import './App.css';
//JSX Sintace de XML (html) dentro do Javascript

import Header from './Header'

function App() {
  const counter = 1;
  return (
    <div>
      <Header title="Hello World"/>
      <h1>Conteúdo da Aplicação</h1>
    </div>     

  );
}

export default App;
