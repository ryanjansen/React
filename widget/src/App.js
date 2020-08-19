import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "bleh",
  },
  {
    title: "Die",
    content: "no",
  },
  {
    title: "Yo",
    content: "Yo",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const showAccordian = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown options={options} />;
  }
};

const showSearch = () => {
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      {showAccordian()}
      {showDropdown()}
      {showSearch()}
      {showTranslate()}
    </div>
  );
};
