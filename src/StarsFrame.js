import React, { Component } from 'react';

class StarsFrame extends Component {
  render() {
  	let num = this.props.numStars;
  	let stars = [];
  	for (let i = 0; i < num; i++) {
  		stars.push(<span className="glyphicon glyphicon-star"></span>);
  	}
    return (
      <div id="stars-frame">
      	<div className="well">
      		{stars}
      	</div>
      </div>
    );
  }
}

export default StarsFrame;
