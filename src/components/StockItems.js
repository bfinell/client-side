import React,{Component} from "react";



class StockItems extends Component {
    constructor(props){
        super(props);
        this.state = {
            stocks: [
            ]
        }
    }

    render() {
        return (
            <tr class="StockItems">
                <td>Symb:{this.state.stocks.symbol}</td>
                <td>{this.state.stocks.currency}</td>
                <td>price{this.state.price}</td>
                <td>{this.price}</td>
                <td>{this.state.stocks.totValue}</td>
            </tr>
        );
    }
}

export default StockItems;