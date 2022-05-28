import React, { Component } from "react";
import Map from "./Map";
import Profile from "./Profile";
import Login from "./Login/Login";
import Header from "./Header/Header";
import Registration from "./Registration/Registration";

const PAGES = {
  login: Login,
  map: Map,
  registration: Registration,
  profile: Profile
}

class App extends Component {

  state = { page: 'login' }

  setPage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page } = this.state;
    const Page = PAGES[page];

    return (
      <>
        <main>
          <Page setPage={this.setPage} />
        </main>
      </>
    );
  }
}

export default App;
