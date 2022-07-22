import React from "react";
import Header from "./static/components/Header";
import SwipeButtons from "./static/components/SwipeButtons";
import TinderCards from "./static/components/TinderCards";

const App = () => {
  return (
    <div>
      <Header />
      <TinderCards/>
      <SwipeButtons/>
    </div>
  );
};

export default App;
