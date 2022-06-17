import React from 'react';
// import styled from 'styled-component';
import Filtros  from './components/Filtros';



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

      return (
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

          <div>Produto
          </div>

          <div>Carinhos</div>

        </main>

        <footer></footer>
      </div>
    );
  }
}

export default App;
