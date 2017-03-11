import React, { Component } from 'react';

class DoneStatus extends Component {
  render() {
    return (
      <div id="done-status">
      	<div className="well text-center">
      		<h2>{this.props.doneStatus}</h2>
          <button className="btn btn-default btn-lg" onClick={this.props.resetGame}>Jugar de nuevo...</button>
      	</div>
      </div>
    );
  }
}

export default DoneStatus;
