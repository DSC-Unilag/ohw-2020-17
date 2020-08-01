import React, { useState, useEffect } from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      timeLeft: null,
    };
  }

  startTimer = (event, timeLeft) => {
    event.preventDefault();
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      console.log("2:inside setInterval");
      var timeLeft = this.state.timeLeft - 1;
      if (timeLeft <= 0) clearInterval(timer);
      this.setState({ timeLeft });
    }, 1000);
    console.log("1:after setInterval");
    this.setState({ timer, timeLeft });
  };
  render() {
    return (
      <div className="timer">
        <TimerInfo timeLeft={this.state.timeLeft} />
        <TimerButton time="10" startTimer={this.startTimer} />
        <TimerButton time="5" startTimer={this.startTimer} />
        <TimerButton time="45" startTimer={this.startTimer} />
      </div>
    );
  }
}

// function Timer() {
//   const [timer, setTimer] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(null);

//   const startTimer = (event, inputTime) => {
//     event.preventDefault();
//     clearInterval(timer);
//     let newtimer = setInterval(() => {
//       var newTimeLeft = timeLeft - 1;
//       if (newTimeLeft <= 0) clearInterval(newtimer);
//       setTimeLeft(newTimeLeft);
//       console.log("2:inside setInterval", newTimeLeft);
//     }, 1000);
//     console.log("1:after setInterval", timeLeft);
//     setTimeLeft(inputTime);
//     setTimer(newtimer);
//   };
//   useEffect(() => {
//     alert("eff3ct" + timeLeft);
//   }, [timeLeft]);

//   return (
//     <div className="timer">
//       <TimerInfo timeLeft={timeLeft} />
//       <TimerButton time="10" startTimer={startTimer} />
//       <TimerButton time="5" startTimer={startTimer} />
//       <TimerButton time="45" startTimer={startTimer} />
//     </div>
//   );
// }

function TimerInfo({ timeLeft }) {
  if (timeLeft == null || timeLeft <= 0) return <div></div>;
  return <h1>Time Left is {timeLeft}</h1>;
}

function TimerButton({ time, startTimer }) {
  return (
    <button className="btn btn-primary" onClick={(e) => startTimer(e, time)}>
      {time} seconds
    </button>
  );
}
export default Timer;
