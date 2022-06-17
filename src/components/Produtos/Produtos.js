import React from "react";
import styled from "styled-components";
import {ProdutosCards} from "./ProdutosCards"

const ContainerProdutos = styled.div`

`
const HeaderP = styled.div``

const ProdutosGride = styled.div``

class Produtos extends React.Component {
    render(){
        return(
            <ContainerProdutos>
                <HeaderP>
                    <p>Quantidade de Produto</p>
                    <label>
                        Ordenação:
                        <select>Crescente</select>
                        <select>Decrescente</select>
                    </label>                
                </HeaderP>
                <ProdutosGride>
                    <ProdutosCards/>
                </ProdutosGride>
            </ContainerProdutos>
                
            
        )
    }
}
export default Produtos