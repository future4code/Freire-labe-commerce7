import React from 'react';
import { Produtos } from './components/Produtos/Produtos'
import meteorito1 from './img/meteorito1.jpg'
import meteorito2 from './img/meteorito2.jpg'
import meteorito3 from './img/meteorito3.jpg'
import meteorito4 from './img/meteorito4.jpg'
import meteorito5 from './img/meteorito5.jpg'
import meteorito6 from './img/meteorito6.jpg'
import Filtros from './components/Filtros';
import Bascket from './components/Bascket/Bascket';
import styled from 'styled-components';

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`

const produtos = [
  {
    id: 1,
    nome: "Meteorito Murchison",
    preco: 500,
    imagem: meteorito1,
  },
  {
    id: 2,
    nome: "Meteorito Nakhlito",
    preco: 1000,
    imagem: meteorito2,
  },
  {
    id: 3,
    nome: "Meteorito Angrito",
    preco: 300,
    imagem: meteorito3,
  },
  {
    id: 4,
    nome: "Meteorito Condrito Carbonáceo",
    preco: 50,
    imagem: meteorito4,
  },
  {
    id: 5,
    nome: "Meteorito Macro",
    preco: 100,
    imagem: meteorito5,
  },
  {
    id: 6,
    nome: "Meteorito Uruaçu",
    preco: 500,
    imagem: meteorito6,
  }
]

class App extends React.Component {
  state = {
    busca: "",
    minPrice: "",
    maxPrice: "",
    cartItems:[{
      id: 5,
      nome: "Meteorito Macro",
      preco: 100,
      imagem: meteorito5,
    },
    {
      id: 6,
      nome: "Meteorito Uruaçu",
      preco: 500,
      imagem: meteorito6,
    }]
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

  // adicionarAoCarrinho = (produtoId) => {
  //   const produtoCarrinho = this.state.cartItems.find((produto)=>{produtoId === produto.id
  //     if(produtoCarrinho){
  //       const novoProdutoCarrinho = this.state.cartItems.map(produto=>{
  //         if(produtoId === produto.id){
  //           return {...produto, quantidade:produto.quantidade +1}
  //         }return produto
  //       })
  //       this.setState({cartItems: novoProdutoCarrinho})
  //     }else {
  //       const produtoAdicionar = produtos.find(produto => produtoId === produto.id)
  //       const novoProdutoCarrinho = [...this.state.cartItems, {...produtoAdicionar, quantidade: 1}]
  //       this.setState({cartItems: novoProdutoCarrinho})
  //     }

  //   })
    

  // }

  // removerProdutoDoCarrinho = (produtoId) =>{
  //   const novoProdutoCarrinho = this.state.cartItems.map(produto => {
  //     if (produtoId === produto.id){
  //       return {...produto, quantidade:produto.quantidade -1}
  //     }return produto
  //   }).filter(produto =>{ produto.quantidade > 0 })
  //   this.setState({cartItems: novoProdutoCarrinho})
  // }
  


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
          valorMinPrice={this.state.minPrice}
          valorMaxPrice={this.state.maxPrice}
          valorBuscaProduto={this.state.busca}
          // adicionarAoCarrinho={this.adicionarAoCarrinho}
        />

        <Bascket
          cartItems={this.state.cartItems}
          // adicionarAoCarrinho={this.adicionarAoCarrinho}
          // removerProdutoDoCarrinho={this.removerProdutoDoCarrinho}
          
        />




      </ContainerMain>






    )
  }


}

export default App;
