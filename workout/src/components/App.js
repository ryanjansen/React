import React from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutHistory from "./WorkoutHistory";
import ls from "local-storage";

class App extends React.Component {
  state = {
    data: [],
    workoutList: [],
    selectedWorkout: "",
  };

  componentDidMount() {
    const wlist = ls.get("workoutList");
    let sw = "";

    if (wlist) {
      sw = wlist[wlist.length - 1];
    }

    this.setState({
      data: ls.get("data") || [],
      workoutList: ls.get("workoutList") || [],
      selectedWorkout: sw,
    });
  }

  handleDropdownChange = (e) => {
    this.setState({ selectedWorkout: e.target.value });
  };

  onFormSubmit = (data) => {
    if (this.state.workoutList.includes(data.date)) {
      console.log("Bad date");
    } else {
      const list = [...this.state.data, data];
      const wlist = [...this.state.workoutList, data.date];
      const sw = data.date;
      this.setState({ data: list, workoutList: wlist, selectedWorkout: sw });

      ls.set("data", list);
      ls.set("workoutList", wlist);
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
