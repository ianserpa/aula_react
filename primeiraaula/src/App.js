import React from 'react';
import logo from './logo.svg';
import './App.css';
import Meucomponente2 from './Meucomponente2';

class App extends React.Component{
  render(){
    const numero = 5;
    var linhas = [];
    for(let i=1;i<=10;i++){
      linhas.push(<Meucomponente2 primeiroNumero={numero} 
        segundoNumero={i} resultado={i*numero} />);
    }
    return <div>{linhas}</div>;
  }
  
}

export default App;
