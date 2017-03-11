import React, { Component } from 'react';

class DoneStatus extends Component {
  render() {
    return (
      <div id="done-status">
      	<div className="well text-center">
      		<h2>{this.props.doneStatus}</h2>
      	</div>
      </div>
    );
  }
}

export default DoneStatus;
