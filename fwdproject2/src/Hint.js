import React, {Component} from 'react';

class Hint extends Component {
	constructor(props){
		super(props);
		this.state = {
			//when clicked, all image elemnts become highlighted
			//hover/popup message taht says they will lose points for clicking on non objects
			hint: false,
			hover: false,
			glowHover: false
		};

		this.hintToggle = this.hintToggle.bind(this);
	}

	hintToggle(e){
		this.setState({
			hint: this.state.hint = true
		});
	}

	handleMouseIn() {
    	this.setState({ hover: true })
  	}
  
  	handleMouseOut() {
    	this.setState({ hover: false })
  	}

  	handleMouseInGlow() {
  		if(this.state.hint){
    		this.setState({ glowHover: true });
    	} else{
    		this.setState({glowHover: false});
    	}
  	}
  
  	handleMouseOutGlow() {
    	this.setState({ glowHover: false })
  	}

	render() {
		var iconStyle = {
			textAlign: "center",
			marginTop: "2%",
			marginBottom: "1%"
		}
		const tooltipStyle = {
	    	display: this.state.hover ? 'inline' : 'none',
	    	backgroundColor: "rgba(0, 0, 0, .75)",
	    	color: "white",
	    	width: "20%",
	    	borderRadius: "1%"
	    }
	    var listStyle={
	      width: "60%",
	      margin: "0",
	      paddingLeft: "0",
	      listStyle: "none",
	      marginTop: "1%",
	      padding: "2%"
	    }
	    var hintStyle={
	    	width: "40%",
	    	margin: "0 auto"
	    }
	    const glowStyle = this.state.glowHover ? {backgroundColor: 'yellow'} : {};
	    const hintStatus = this.props.hint;
    
		return (
			<div style={hintStyle}>
				
				<div className="hintIcon">
					<button style={iconStyle} onClick={this.hintToggle} value={hintStatus}><img src="hintButton.png" onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}/></button>
				</div>
        		<div>
          			<div style={tooltipStyle}>Turning on hints will cause all hidden items to glow on hover and wrong clicks will decrease score</div>
        		</div>
			</div>
		);
	}
}

export default Hint;