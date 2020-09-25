import React from "react";
import WorkoutForm from "./WorkoutForm";

class App extends React.Component {
  state = { data: {} };

  onFormSubmit = (data) => {
    console.log(data);
    this.setState({ data });
  };

  render() {
    return (
      <div className="ui container">
        <WorkoutForm onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
