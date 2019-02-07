import React, { Component } from 'react';
import uuid from 'uuid';
import Portfolio from './components/Portfolio';
import AddPortfolio from './components/AddPortfolio'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state= {
      portfolios: [],
      stocks: [],
    }
  }
  componentWillMount(){
    this.setState({portfolios:[
        {
          id:uuid.v4(),
          name: ' BBBB',
        },
        {
          id:uuid.v4(),
          name: 'AAAA',
        }
      ]});
  }
  handleAddPortfolio(portfolio){
    let portfolios = this.state.portfolios;
    portfolios.push(portfolio);
    this.setState({portfolios:portfolios})
  }
  handleDeletePortfolio(id){
    let portfolios = this.state.portfolios;
    let index = portfolios.findIndex(x => x.id === id);
    portfolios.splice(index,1);
    this.setState({portfolios:portfolios});
  }
  render() {
    console.log(this.state.portfolios);
    return (
      <div className="App">
        <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)}/>
        <Portfolio portfolio={this.state.portfolios} onDelete={this.handleDeletePortfolio.bind(this)}/>
      </div>
    );
  }
}

export default App;
