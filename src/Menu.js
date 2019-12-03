import React, {Component} from 'react';
import Hint from './Hint';

class NewItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			names: [],
			index: 0,
		};

		this.handleScore= this.handleScore.bind(this);
		this.handleLevelChange = this.handleLevelChange.bind(this);
	}

	handleLevelChange(e){

	}

	handleScore(e){
		//Get the selection of where the user clicked
		//if statement
			//increment score by 10
		//else if the user doesn't select on where the items are
			//decrement the score by 1 on level 1, 2 on level 2, and so on
		e.preventDefault();
	}

	render(){
		var headerStyle = {
			fontFamily: "sans-serif",
			align: "center",
			textAlign: "center",
			fontSize: 48,
			color: "#00003f"
		}
		var groceryListStyle = {
			align: "center",
			textAlign: "center",
			fontSize: 22,
			color: "#00003f"
		}
		var formStyle = {
			align: "center",
			textAlign: "center",
			marginBottom: "3%"
		}
		var buttonStyle = {
    		align: "right",
      		textAlign: "right",
      		color: "#00003f",
      		backgroundColor: "#e0ffff",
      		borderRadius: "8px",
      		fontSize: 14
    	}
		return(
			<div>
        		<div className = "groceryListMain">
        			<div className = "header">
          				<h1 style={headerStyle}> Grocery List </h1>
        			</div>
        			<div>
        				<h2 style={groceryListStyle}> Number of items: {this.state.index}</h2>
        			</div>
        			<form style={formStyle}> 
          				<label style={groceryListStyle}> Grocery Item:
            				<input type="text" ref={input => this.textInput = input}></input>
          				</label>
          				<button style={buttonStyle} onClick={this.handleChange}> Submit </button>
        			</form>
        				<GroceryList delete={this.handleDelete} foods={this.state.names} />
        		</div>
        	</div>
		);
	}
}
export default NewItem;