import React, {Component} from 'react';

class Item extends Component{
	constructor(props){
		super(props);
	}

	handleHide(e){
		
	}

	render(){
		var listItemStyle = {
			maxWidth: "10%",
		}
	
		return(
			<div>
				<ul>
					<li><img src="coffeecup.png" style={listItemStyle} onClick={this.handleHide}/></li>
					<li><img src="book.png" style={listItemStyle} onClick={this.handleHide}/></li>
					<li><img src="bean.png" style={listItemStyle} onClick={this.handleHide}/></li>
					<li><img src="frenchpress.png" style={listItemStyle} onClick={this.handleHide}/></li>
					<li><img src="eclaire.png" style={listItemStyle} onClick={this.handleHide}/></li>
				</ul>
			</div>
		);
	}
}

export default Item;



