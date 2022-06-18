import React from "react";
import styled from "styled-components";
import {ProdutosCards} from "./ProdutosCards"

const ProdutosContainer = styled.div`

`;

const ProdutosHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`

const ProdutosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 16px;
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
      .filter((produto) => this.props.valorBuscaProduto ? produto.name.includes(this.props.valorBuscaProduto) : true)
      .sort((a, b) => this.state.order === 'descrescente' ? a.preco - b.preco : b.preco - a.preco)
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
            produto={produto}
            
          />
        })}
        
      </ProdutosGrid>
    </ProdutosContainer>
  }
}