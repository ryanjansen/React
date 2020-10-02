import React from "react";

class WorkoutHistory extends React.Component {
  renderDate(date) {
    let d = date.split("-");
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let displayDate = `${d[2]} ${months[parseInt(d[1]) - 1]} ${d[0]}`;
    return displayDate;
  }

  renderOneWorkout() {
    let w = this.props.data.find((e) => e.date === this.props.selectedWorkout);

    if (w) {
      if (w.workout === "A") {
        return (
          <div key={w.date}>
            <h3 className="ui header">{this.renderDate(w.date)}</h3>
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
          </div>
        );
      } else if (w.workout === "B") {
        return (
          <div key={w.date}>
            <h3 className="ui header">{this.renderDate(w.date)}</h3>
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
          </div>
        );
      }
    }
  }

  renderDropdown() {
    if (this.props.workoutList.length !== 0) {
      return (
        <>
          <div className="ui form">
            <div className="field">
              <label>Choose Workout</label>
              <select
                className="ui dropdown"
                onChange={this.props.handleDropdownChange}
                value={this.props.selectedWorkout}
              >
                {this.props.workoutList.map((w) => {
                  return (
                    <option key={w} value={w}>
                      {this.renderDate(w)}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="ui divider"></div>
        </>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderDropdown()}
        {this.renderOneWorkout()}
      </div>
    );
  }
}

export default WorkoutHistory;
