import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ButtonContext from "../contexts/ButtonContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ButtonContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ButtonContext.Consumer>
    );
  }
}

export default Button;
