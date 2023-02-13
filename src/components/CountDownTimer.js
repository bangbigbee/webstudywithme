import React, { useState, useRef, useEffect } from 'react'

class CountDownTimer extends React.Component {
constructor(props) {
	super(props);
	this.state = {
		time: new Date()
	};
}
componentDidMount() {
	this.timeId = setInterval(() => {
		this.setState({
			time: new Date()
		})
	}, 1000);
}
componentWillUnmount() {
	clearInterval(this.timeId)
  }

render(){
	// {console.log(this.state.time.getHours())}
	return(
<div className="countdown">
{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}
</div>
	)
}
}
export default CountDownTimer