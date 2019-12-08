import React, {Component} from 'react';
import Hint from './Hint';
import Item from './Item'


class Menu extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			level: 1,
			counter: 0,
			imageFound1: false,
			imageFound2: false,
			imageFound3: false,
			imageFound4: false,
			imageFound5: false,
			itemsLevels: ["coffeecup.png", "bean.png", "book.png", "eclaire.png", "frenchpress.png"],
			backgroundImageSet: "/coffeeshop.png",
			xpos1: 0,
			xpos2: 0,
			xpos3: 0,
			xpos4: 0,
			xpos5: 0,
			ypos1: 0, 
			ypos2: 0,
			ypos3: 0,
			ypos4: 0, 
			ypos5: 0
		};

		this.handleScoreIncrement= this.handleScoreIncrement.bind(this);
		this.handleLevelChange = this.handleLevelChange.bind(this);
	}

	handleLevelChange(e){
		if(this.state.level == 1){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/shipwreckAsset.png"});
			this.setState({imageFound1: this.state.imageFound1=false});
			this.setState({imageFound2: this.state.imageFound2=false});
			this.setState({imageFound3: this.state.imageFound3=false});
			this.setState({imageFound4: this.state.imageFound4=false});
			this.setState({imageFound5: this.state.imageFound5=false});
			this.setState({itemsLevels: this.state.itemsLevels = ["treasure.png", "anchor.png", "goblet.png", "rum.png", "wheel.png"]});
		} else if(this.state.level == 2){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/kidsplayroom.png"});
		} else if(this.state.level == 3){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/Headshot.png"});
		} else if(this.state.level == 4){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/coffeeshop.png"});
		} else{
			this.setState({level: this.state.level = 1});
			this.setState({score: this.state.score =0});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/coffeeshop.png"});
		}
	}


	handleScoreIncrement(e){
		if(this.state.counter < 5){
			this.setState({score: this.state.score+10, counter: this.state.counter+1});
			if(this.state.counter == 0){
				this.setState({imageFound1: this.state.imageFound1 =true});
			} else if(this.state.counter == 1){
				this.setState({imageFound2: this.state.imageFound2 =true});
			} else if(this.state.counter == 2){
				this.setState({imageFound3: this.state.imageFound3 =true});
			} else if(this.state.counter == 3){
				this.setState({imageFound4: this.state.imageFound4 =true});
			} else{
				this.setState({imageFound5: this.state.imageFound5 =true});
				this.setState({counter: this.state.counter=0});
				this.handleLevelChange();
			}
		}
		e.preventDefault();
	}

	componentDidMount(){
		this.setState({xpos1: this.state.xpos1 = Math.random()*40});
		this.setState({xpos2: this.state.xpos2 = Math.random()*40});
		this.setState({xpos3: this.state.xpos3 = Math.random()*40});
		this.setState({xpos4: this.state.xpos4 = Math.random()*40});
		this.setState({xpos5: this.state.xpos5 = Math.random()*40});
		this.setState({ypos1: this.state.ypos1 = Math.random()*40});
		this.setState({ypos2: this.state.ypos2 = Math.random()*40});
		this.setState({ypos3: this.state.ypos3 = Math.random()*40});
		this.setState({ypos4: this.state.ypos4 = Math.random()*40});
		this.setState({ypos5: this.state.ypos5 = Math.random()*40});
	}

	
//Use component did mount or onMount
//play again 
//generate all random numbers and then call again if doing a play again
	render(){
		var headerStyle = {
			fontFamily: "sans-serif",
			align: "center",
			textAlign: "center",
			fontSize: 28,
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
    		backgroundImage: "url(" + this.state.backgroundImageSet + ")",
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
    		left: this.state.xpos1.toString()+ "vw",
    		top: this.state.ypos1.toString() + "vw",
    	}
    	var findItemStyle2 ={
    		maxWidth: "5%",
    		position: "relative",
    		left: this.state.xpos2.toString() + "vw",
    		top: this.state.ypos2.toString() + "vw"
    	}
    	var findItemStyle3 = {
    		maxWidth: "5%",
    		position: "relative",
    		left: this.state.xpos3.toString() + "vw",
    		top: this.state.ypos3.toString() + "vw"
    	}
    	var findItemStyle4 = {
    		maxWidth: "5%",
    		position: "relative",
    		left: this.state.xpos4.toString() + "vw",
    		top: this.state.ypos4.toString() + "vw"
    	}
    	var findItemStyle5 = {
			maxWidth: "5%",
    		position: "relative",
    		left: this.state.xpos5.toString() + "vw",
    		top: this.state.ypos5.toString() + "vw"
    	}
    	var centerStyle = {
    		justifyContent: "center",
    	}
    	const imageHide1 = this.state.imageFound1 ? {display: "none"} : {};
    	const imageHide2 = this.state.imageFound2 ? {display: "none"} : {};
    	const imageHide3 = this.state.imageFound3 ? {display: "none"} : {};
    	const imageHide4 = this.state.imageFound4 ? {display: "none"} : {};
    	const imageHide5 = this.state.imageFound5 ? {display: "none"} : {};

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
	          			<div style= {backgroundDesign}>
	          				<div style ={imageHide1}>
		          				<img src={this.state.itemsLevels[0]} style={findItemStyle1} onClick={this.handleScoreIncrement}/>
		          			</div>
		          			<div style={imageHide2}>
		          				<img src={this.state.itemsLevels[1]} style={findItemStyle2} onClick={this.handleScoreIncrement}/>
		          			</div>
		          			<div style={imageHide3}>
		          				<img src={this.state.itemsLevels[2]} style={findItemStyle3} onClick={this.handleScoreIncrement}/>
		          			</div>
		          			<div style={imageHide4}>
		          				<img src={this.state.itemsLevels[3]} style={findItemStyle4} onClick={this.handleScoreIncrement}/>
		          			</div>
		          			<div style={imageHide5}>
		          				<img src={this.state.itemsLevels[4]} style={findItemStyle5} onClick={this.handleScoreIncrement}/>
	          				</div>
	          			</div>
	          		</div>
	          		<Hint />
	          		<Item itemsToFind={this.state.itemsLevels}/>
        		</div>
        	</div>
		);
	}
}
export default Menu;