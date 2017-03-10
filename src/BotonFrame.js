import React, { Component } from 'react';

class BotonFrame extends Component {
  render() {
  	let disabled = (this.props.selectedNum.length == 0);
    return (
      <div id="boton-frame">
      	<button className="btn btn-primary btn-lg" disabled={disabled}>=</button>
      </div>
    );
  }
}

export default BotonFrame;
