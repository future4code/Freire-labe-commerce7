import React from 'react';
import {Produtos} from './components/Produtos/Produtos'
import meteorito1 from './img/meteorito1.jpg'
import meteorito2 from './img/meteorito2.jpg'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.jpg'

const produtos = [
  {
    id: 1,
    nome: "Meteorito 1",
    preco: 500,
    imagemProduto: meteorito1,
  },
  {
    id: 2,
    nome: "Meteorito 2",
    preco: 500,
    imagemProduto: meteorito2,
  },
  {
    id: 3,
    nome: "Meteorito 3",
    preco: 500,
    imagemProduto: meteorito3,
  },
  {
    id: 4,
    nome: "Meteorito 4",
    preco: 500,
    imagemProduto: meteorito4,
  },
  {
    id: 5,
    nome: "Meteorito 5",
    preco: 500,
    imagemProduto: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    nome: "Meteorito 6",
    preco: 500,
    imagemProduto: "https://picsum.photos/200/200",
  }
]

class App extends React.Component {
  state = {
    
      
  }
  render() {
     return (
      <Produtos
      produtos={produtos}
      
    />
      
  );
  }
 
}

export default App;
