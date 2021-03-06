import React, { Component } from 'react';

class BotonFrame extends Component {
  render() {
  	let disabled = (this.props.selectedNum.length === 0);
  	let button = '';
  	let correct = this.props.correct;

  	switch(correct){
  		case true:
  			button = (
				<button className="btn btn-success btn-lg" onClick={this.props.aceptAnswer}>
					<span className="glyphicon glyphicon-ok"></span>
				</button>
  			);
  			break;
  		case false:
  			button = (
				<button className="btn btn-danger btn-lg">
					<span className="glyphicon glyphicon-remove"></span>
				</button>
  			);
  			break;
  		default:
  			disabled = (this.props.selectedNum.length === 0);
  			button = (
				<button className="btn btn-primary btn-lg" disabled={disabled} onClick={this.props.checkAnswer}>=</button>
  			);
  	}
    return (
      <div id="boton-frame">
      	{button}
      	<br />
      	<button className="btn btn-warning btn-xs" onClick={this.props.reloadNumStars}><span className="glyphicon glyphicon-refresh"></span></button>
      </div>
    );
  }
}

export default BotonFrame;
