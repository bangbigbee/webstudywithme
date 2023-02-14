import React, { useState, useRef, useEffect } from 'react'

class CountDownTimer extends React.Component {
// constructor(props) {
// 	super(props);
// 	this.state = {
// 		time: new Date()
// 	};
// }
state = {
	mins: '',
}
componentDidMount() {
	this.timeId = setInterval(() => {
		this.setState({
			mins: "",
		})
	}, 1000);
}
componentWillUnmount() {
	clearInterval(this.timeId)
  }

getInputTime = (event) => {
	if(event.key === 'Enter')
	this.setState({
		mins: event.target.value,
	})
}
decreaseMinute = () => {
	this.state.mins -=1;
}
render(){
	// {console.log(this.state.time.getHours())}
	return(
<form>
<input  type = "Text" placeholder='Minutes to count down' onKeyDown={(event)=>this.getInputTime(event)}></input>
<div>Hours:  </div>
<div>Minutes: {this.state.mins} </div>	
<div>Seconds: </div> 
</form>
	)
}
}
export default CountDownTimer