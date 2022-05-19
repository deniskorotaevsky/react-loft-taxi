import { Header } from './Header';

export function Profile(props) {
    const { setPage } = props;
    return (
        <div>
            <Header setPage={setPage} />
            <h1>Profile</h1>
        </div>
    )
}
export default Profile;

