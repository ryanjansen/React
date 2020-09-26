import React from "react";
import WorkoutForm from "./WorkoutForm";

class App extends React.Component {
  state = {
    data: [
      {
        benchReps: "4",
        benchWeight: "4",
        date: "26/09/2020",
        rowReps: "4",
        rowWeight: "4",
        squatReps: "4",
        squatWeight: "4",
        workout: "A",
      },
    ],
  };

  onFormSubmit = (data) => {
    console.log(data);
    this.setState((state) => {
      const list = [...state.data, data];

      return {
        data: list,
      };
    });

    console.log(this.state);
  };

  renderOneWorkout(w) {
    if (w.workout === "A") {
      return (
        <div key={w.date}>
          <h3 className="ui header">{w.date}</h3>
          <table className="ui celled fixed table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Weight</th>
                <th>AMRAP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Exercise">Bench Press</td>
                <td data-label="Weight">{w.benchWeight}</td>
                <td data-label="AMRAP">{w.benchReps}</td>
              </tr>
              <tr>
                <td data-label="Exercise">Barbell Row</td>
                <td data-label="Weight">{w.rowWeight}</td>
                <td data-label="AMRAP">{w.rowReps}</td>
              </tr>
              <tr>
                <td data-label="Exercise">Squat</td>
                <td data-label="Weight">{w.squatWeight}</td>
                <td data-label="AMRAP">{w.squatReps}</td>
              </tr>
            </tbody>
          </table>

          <div className="ui divider"></div>
        </div>
      );
    } else if (w.workout === "B") {
      return (
        <div key={w.date}>
          <h3 className="ui header">{w.date}</h3>
          <table className="ui celled fixed table">
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Weight</th>
                <th>AMRAP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Exercise">Overhead Press</td>
                <td data-label="Weight">{w.overheadWeight}</td>
                <td data-label="AMRAP">{w.overheadReps}</td>
              </tr>
              <tr>
                <td data-label="Exercise">Pullups</td>
                <td data-label="Weight">{w.pullupWeight}</td>
                <td data-label="AMRAP">{w.pullupReps}</td>
              </tr>
              <tr>
                <td data-label="Exercise">Deadlift</td>
                <td data-label="Weight">{w.deadliftWeight}</td>
                <td data-label="AMRAP">{w.deadliftReps}</td>
              </tr>
            </tbody>
          </table>

          <div className="ui divider"></div>
        </div>
      );
    }
  }

  renderAllWorkouts() {
    return (
      <>
        {this.state.data.map((w) => {
          return this.renderOneWorkout(w);
        })}
      </>
    );
  }

  render() {
    return (
      <div className="ui container">
        <h1 className="ui header">Workout Tracker</h1>
        <WorkoutForm onFormSubmit={this.onFormSubmit} />
        <div className="ui divider"></div>

        {this.renderAllWorkouts()}
      </div>
    );
  }
}

export default App;
