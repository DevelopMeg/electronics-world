import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import RouterSections from "./RouterSections";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Header />
          <Menu />
          <main>
            <RouterSections />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
