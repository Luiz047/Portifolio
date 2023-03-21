import React from 'react';
import './App.css';
import Header from './Componetes/Header';
import Footer from './Componetes/Footer';
import BANNER from './Componetes/Banner';
import Sobre from './Componetes/Sobre';
import Habilidades from './Componetes/Habilidades';
import Projetos from './Componetes/Projetos';

function App() {
  return (
    <div className="App">
     <Header/>
     <BANNER/>
     <Sobre/>
     <Habilidades/>
     <Projetos/>
     <Footer/>
    </div>
  );
}

export default App;

