import React from "react";
import styled from "styled-components";

const ContainerCards = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

const Informacao = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px 

`
const BotaoCarrinho =styled.button`
    width: 60%;
    margin: 10px 55px
    
`


export class ProdutosCards extends React.Component {
    render(){
        const produto = this.props.produto
        return <ContainerCards>
          <img src={produto.imagem} alt="meteorito"/>
          <Informacao>
            <p>{produto.nome}</p>
            <p>R${produto.preco},00</p>
          </Informacao>
          <BotaoCarrinho onClick={this.props.adicionarAoCarrinho}>
              Adicionar ao carrinho
            </BotaoCarrinho>
        </ContainerCards>
    }
}