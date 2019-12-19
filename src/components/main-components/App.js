import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import RouterSections from "./RouterSections";
import "../../sass/style.scss";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Menu />
          <main className="main">
            <RouterSections />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
