import React, { Component } from "react";
import Map from "./Map";
import { Profile } from "./Profile";
import { Login } from "./Login/Login";
import Registration from "./Registration/Registration";
import { withAuth } from "./AuthContext";

const PAGES = {
  // login: Login,
  login: (props) => <Login {...props} />,
  map: (props) => <Map {...props} />,
  registration: (props) => <Registration {...props} />,
  profile: (props) => < Profile {...props} />
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

export default withAuth(App);
