import React, { Component } from 'react';
import StarsFrame from './StarsFrame';
import BotonFrame from './BotonFrame';
import RespFrame from './RespFrame';
import NumbersFrame from './NumbersFrame';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {selectedNum:[3,6]};
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
	      	<NumbersFrame selectedNum={this.state.selectedNum}/>
	      </div>
	    );
  	}
}

export default Game;
