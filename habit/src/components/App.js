import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Header, Input, List, Form } from "semantic-ui-react";

class App extends React.Component {
  state = { habits: ["Piano"], inputValue: "" };

  renderList() {
    return this.state.habits.map((habit) => {
      return (
        <List.Item key={this.state.habits.indexOf(habit)}>
          <List.Content>
            <List.Header>{habit}</List.Header>
          </List.Content>
        </List.Item>
      );
    });
  }

  addHabit = () => {
    this.setState(() => {
      const newState = [...this.state.habits, this.state.inputValue];

      return { habits: newState };
    });
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1">
            Add your <b>Habit</b>
          </Header>

          <Input
            action={{
              color: "red",
              icon: "add",
              onClick: () => this.addHabit(),
            }}
            placeholder="Type Here"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />

          <List celled size="massive">
            {this.renderList()}
          </List>
        </Container>
      </div>
    );
  }
}

export default App;
