import { PropTypes } from 'prop-types';


import { Header } from './Header/Header';

export function Profile(props) {
    const { setPage } = props;
    console.log(setPage);
    console.log(typeof(setPage));
    return (
        <div>
            <Header setPage={setPage} />
            <h1>Profile</h1>
        </div>
    )
}

Profile.propTypes = {
    setPage:  PropTypes.func
}
export default Profile;

