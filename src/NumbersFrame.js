import React, { Component } from 'react';

class NumbersFrame extends Component {
  render() {
  	let numbers = [];
  	let className = '';
  	let selectedNum =  this.props.selectedNum;

  	for (let i = 1; i <= 9; i++) {
  		className = 'number selected-' + (selectedNum.indexOf(i)>=0);
  		numbers.push(<div className={className}>{i}</div>);
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
