import React, { Component } from "react";
import InfoPanel from "../src/components/info-panel/InfoPanel";
import DetailTabPanel from "../src/components/detail-tabpanel/DetailTabPanel";
// NODE_ENV = production node app.js;

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
