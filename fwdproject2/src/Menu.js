import React, {Component} from 'react';
//import Hint from './Hint';


class Menu extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			level: 1,
			counter: 0,
			randx1: 0,
			randx2: 0,
			randx3: 0,
			randx4: 0,
			randx5: 0,
			randy1: 0, 
			randy2: 0,
			randy3: 0,
			randy4: 0,
			randy5: 0
		};

		this.handleScoreIncrement= this.handleScoreIncrement.bind(this);
		this.handleLevelChange = this.handleLevelChange.bind(this);
		
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
			this.setState({score: this.state.score =0});
		}
	}


	handleScoreIncrement(e){
		if(this.state.counter < 5){
			this.setState({score: this.state.score+10, counter: this.state.counter+1});
		} else {
			this.handleLevelChange();
			this.setState({counter: this.state.counter=0});
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
    	var backgroundDesign={
    		backgroundImage: "url('/coffeeshop.png')",
    		backgroundSize: "cover",
    		backgroundPosition: "center",
    		width: "50vw",
    		height: "50vw",
    		backgroundRepeat: "no-repeat",
    		marginBottom: "5%"
    	}
    	var findItemStyle ={
    		maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*500,
    		top: Math.random()*600
    	}
    	var centerStyle = {
    		justifyContent: "center",
    	}
		return(
			<div>
        		<div className = "groceryListMain">
        			<div className = "header">
          				<h1 style={headerStyle}> Find Me! </h1>
        			</div>
        			<div>
        				<h2 style={groceryListStyle}> Your score: {this.state.score}</h2>
        				<h3 style={groceryListStyle}> Your level: {this.state.level}</h3>
        			</div>
          			<div style={centerStyle}>
	          			<div style={backgroundDesign}>
	          				<img src="coffeecup.png" style={findItemStyle} onClick={this.handleScoreIncrement}/>
	          			</div>
	          		</div>
        		</div>
        	</div>
		);
	}
}
export default Menu;