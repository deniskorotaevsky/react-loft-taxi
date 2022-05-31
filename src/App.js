import React from "react";
import Map from "./Map";
import Profile from "./Profile";
import { HomeWithAuth } from "./Home/Home";
import Registration from "./Registration/Registration";
import { withAuth } from "./AuthContext";

const PAGES = {
  home: (props) => <HomeWithAuth {...props} />,
  map: (props) => <Map {...props} />,
  registration: (props) => <Registration {...props} />,
  profile: (props) => <Profile {...props} />,
}

class App extends React.Component {
  state = { page: "home" };

  setPage = (page) => {
    this.setState({ page })
  };

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




// import React from "react";
// import Map from "./Map";
// import Profile from "./Profile";
// import { HomeWithAuth } from "./Home/Home";
// import Registration from "./Registration/Registration";
// import { withAuth } from "./AuthContext";

// const PAGES = {
//   home: (props) => <HomeWithAuth {...props} />,
//   map: (props) => <Map {...props} />,
//   registration: (props) => <Registration {...props} />,
//   profile: (props) => <Profile {...props} />,
// }

// class App extends React.Component {
//   state = { page: 'home' }

//   setPage = (page) => {
//     this.setState({ page })
//   }

//   render() {
//     const { page } = this.state;
//     const Page = PAGES[page];

//     return (
//       <>
//         <main>
//           <Page setPage={this.setPage} />
//         </main>
//       </>
//     );
//   }
// }

// export default withAuth(App);
