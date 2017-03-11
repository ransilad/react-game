import React, { Component } from 'react';
import StarsFrame from './StarsFrame';
import BotonFrame from './BotonFrame';
import RespFrame from './RespFrame';
import NumbersFrame from './NumbersFrame';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {numStars: Math.floor(Math.random()*9) + 1, selectedNum:[], correct: null};
		this.clickNumber = this.clickNumber.bind(this);
		this.unClickNumber = this.unClickNumber.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.sumOfSelectedNumbers = this.sumOfSelectedNumbers.bind(this);
	};
	clickNumber(clicketNumber){
		if (this.state.selectedNum.indexOf(clicketNumber) < 0) {
			this.setState(
				{selectedNum: this.state.selectedNum.concat(clicketNumber)}
			);
		}
	};
	unClickNumber(clicketNumber){
		let selectedNum = this.state.selectedNum;
		let indexOfNumber = selectedNum.indexOf(clicketNumber);

		selectedNum.splice(indexOfNumber, 1);
		this.setState(
			{selectedNum: selectedNum}
		);
	};
	sumOfSelectedNumbers(){
		return this.state.selectedNum.reduce(function(p,n) {
			return p+n;
		},0);
	};
	checkAnswer(){
		let correct = (this.state.numStars === this.sumOfSelectedNumbers());
		this.setState({correct: correct});
	};
  	render() {
  		let selectedNum = this.state.selectedNum;
  		let numStars = this.state.numStars;
  		let correct = this.state.correct;
	    return (
	      <div id="game">
	      	<h2>Play nine</h2>
	      	<hr />
	      	<div className="clearfix">
			  	<StarsFrame numStars={numStars}/>
			  	<BotonFrame selectedNum={selectedNum} numStars={numStars} correct={correct} checkAnswer={this.checkAnswer}/>
			  	<RespFrame selectedNum={selectedNum} unClickNumber={this.unClickNumber}/>
	      	</div>
	      	<NumbersFrame selectedNum={selectedNum} clickNumber={this.clickNumber}/>
	      </div>
	    );
  	}
}

export default Game;
