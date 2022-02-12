import React from "react";
import Header from './static/components/Header.js';
import TinderCards from "./static/components/TinderCards.js";
import SwipeButtons from "./static/components/SwipeButtons.js";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
      </div>
  );
}

export default App;
