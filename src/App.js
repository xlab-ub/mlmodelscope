import "./Stopgap.scss";
import Helmet from "react-helmet";
import React, { Component } from "react";
import GlobalHeader from "./components/GlobalHeader";
import Header from "./components/Header/Header";
import GlobalFooter from "./components/GlobalFooter";
import Footer from "./components/Footer/Footer";
import Router from "./router/router";
import { Layout, BackTop } from "antd";
import { BrowserRouter as ReactRouter } from "react-router-dom";
//import { UserProvider } from "./context/UserContext";
import Error from "./components/Error";

class App extends Component {

  getSiteTitle= () => { return process.env.REACT_APP_SITE_TITLE || "MLModelscope"; }

  render() {

    console.log("App GIT Commit: " + process.env.REACT_APP_VERSION);

    return (
      <div>
        <Helmet title={this.getSiteTitle()}>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://mlmodelscope.org" />
        </Helmet>
        <BackTop />
        <ReactRouter>
          <Layout
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column",
            }}
          >
            <Header />
            <Layout.Content style={{ flex: 1, marginTop: "108px", position: "relative" }}>
              <Error>
                <Router />
              </Error>
            </Layout.Content>
            <Footer />
          </Layout>
        </ReactRouter>
      </div>
    );
  }
}

export default App;
