import React, {Component} from 'react';
import Hint from './Hint';

class Menu extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			level: 1,
		};

		this.handleScoreIncrement= this.handleScoreIncrement.bind(this);
		this.handleLevelChange = this.handleLevelChange.bind(this);
		this.handleScoreDecrement = this.handleScoreDecrement.bind(this);
	}

	handleLevelChange(e){
		if(this.state.level == 1){
			this.setState({level: this.state.level +1});
		} else if(this.state.level == 2){
			this.setState({level: this.state.level +1});
		} else if(this.state.level == 3){
			this.setState({level: this.state.level +1});
		} else if(this.state.level == 4){
			this.setState({level: this.state.level +1});
		} else{
			this.setState({level: this.state.level = 1});
		}
	}

	handleScoreIncrement(e){
		var counter = 0;
		if(counter < 5){
			this.setState({score: this.state.score+10});
		} else {
			this.handleLevelChange();
		}
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
        				<h2 style={groceryListStyle}> Number of score: {this.state.score}</h2>
        			</div>
          			<button style={buttonStyle} onClick={this.handleScoreIncrement}> Submit </button>
        		</div>
        	</div>
		);
	}
}
export default Menu;