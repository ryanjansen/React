import React from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutHistory from "./WorkoutHistory";

class App extends React.Component {
  state = {
    data: [],
    workoutList: [],
    selectedWorkout: "",
  };

  handleDropdownChange = (e) => {
    this.setState({ selectedWorkout: e.target.value });
  };

  onFormSubmit = (data) => {
    if (this.state.workoutList.includes(data.date)) {
      console.log("Bad date");
    } else {
      this.setState((state) => {
        const list = [...state.data, data];
        const wlist = [...state.workoutList, data.date];
        const sw = data.date;

        return {
          data: list,
          workoutList: wlist,
          selectedWorkout: sw,
        };
      });
    }
  };

  render() {
    return (
      <>
        <div className="ui container">
          <h1 className="ui header">Workout Tracker</h1>
        </div>
        <div className="ui two column grid container">
          <div className="column">
            <WorkoutForm
              onFormSubmit={this.onFormSubmit}
              workoutList={this.state.workoutList}
            />
          </div>

          <div className="column">
            <WorkoutHistory
              data={this.state.data}
              workoutList={this.state.workoutList}
              selectedWorkout={this.state.selectedWorkout}
              handleDropdownChange={this.handleDropdownChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
