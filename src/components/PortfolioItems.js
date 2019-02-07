import React, { Component } from 'react';
import Stocks from "./Stocks";

class PortfolioItems extends Component{
    constructor(){
        super()
        this.state={
            stocks:[],
        }

    }
    handleAddStocks(stock){
        let stocks = this.state.stocks;
        stocks.push(stock);
        this.setState({stocks:stocks})
    }

    deleteStocks(id){
        this.props.onDelete(id);
    }
    deletePortfolioItems(id){
        this.props.onDelete(id);
    }
    render() {


        console.log("hello items");
        return (
            <li className="Portfolio">
                <strong>{this.props.portfolio.name}</strong><a href={'#'} onClick={this.deletePortfolioItems.bind(this, this.props.portfolio.id)}>x</a>
                <Stocks addStocks={this.handleAddStocks.bind(this)}/>   </li>
        );
    }
        }

        export default PortfolioItems;