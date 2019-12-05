import React, {Component} from 'react';
import Hint from './Hint';


class Menu extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			level: 1,
			counter: 0,
			imageFound: false
		};

		this.handleScoreIncrement= this.handleScoreIncrement.bind(this);
		this.handleLevelChange = this.handleLevelChange.bind(this);
		this.handleHide = this.handleHide.bind(this);
		
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

	handleHide(e){
		
	}


	handleScoreIncrement(e){
		if(this.state.counter < 5){
			this.setState({score: this.state.score+10, counter: this.state.counter+1});
		} else {
			this.handleLevelChange();
			this.setState({counter: this.state.counter=0});
		}
		e.preventDefault();
	}

	
//Use component did mount or onMount
//play again 
//generate all random numbers and then call again if doing a play again
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
    		justifyContent: "center",
    		width: "50vw",
    		height: "50vw",
    		backgroundRepeat: "no-repeat",
    		margin: "0 auto"
    	}
    	var findItemStyle1 ={
    		maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*40 + "vw",
    		top: Math.random()*40 + "vw"
    	}
    	var findItemStyle2 ={
    		maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*40 + "vw",
    		top: Math.random()*40 + "vw"
    	}
    	var findItemStyle3 = {
    		maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*40 + "vw",
    		top: Math.random()*40 + "vw"
    	}
    	var findItemStyle4 = {
    		maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*40 + "vw",
    		top: Math.random()*40 + "vw"
    	}
    	var findItemStyle5 = {
			maxWidth: "5%",
    		position: "relative",
    		left: Math.random()*40 + "vw",
    		top: Math.random()*40 + "vw"
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
	          				<img src="coffeecup.png" style={findItemStyle1} onClick={this.handleScoreIncrement}/>
	          				<img src="book.png" style={findItemStyle2} onClick={this.handleScoreIncrement}/>
	          				<img src="bean.png" style={findItemStyle3} onClick={this.handleScoreIncrement}/>
	          				<img src="frenchpress.png" style={findItemStyle4} onClick={this.handleScoreIncrement}/>
	          				<img src="eclaire.png" style={findItemStyle5} onClick={this.handleScoreIncrement}/>
	          			</div>
	          		</div>
	          		<Hint />
        		</div>
        	</div>
		);
	}
}
export default Menu;