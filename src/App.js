import React from "react";
import { ProfileWithAuth } from "./Profile";
import { Home}  from "./Home/Home";
import { Map } from "./Map";
import "./App.css";
import PropTypes from 'prop-types';
import Registration from "./Registration/Registration";
import { withAuth } from "./AuthContext";

const PAGES = {
  home: (props) => <Home {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <ProfileWithAuth {...props}/>,
  registration: (props) => <Registration {...props} />,
};

class App extends React.Component {
  state = { currentPage: "home" };

  navigateTo =(page) => {
    if (this.props.isLoggedIn) {
      this.setState({ currentPage: page });
    } else {
      this.setState({ currentPage: 'home'});
    }
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <a
                  onClick={() => {
                    this.navigateTo("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{PAGES[this.state.currentPage]({ navigate: this.navigateTo })}</section>
        </main>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
