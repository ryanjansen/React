import React from "react";
import gate from "../gate.mp3";
import fatima from "../fatima.mp3";

class Timer extends React.Component {
  state = { time: 2, timerRunning: false, mode: "pomo" };

  componentDidMount() {
    this.alarm = new Audio(fatima);
  }

  displayTime() {
    let minutes = Math.floor(this.state.time / 60);
    let seconds = Math.floor(this.state.time % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return <h1 className="timer-text">{`${minutes}:${seconds}`}</h1>;
  }

  startTimer = () => {
    if (!this.state.timerRunning) {
      this.setState({ timerRunning: true });
      this.timer = setInterval(() => {
        const newTime = this.state.time - 1;
        if (newTime >= 0) {
          this.setState({ time: newTime });
        } else {
          this.alarm.play();
          alert("Time's Up!");
          this.alarm.pause();
          this.resetTimer();
        }
      }, 1000);
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState({
      time: this.state.mode === "pomo" ? 1500 : 300,
      timerRunning: false,
    });
  };

  timerSelect = (mode) => {
    this.setState({ time: mode === "pomo" ? 1500 : 300, mode });
  };

  render() {
    return (
      <div className="timer">
        <div className="timer-select">
          <button className="pomo-btn" onClick={() => this.timerSelect("pomo")}>
            25 min
          </button>
          <button
            className="break-btn"
            onClick={() => this.timerSelect("break")}
          >
            5 min
          </button>
        </div>
        {this.displayTime()}
        <button className="start-btn" onClick={this.startTimer}>
          Start
        </button>
        <button className="stop-btn" onClick={this.stopTimer}>
          Stop
        </button>
        <button className="reset-btn" onClick={this.resetTimer}>
          Reset
        </button>
      </div>
    );
  }
}

export default Timer;
