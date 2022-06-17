import React from "react";
import styled from "styled-components";

const ContainerCards = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
`

const InformacaoCard = styled.div`
    display:flex;
    flex-direction:columns;

`

class ProdutosCards extends React.Component {
    render(){
        const produto = this.props.produtos
        return(
            <ContainerCards>
                <img src="produto.imageUrl" alt="meteorito"/>
                <InformacaoCard>
                    <p>{produto.name}</p>
                    <p>R${produto.value},00</p>
                    <button>Adicionar ao carrinho</button>
                </InformacaoCard>

            </ContainerCards>
        )
    }

}

export default ProdutosCards;