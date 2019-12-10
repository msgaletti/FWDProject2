import React, {Component} from 'react';
import Hint from './Hint';
import Item from './Item'


class Menu extends Component{
	constructor(props){
		super(props);
		this.state = {
			score: 0,
			level: 1,
			counter: 5,
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
			ypos5: 0,
			glowHover: false,
			userSelected: "image"
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
			this.setState({imageFound1: this.state.imageFound1=false});
			this.setState({imageFound2: this.state.imageFound2=false});
			this.setState({imageFound3: this.state.imageFound3=false});
			this.setState({imageFound4: this.state.imageFound4=false});
			this.setState({imageFound5: this.state.imageFound5=false});
			this.setState({itemsLevels: this.state.itemsLevels = ["bear.png", "car.png", "lego.png", "minion.png", "train.png"]});
		} else if(this.state.level == 3){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/costco.png"});
			this.setState({imageFound1: this.state.imageFound1=false});
			this.setState({imageFound2: this.state.imageFound2=false});
			this.setState({imageFound3: this.state.imageFound3=false});
			this.setState({imageFound4: this.state.imageFound4=false});
			this.setState({imageFound5: this.state.imageFound5=false});
			this.setState({itemsLevels: this.state.itemsLevels = ["syrup.png", "chips.png", "soap.png", "toiletpaper.png", "computer.png"]});
		} else if(this.state.level == 4){
			this.setState({level: this.state.level +1});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/garden.png"});
			this.setState({imageFound1: this.state.imageFound1=false});
			this.setState({imageFound2: this.state.imageFound2=false});
			this.setState({imageFound3: this.state.imageFound3=false});
			this.setState({imageFound4: this.state.imageFound4=false});
			this.setState({imageFound5: this.state.imageFound5=false});
			this.setState({itemsLevels: this.state.itemsLevels = ["strawberry.png", "carrot.png", "gnome.png", "vase.png", "shovel.png"]});
		} else{
			this.setState({level: this.state.level = 1});
			this.setState({score: this.state.score =0});
			this.setState({backgroundImageSet: this.state.backgroundImageSet = "/coffeeshop.png"});
			this.setState({itemsLevels: this.state.itemsLevels =["coffeecup.png", "bean.png", "book.png", "eclaire.png", "frenchpress.png"]});
		}
	}


	handleScoreIncrement(e){
		this.setState({userSelected: this.state.userSelected = e.target.id});
		this.setState({score: this.state.score+10});
		if(this.state.counter >1){
			this.setState({counter: this.state.counter-1});
			if(this.state.userSelected == this.state.itemsLevels[0]){
				this.setState({imageFound1: this.state.imageFound1 =true});
			} else if(this.state.userSelected == this.state.itemsLevels[1]){
				this.setState({imageFound2: this.state.imageFound2 =true});
			} else if(this.state.userSelected == this.state.itemsLevels[2]){
				this.setState({imageFound3: this.state.imageFound3 =true});
			} else if(this.state.userSelected == this.state.itemsLevels[3]){
				this.setState({imageFound4: this.state.imageFound4 =true});
			} else if(this.state.userSelected == this.state.itemsLevels[4]){
				this.setState({imageFound5: this.state.imageFound5 =true});
			}
		} else{
			this.setState({counter: this.state.counter = 5});
			this.handleLevelChange();
			
		}
		e.preventDefault();
	}

	handleMouseInGlow() {
    	this.setState({ glowHover: true });
  	}
  
  	handleMouseOutGlow() {
    	this.setState({ glowHover: false })
  	}

	componentDidMount(){
		this.setState({xpos1: this.state.xpos1 = Math.random()*25});
		this.setState({xpos2: this.state.xpos2 = Math.random()*25});
		this.setState({xpos3: this.state.xpos3 = Math.random()*25});
		this.setState({xpos4: this.state.xpos4 = Math.random()*25});
		this.setState({xpos5: this.state.xpos5 = Math.random()*25});
		this.setState({ypos1: this.state.ypos1 = Math.random()*25});
		this.setState({ypos2: this.state.ypos2 = Math.random()*25});
		this.setState({ypos3: this.state.ypos3 = Math.random()*25});
		this.setState({ypos4: this.state.ypos4 = Math.random()*25});
		this.setState({ypos5: this.state.ypos5 = Math.random()*25});
	}

//generate all random numbers and then call again if doing a play again
	render(){
		var headerStyle = {
			fontFamily: "sans-serif",
			align: "center",
			textAlign: "center",
			fontSize: 48,
			color: "#3D1600",
			fontWeight: "100"
		}
    	var backgroundDesign={
    		backgroundImage: "url(" + this.state.backgroundImageSet + ")",
    		backgroundSize: "cover",
    		backgroundPosition: "center",
    		justifyContent: "center",
    		width: "40vw",
    		height: "40vw",
    		backgroundRepeat: "no-repeat",
    		margin: "0 auto"
    	}
    	var findItemStyle1 ={
    		maxWidth: "3%",
    		position: "relative",
    		left: this.state.xpos1.toString()+ "vw",
    		top: this.state.ypos1.toString() + "vw",
    	}
    	var findItemStyle2 ={
    		maxWidth: "3%",
    		position: "relative",
    		left: this.state.xpos2.toString() + "vw",
    		top: this.state.ypos2.toString() + "vw"
    	}
    	var findItemStyle3 = {
    		maxWidth: "3%",
    		position: "relative",
    		left: this.state.xpos3.toString() + "vw",
    		top: this.state.ypos3.toString() + "vw"
    	}
    	var findItemStyle4 = {
    		maxWidth: "3%",
    		position: "relative",
    		left: this.state.xpos4.toString() + "vw",
    		top: this.state.ypos4.toString() + "vw"
    	}
    	var findItemStyle5 = {
			maxWidth: "3%",
    		position: "relative",
    		left: this.state.xpos5.toString() + "vw",
    		top: this.state.ypos5.toString() + "vw"
    	}
    	var centerStyle = {
    		justifyContent: "center",
    	}
    	var horizontalStyle = {
			display: "inline",
			listStyle: "none",
			padding: "2%",
			fontSize: 18,
			color: "#3D1600",
			fontWeight: "bold"
    	}
    	var centerListStyle ={
    		margin: "0 auto",
			textAlign: "center",
			padding: "0"
    	}
    	var rusticBackground = {
    		backgroundImage: "url('/rustic.png')",
    		backgroundSize: "cover",
    		backgroundPosition: "center",
    		justifyContent: "center",
    		paddingBottom: "2%",
    		paddingTop: "1%"

    	}
    	const imageHide1 = this.state.imageFound1 ? {display: "none"} : {};
    	const imageHide2 = this.state.imageFound2 ? {display: "none"} : {};
    	const imageHide3 = this.state.imageFound3 ? {display: "none"} : {};
    	const imageHide4 = this.state.imageFound4 ? {display: "none"} : {};
    	const imageHide5 = this.state.imageFound5 ? {display: "none"} : {};

    	const glowStyle = this.state.glowHover ? {boxShadow: '7px 7px 20px yellow'} : {};

		return(
			<div style = {rusticBackground}>
        		<div className = "findMeHeader">
        			<div className = "header">
          				<h1 style={headerStyle}> FIND ME! </h1>
        			</div>
        			<div>
        				<ul style={centerListStyle}>
        					<li style={horizontalStyle}>Your score: {this.state.score}</li>
        					<li style={horizontalStyle}>Your level: {this.state.level}</li>
        				</ul>
        			</div>
        			<div style={centerListStyle}>
        				<Hint itemsToGlow={this.state.itemsLevels} style={horizontalStyle}/>
        			</div>
        			<Item itemsToFind={this.state.itemsLevels}/>
          			<div style={centerStyle}>
	          			<div style= {Object.assign({}, glowStyle, backgroundDesign)}>
	          					<div>
			          				<div style ={imageHide1} >
				          				<img src={this.state.itemsLevels[0]} id={this.state.itemsLevels[0]} style={findItemStyle1} onMouseEnter={this.handleMouseInGlow.bind(this)} onMouseLeave={this.handleMouseOutGlow.bind(this)} onClick={this.handleScoreIncrement}/>
				          			</div>
				          		</div>
				          		<div>
				          			<div style={imageHide2}>
				          				<img src={this.state.itemsLevels[1]} id={this.state.itemsLevels[1]} style={findItemStyle2} onMouseEnter={this.handleMouseInGlow.bind(this)} onMouseLeave={this.handleMouseOutGlow.bind(this)} onClick={this.handleScoreIncrement}/>
				          			</div>
				          		</div>
				          		<div>
				          			<div style={imageHide3}>
				          				<img src={this.state.itemsLevels[2]} id={this.state.itemsLevels[2]} style={findItemStyle3} onMouseEnter={this.handleMouseInGlow.bind(this)} onMouseLeave={this.handleMouseOutGlow.bind(this)} onClick={this.handleScoreIncrement}/>
				          			</div>
				          		</div>
				          		<div>
				          			<div style={imageHide4}>
				          				<img src={this.state.itemsLevels[3]} id={this.state.itemsLevels[3]} style={findItemStyle4} onMouseEnter={this.handleMouseInGlow.bind(this)} onMouseLeave={this.handleMouseOutGlow.bind(this)} onClick={this.handleScoreIncrement}/>
				          			</div>
				          		</div>
				          		<div>
				          			<div style={imageHide5}>
				          				<img src={this.state.itemsLevels[4]} id={this.state.itemsLevels[4]} style={findItemStyle5} onMouseEnter={this.handleMouseInGlow.bind(this)} onMouseLeave={this.handleMouseOutGlow.bind(this)} onClick={this.handleScoreIncrement}/>
			          				</div>
			          			</div>
	          			</div>
	          		</div>
	          		
        		</div>
        	</div>
		);
	}
}
export default Menu;