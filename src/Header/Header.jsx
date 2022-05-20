import logo from '../loft-black.png';
import s from './Header.module.css';

export function Header(props) {
    const { setPage } = props;

    return (
        <header>
            <div className={s.Header_logo}>
                <img src={logo} alt="logo" />
            </div>
            <nav className={s.Header_nav}>
                <button onClick={() => setPage('map')}>Map</button>
                <button onClick={() => setPage('profile')}>Profile</button>
                <button onClick={() => setPage('login')}>logout</button>
            </nav>
        </header>
    )
}

export default Header;