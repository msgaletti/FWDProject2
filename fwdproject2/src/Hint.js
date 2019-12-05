import React, {Component} from 'react';

class Hint extends Component {
	constructor(props){
	super(props);
	this.state = {
		//when clicked, all image elemnts become highlighted
		//hover/popup message taht says they will lose points for clicking on non objects
		hint: false
	};

	this.hintToggle = this.hintToggle.bind(this);
	this.handleMouseIn = this.handleMouseIn.bind(this);
}

hintToggle(e){
	this.setState({
		hint: this.state.hint = true
	});
}

handleMouseIn(e){
	
}

render() {
	var iconStyle = {
		textAlign: "center"
	}

	return (
		<div>
			<div className="hintIcon">
				<button style={iconStyle} onMouseOver = {this.handleMouseIn} onMouseOut={this.handleMouseOut} onClick={this.hintToggle}><img src = "/hintButton.png"/></button>
			</div>
		</div>
	);
}
}

export default Hint;