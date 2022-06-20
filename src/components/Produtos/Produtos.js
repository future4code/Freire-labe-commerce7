import React from "react";
import styled from "styled-components";
import {ProdutosCards} from "./ProdutosCards"

const ProdutosContainer = styled.div`
  border: 1px solid black;
  background-color: #011126

`;

const ProdutosHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: white;
  
`

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  
`

export class Produtos extends React.Component {

  state = {
    order: 'crescente'
  }

  updateOrder = (id) =>{
    this.setState({order: id.target.value})
  }

  getListaDeProdutosOrdenada = () => {
    return this.props.produtos
      .filter((produto) => this.props.valorMaxPrice ? produto.preco < this.props.valorMaxPrice : true)
      .filter((produto) => this.props.valorMinPrice ? produto.preco > this.props.valorMinPrice : true)
      .filter((produto) => this.props.valorBuscaProduto ? produto.nome.toLowerCase().includes(this.props.valorBuscaProduto.toLowerCase()) : true)
      .sort((a, b) => this.state.order === 'descrescente' ? b.preco - a.preco : a.preco - b.preco)
  }

  

  render() {
    const listaDeProdutosFiltrada = this.getListaDeProdutosOrdenada()
    
    return <ProdutosContainer>
      <ProdutosHeader>
        <p>Quantidade de produtos: {listaDeProdutosFiltrada.length}</p>
        <label>
          Ordenação:
          <select
            name ='order'
            value={this.state.order}
            onChange={this.updateOrder}
          >
            <option value='crescente'>Crescente</option>
            <option value='descrescente'>Decrescente</option>
          </select>
        </label>
      </ProdutosHeader>
      <ProdutosGrid>
        {listaDeProdutosFiltrada.map((produto)=>{
            return <ProdutosCards
            produto = {produto}
            adicionarAoCarrinho={this.props.adicionarAoCarrinho}
          />
        })}
        
      </ProdutosGrid>
    </ProdutosContainer>
  }
}