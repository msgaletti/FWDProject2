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
	
		return(
			<div>
				<ul style={displayItems}> {this.props.itemsToFind.map((item, index)=> <li key={ `item-${ index }` } style={listItemStyle}><img src={item} style={imageStyle}/></li>)}</ul>
			</div>
		);
	}
}

export default Item;



