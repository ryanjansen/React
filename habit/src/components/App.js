import React from "react";
import "semantic-ui-css/semantic.min.css";
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
