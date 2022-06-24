import React from "react";
import styled from 'styled-components';


const ContainerFiltros = styled.div`
border: 1px solid black;
background-color:#0879A6;
padding: 10px;
text-align: center;
color: white;
  
    input{
      background-color:#F2387C;
      color:white;
    }
`

class Filtros extends React.Component {

  render(){
    return (
      <ContainerFiltros>
        <h2>Filtros</h2>
  
        <div>
          <p>Valor mínimo:</p>
          <input
            type="number"
            value={this.valorMinPrice}
            onChange={this.props.filtroMinPrice}
          />
        </div>
  
        <div>
          <p>Valor máximo:</p>
          <input
            type="number"
            value={this.valorMaxPrice}
            onChange={this.props.filtroMaxPrice}
          />
        </div>
  
        <div>
          <p>Busca por nome:</p>
          <input
            placeholder="Produto"
            value={this.valorBuscaProduto}
            onChange={this.props.filtroBuscaProduto}
          />
        </div>
      </ContainerFiltros>
    );
  };
  }
  export default Filtros;