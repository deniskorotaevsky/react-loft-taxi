import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Home}  from "./components/Home/Home";
import { Map } from "./components/Map/Map";
import "./App.css";
import PropTypes from 'prop-types';
import Registration from "./components/Registration/Registration";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

const PAGES = {
  home: (props) => <Home {...props} />,
  map: (props) => <Map {...props} />,
  profile: (props) => <Profile {...props}/>,
  registration: (props) => <Registration {...props} />,
};

function App() {

  const [state, setState] = React.useState({
    page: "home"
  });

  const { isLoggedIn } = useContext(AuthContext);

  const navigateTo =(page) => {
    if (isLoggedIn) {
      setState({ page: page });
    } else {
      setState({ page: 'home'});
    }
  };

    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <a
                  onClick={() => {
                    navigateTo("home")
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigateTo("map")
                  }}
                >
                  Map
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    navigateTo("profile")
                  }}
                >
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main data-testid="container">
          <section>{PAGES[state.page]({ navigate: navigateTo })}</section>
        </main>
      </>
    );
  }

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;