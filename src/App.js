import React, { Component } from "react";
import Map from "./Map";
import { ProfileWithAuth } from "./Profile";
import { HomeWithAuth } from "./Home/Home";
import Registration from "./Registration/Registration";
import { withAuth } from "./AuthContext";

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  registration: (props) => <Registration {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />,
}

class App extends Component {
  state = { page: 'home' }

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
