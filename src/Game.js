import React, { Component } from 'react';
import StarsFrame from './StarsFrame';
import BotonFrame from './BotonFrame';
import RespFrame from './RespFrame';
import NumbersFrame from './NumbersFrame';
import DoneStatus from './DoneStatus';

class Game extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numStars: Math.floor(Math.random()*9) + 1, 
			selectedNum:[], 
			correct: null,
			usedNumbers: [],
			doneStatus: null
		};
		this.clickNumber = this.clickNumber.bind(this);
		this.unClickNumber = this.unClickNumber.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);
		this.aceptAnswer = this.aceptAnswer.bind(this);
		this.sumOfSelectedNumbers = this.sumOfSelectedNumbers.bind(this);
		this.reloadNumStars = this.reloadNumStars.bind(this);
	};
	clickNumber(clicketNumber){
		if (this.state.selectedNum.indexOf(clicketNumber) < 0) {
			this.setState(
				{selectedNum: this.state.selectedNum.concat(clicketNumber), correct: null}
			);
		}
	};
	unClickNumber(clicketNumber){
		let selectedNum = this.state.selectedNum;
		let indexOfNumber = selectedNum.indexOf(clicketNumber);

		selectedNum.splice(indexOfNumber, 1);
		this.setState(
			{selectedNum: selectedNum, correct: null}
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
	aceptAnswer(){
		let usedNumbers = this.state.usedNumbers.concat(this.state.selectedNum);
		this.setState({selectedNum: [], usedNumbers: usedNumbers, correct: null, numStars: Math.floor(Math.random()*9) + 1});
	};
	reloadNumStars(){
		this.setState({numStars: Math.floor(Math.random()*9) + 1, correct: null, selectedNum: []});
	};
  	render() {
  		let selectedNum = this.state.selectedNum;
  		let numStars = this.state.numStars;
  		let correct = this.state.correct;
  		let usedNumbers = this.state.usedNumbers;
  		let doneStatus = this.state.doneStatus;
  		let bottomFrame;

  		if (doneStatus) {
  			bottomFrame = <DoneStatus doneStatus={doneStatus}/>;
  		} else {
  			bottomFrame = <NumbersFrame selectedNum={selectedNum} clickNumber={this.clickNumber} usedNumbers={usedNumbers}/>;
  		}

	    return (
	      <div id="game">
	      	<h2>Play nine</h2>
	      	<hr />
	      	<div className="clearfix">
			  	<StarsFrame numStars={numStars}/>
			  	<BotonFrame selectedNum={selectedNum} numStars={numStars} correct={correct} checkAnswer={this.checkAnswer} aceptAnswer={this.aceptAnswer} reloadNumStars={this.reloadNumStars}/>
			  	<RespFrame selectedNum={selectedNum} unClickNumber={this.unClickNumber}/>
	      	</div>
	      	{bottomFrame}
	      </div>
	    );
  	}
}

export default Game;
