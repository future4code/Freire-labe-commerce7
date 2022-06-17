import React from "react";
import styled from 'styled-components';


const ContainerFiltros = styled.div`
border: 1px solid black;
width: 35vw;

`

class Filtros extends React.Component {

render(){
  return (
    <ContainerFiltros>
      <h3>Filtros</h3>

      <div>
        <p>Valor mínimo:</p>
        <input
          type="number"
          value={this.valorMinPrice}
          onChange={this.props.uptadeMinPrice}
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