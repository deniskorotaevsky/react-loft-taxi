import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withAuth } from './AuthContext';
import { Header } from './Header/Header';

export class Profile extends Component {

    unauthenticate = () => {
        this.props.logOut();
        this.props.navigate('home');
    }
    render() {
        const { setPage } = this.props;

        return (

            <div>
                <Header setPage={setPage} />
                <h1>Profile</h1>
                <p>Profile <button onClick={this.unauthenticate}> Log out</button></p>
            </div>

        )
    }
}

Profile.propTypes = {
    setPage: PropTypes.func
}
export const ProfileWithAuth = withAuth(Profile);
