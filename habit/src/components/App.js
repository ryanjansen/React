import React from "react";
import "semantic-ui-css/semantic.min.css";
<<<<<<< HEAD
import { Container, Header, Input, List, Grid } from "semantic-ui-react";

class App extends React.Component {
  state = { habits: ["Piano"], inputValue: "" };

  renderList() {
    return this.state.habits.map((habit, i) => {
      return (
        <List.Item key={i}>
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

      return { habits: newState, inputValue: "" };
    });
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

=======
import {
  Header,
  Container,
  Input,
  List,
  Segment,
  Image,
} from "semantic-ui-react";
import { ReactComponent as YCLogo } from "./yc.svg";
import { ReactComponent as HeinekenLogo } from "./heineken.svg";
import { ReactComponent as ElsevierLogo } from "./elsevier.svg";

class App extends React.Component {
>>>>>>> a6790a646b1a8d90f778fbebba282a6d3aa89685
  render() {
    return (
      <Container
        style={{
          marginTop: "2em",
        }}
      >
        <Segment
          style={{
            backgroundImage: 'url("../../public/assets/Hero Background.jpg")',
          }}
        >
          <Header as="h3">Heavyweight</Header>
          <Header
            style={{ fontSize: "2.5rem" }}
            as="h1"
            content="Is design growing your product?"
          />
          <p style={{ fontSize: "1.25rem" }}>
            Create an interface that drives value by teaming up with our studio
            to rethink and design it.
          </p>
          <Input
            action={{
              color: "blue",
              icon: "arrow right",
              content: "Get in touch",
              labelPosition: "right",
            }}
            placeholder="Your email address"
          />

          <div style={{ marginTop: "2em" }}>
            <p>Clients backed by</p>
            <List horizontal size="tiny">
              <List.Item>
                <YCLogo />
              </List.Item>
              <List.Item>
                <HeinekenLogo />
              </List.Item>
              <List.Item>
                <ElsevierLogo />
              </List.Item>
            </List>
          </div>
        </Segment>
      </Container>
    );
  }
}

export default App;
