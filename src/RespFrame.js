import React, { Component } from 'react';

class RespFrame extends Component {
  render() {
  	let props = this.props;
  	let selectedNum = props.selectedNum.map( function (i) {
  		return (
  			<span>{i}</span>
  		)
  	});
    return (
      <div id="resp-frame">
      	<div className="well">
      		{selectedNum}
      	</div>
      </div>
    );
  }
}

export default RespFrame;
