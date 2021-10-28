import React, { Component } from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import DetailTabPanel from "./components/detail-tabpanel/DetailTabPanel";
NODE_ENV=node App.js;

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoPanel></InfoPanel>     
        <DetailTabPanel></DetailTabPanel>
      </div>
    );
  }
}

export default App;
