import React, { Component } from 'react';

class NumbersFrame extends Component {
  render() {
  	let numbers = [];
  	let className = '';
  	let selectedNum = this.props.selectedNum;
  	let clickNumber = this.props.clickNumber;
  	let usedNumbers = this.props.usedNumbers;

  	for (let i = 1; i <= 9; i++) {
  		className = 'number selected-' + (selectedNum.indexOf(i)>=0);
  		className += ' used-' + (usedNumbers.indexOf(i)>=0);
  		numbers.push(<div className={className} onClick={clickNumber.bind(null, i)}>{i}</div>);
  	}
    return (
      <div id="numbers-frame">
      	<div className="well">
      		{numbers}
      	</div>
      </div>
    );
  }
}

export default NumbersFrame;
