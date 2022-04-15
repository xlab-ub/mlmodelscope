import "./Stopgap.scss";
import React, { Component } from "react";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";
import { BrowserRouter as ReactRouter } from "react-router-dom";

class App extends Component {

  getSiteTitle= () => { return process.env.REACT_APP_SITE_TITLE || "MLModelscope"; }

  render() {

    console.log("App GIT Commit: " + process.env.REACT_APP_VERSION);

    return (
      <div>
        <ReactRouter>
          <Router />
          <Footer />
        </ReactRouter>
      </div>
    );
  }
}

export default App;
