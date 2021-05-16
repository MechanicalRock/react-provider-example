import React from "react";
import "./App.css";

import CountProvider from "./countProvider";

import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import CountInput from "./CountInput";

function App() {
  return (
    <CountProvider>
      <CountDisplay />
      <CountButtons />
      <CountInput />
    </CountProvider>
  );
}

export default App;
