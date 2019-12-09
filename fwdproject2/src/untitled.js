
if(e.target.value == this.state.itemsLevels[0]){
	this.setState({imageFound1: this.state.imageFound1 =true});
} else if(e.target.value == this.state.itemsLevels[1]){
	this.setState({imageFound2: this.state.imageFound2 =true});
} else if(e.target.value == this.state.itemsLevels[2]){
	this.setState({imageFound3: this.state.imageFound3 =true});
} else if(e.target.value == this.state.itemsLevels[3]){
	this.setState({imageFound4: this.state.imageFound4 =true});
} else if(e.target.value == this.state.itemsLevels[4]){
	this.setState({imageFound5: this.state.imageFound5 =true});
}