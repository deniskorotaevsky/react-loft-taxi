import { PropTypes } from 'prop-types';
import { Header } from './Header/Header.jsx';
import { withAuth } from "./AuthContext";

const Profile = (props) => {
    const { setPage } = props;

    return (
        <div>
            <Header setPage={setPage} />
            <h1>Profile</h1>
        </div>
    )
}

Profile.propTypes = {
    setPage: PropTypes.func
}
export const ProfileWithAuth = withAuth(Profile);
