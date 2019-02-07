import React, {Component} from 'react';
import PortfolioItems from './PortfolioItems.js';


class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state= {
            portfolios: props.portfolio,

        }

    }
    deletePortfolio(id){
        this.props.onDelete(id);
    }

    render() {
        let portfolioItems;
            portfolioItems = this.state.portfolios.map(portfolio => {
                return (
                    <PortfolioItems onDelete = {this.deletePortfolio.bind(this)}
                                    key ={portfolio.name} portfolio ={portfolio}/>
                )
            });

        return (
            <div className="Portfolio">
                <h3>My Portfolio</h3>
                {portfolioItems}
            </div>
        );
    }
}
export default Portfolio;