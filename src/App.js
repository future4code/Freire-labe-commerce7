import React from 'react';

import {Produtos} from './components/Produtos/Produtos'
import meteorito1 from './img/meteorito1.jpg'
import meteorito2 from './img/meteorito2.jpg'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.jpg'
import Filtros  from './components/Filtros';


const produtos = [
  {
    id: 1,
    nome: "Meteorito 1",
    preco: 500,
    imagem: meteorito1,
  },
  {
    id: 2,
    nome: "Meteorito 2",
    preco: 500,
    imagem: meteorito2,
  },
  {
    id: 3,
    nome: "Meteorito 3",
    preco: 500,
    imagem: meteorito3,
  },
  {
    id: 4,
    nome: "Meteorito 4",
    preco: 500,
    imagem: meteorito4,
  },
  {
    id: 5,
    nome: "Meteorito 5",
    preco: 500,
    imagem: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    nome: "Meteorito 6",
    preco: 500,
    imagem: "https://picsum.photos/200/200",
  }
]

class App extends React.Component {
  state = {
    busca: "",
    minPrice: "",
    maxPrice: "", 
 }  


uptadeMinPrice = (event) => {

    this.setState({minPrice: event.target.value})
}

uptadeMaxPrice = (event) => {

    this.setState({maxPrice: event.target.value})
}

uptadeBusca = (event) => {

    this.setState({busca: event.target.value})
}


  render() {
        
     return 
      <div>
        <header></header>

        <main>

          <Filtros
          valorMinPrice={this.state.minPrice}
          valorMaxPrice={this.state.maxPrice}
          valorBuscaProduto={this.state.busca}
          filtroMinPrice={this.uptadeMinPrice}
          filtroMaxPrice={this.uptadeMaxPrice}
          filtroBuscaProduto={this.uptadeBusca}          
          />

          <Produtos
    produtos = {produtos}
          />

          <div>Carinhos</div>

        </main>

        <footer></footer>
      </div>
    

      
    />
      
  );
  }
 

}

export default App;
