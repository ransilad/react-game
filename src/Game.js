import React, { Component } from 'react';
import StarsFrame from './StarsFrame';
import BotonFrame from './BotonFrame';
import RespFrame from './RespFrame';
import NumbersFrame from './NumbersFrame';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedNum:[]};
		this.clickNumber = this.clickNumber.bind(this);
	};
	clickNumber(clicketNumber){
		if (this.state.selectedNum.indexOf(clicketNumber) < 0) {
			this.setState(
				{selectedNum: this.state.selectedNum.concat(clicketNumber)}
			);
		}
	};
  	render() {
	    return (
	      <div id="game">
	      	<h2>Play nine</h2>
	      	<hr />
	      	<div className="clearfix">
			  	<StarsFrame />
			  	<BotonFrame />
			  	<RespFrame selectedNum={this.state.selectedNum}/>
	      	</div>
	      	<NumbersFrame selectedNum={this.state.selectedNum} clickNumber={this.clickNumber}/>
	      </div>
	    );
  	}
}

export default Game;
