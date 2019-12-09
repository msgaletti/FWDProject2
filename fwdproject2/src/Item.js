import React, {Component} from 'react';

class Item extends Component{
	constructor(props){
		super(props);
	}

	render(){
		var imageStyle = {
			maxWidth: "20%",
		}
		var listItemStyle ={
			display: "inline",
			listStyle: "none",
			padding: "5%"
		}
		var displayItems ={
			margin: "0 auto",
			textAlign: "center",
		}
	
		return(
			<div>
				<ul style={displayItems}> {this.props.itemsToFind.map((item, index)=> <li key={ `item-${ index }` } style={listItemStyle}><img src={item} style={imageStyle}/></li>)}</ul>
			</div>
		);
	}
}

export default Item;



