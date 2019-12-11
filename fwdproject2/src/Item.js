import React, {Component} from 'react';

class Item extends Component{
	constructor(props){
		super(props);
	}


	render(){
		var imageStyle = {
			maxWidth: "10%",
		}
		var listItemStyle ={
			display: "inline",
			listStyle: "none",
			padding: "5%",
			maxWidth: "40%"
		}
		var displayItems ={
			margin: "0 auto",
			textAlign: "center",
			marginBottom: "0.5%",
			maxWidth: "50%",
			padding: "0"
		}
		const itemHide1 = this.props.found1 ? {display: "none"} : {};
    	const itemHide2 = this.props.found2 ? {display: "none"} : {};
    	const itemHide3 = this.props.found3 ? {display: "none"} : {};
    	const itemHide4 = this.props.found4 ? {display: "none"} : {};
    	const itemHide5 = this.props.found5 ? {display: "none"} : {};

	//website for accessing key in array not list: rohan-paul.github.io/%0A2017-08-21-react-component-passing-props-to-children.md/javascript/2017/08/22/Passing_Props_between_React_Components/
		return(
			<div>
				<ul style={displayItems}> 
					<li style={listItemStyle}>
						<img src = {this.props.itemsToFind[0]} style={Object.assign({},itemHide1, imageStyle)}/>
					</li>
					<li style={listItemStyle}>
						<img src = {this.props.itemsToFind[1]} style={Object.assign({},itemHide2, imageStyle)}/>
					</li>
					<li style={listItemStyle}>
						<img src = {this.props.itemsToFind[2]} style={Object.assign({},itemHide3, imageStyle)}/>
					</li>
					<li style={listItemStyle}>
						<img src = {this.props.itemsToFind[3]} style={Object.assign({},itemHide4, imageStyle)}/>
					</li>
					<li style={listItemStyle}>
						<img src = {this.props.itemsToFind[4]} style={Object.assign({},itemHide5, imageStyle)}/>
					</li>
				</ul>
			</div>
		);
	}
}

export default Item;



