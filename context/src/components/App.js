import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ButtonContext from "../contexts/ButtonContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
  state = { language: "english" };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />

          <ButtonContext.Provider value="yellow">
            <UserCreate />
          </ButtonContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
