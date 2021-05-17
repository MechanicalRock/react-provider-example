import React from "react";
import "./App.css";

import CountProvider from "./countProvider";

import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import CountInput from "./CountInput";
import Header from "./Header";

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Header/>
      <CountProvider>
        <CountDisplay />
        <CountButtons />
        <CountInput />
      </CountProvider>
    </div>
  );
}

export default App;
