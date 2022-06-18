import React from 'react';
import { Produtos } from './components/Produtos/Produtos'
import meteorito1 from './img/meteorito1.jpg'
import meteorito2 from './img/meteorito2.jpg'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.jpg'
import meteorito5 from './img/meteorito5.jpg'
import meteorito6 from './img/meteorito6.jpg'
import Filtros from './components/Filtros';
import styled from 'styled-components';

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

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
    preco: 1000,
    imagem: meteorito2,
  },
  {
    id: 3,
    nome: "Meteorito 3",
    preco: 300,
    imagem: meteorito3,
  },
  {
    id: 4,
    nome: "Meteorito 4",
    preco: 50,
    imagem: meteorito4,
  },
  {
    id: 5,
    nome: "Meteorito 5",
    preco: 100,
    imagem: meteorito5,
  },
  {
    id: 6,
    nome: "Meteorito 6",
    preco: 500,
    imagem: meteorito6,
  }
]

class App extends React.Component {
  state = {
    busca: "",
    minPrice: "",
    maxPrice: "",
  }


  uptadeMinPrice = (event) => {

    this.setState({ minPrice: event.target.value })
  }

  uptadeMaxPrice = (event) => {

    this.setState({ maxPrice: event.target.value })
  }

  uptadeBusca = (event) => {

    this.setState({ busca: event.target.value })
  }


  render() {

    return (
      <ContainerMain>




        <Filtros
          valorMinPrice={this.state.minPrice}
          valorMaxPrice={this.state.maxPrice}
          valorBuscaProduto={this.state.busca}
          filtroMinPrice={this.uptadeMinPrice}
          filtroMaxPrice={this.uptadeMaxPrice}
          filtroBuscaProduto={this.uptadeBusca}
        />

        <Produtos
          produtos={produtos}
        />

        <div>Carinhos</div>




      </ContainerMain>






    )
  }


}

export default App;
