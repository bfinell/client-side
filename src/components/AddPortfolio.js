import React, { Component } from 'react';
import uuid from 'uuid';

class AddPortfolio extends Component{
    constructor(){
        super();
        this.state={
            newPortfolio:{},
            stock:[{}]
        }
    }

    handleSubmit(e){
        if (this.refs.name.value==''){
            alert('Name is required')
        }
        else{
            this.setState({newPortfolio:{
                id:uuid.v4(),
                name:this.refs.name.value
                }},function (){
                this.props.addPortfolio(this.state.newPortfolio);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3> Add Portfolio</h3>
                <form onSubmit = {this.handleSubmit.bind(this)}>
                    <div>
                        <label> Name </label>
                        <input type="text" ref="name"/>
                    </div>

                    <br/>
                    <input type="submit" value="Add Portfolio"/>
                    <br/>
                </form>
            </div>
        );
    }
}
export default AddPortfolio;
