import React, {Component} from 'react';
import StockItems from './StockItems'
import uuid from 'uuid';


const url = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
// This file was copied from Stackoverflow
const apikey = '&apikey=KV4MHKHP1XKOM8MJ';

class Stocks extends Component {

        constructor(props){
            super(props);
            this.state = ({
                stocks :[{
                    id:uuid.v4(),
                    symbol:'MSFT',
                    price: 0,
                    totValue: 0,
                    currency: '$',
                    quantity: 0
                }

                ]
        });
            this.getStocks = this.getStocks.bind(this);
        }
        onDelete(id){
            this.props.onDelete(id);


        }
        getStocks() {
            var symbol = this.refs.symbol.value;
            var finalUrl = url +symbol+ apikey;
            var price;

            console.log(finalUrl);
            fetch(finalUrl)
                .then(function (response) {
                    console.log(response);
                    return response.json();
                })
                .then( (data) => {
                        if ('Error Message' in data) {
                            alert('Stock not found')
                            return
                        }
                            price = data["Global Quote"]["05. price"];
                            console.log(price)
                            this.setState({newStocks:{
                                    id:uuid.v4(),
                                    symbol:this.refs.symbol.value,
                                    quantity:this.refs.quantity.value,
                                    price:price,
                                    currency: '$',
                                    totValue:this.price*this.quantity,
                                }},
                                function() {
                                    this.props.addStocks(this.state.newStocks);

                                }
                            )

                    }
                )
            this.updateStocks(symbol);
        }
        updateStocks = (symbol) => {
            var quantity = this.refs.quantity.value;
            let stocks =this.state.stocks;
            let exists = false;
            stocks.forEach((stock,index)=> {
                if (stock.symbol === symbol){
                    exists = true;
                //    stocks[index].price = price
                    stocks[index].quantity += quantity
                    stocks[index].totValue = stocks[index].quantity*stocks.price
                    this.setState(() => ({
                        stocks: stocks
                    }))
                }

            })
        if (!exists) {
			this.setState(prevState => ({
				stocks: [prevState.stocks, {
					symbol: symbol,
					quantity: quantity,
					totValue: quantity * stocks.price
				}]
			}))
		}
            //uppdate value
		let totValue = this.returnNewPortfolio(this.state.stocks)
		this.setState({
			totValue: totValue
		})
	}

	returnNewPortfolio = (stocksArr) => {
		let totValue = 0
		stocksArr.forEach(stock => {
			totValue += stock.totValue
		})

		return totValue
	}


    render(){

        return (
                <table className = "Stocks">

                    <tr>
                        <th>Symbol</th>
                        <input type="text" ref="symbol"/>
                        <th>Quantity</th>
                        <input type={'text'} ref={'quantity'}/>
                        <th>Price</th>
                        <th>Currency</th>
                        <th>Total_Value</th>
                        <input type="submit" value="add" onClick={this.getStocks}/>
                    </tr>
                    {this.state.stocks.map(stocks=>(

                    <StockItems stocks = {stocks}/>

                        ))
                    }

                    <br/>

                </table>
        );
    }
}

    export default Stocks;