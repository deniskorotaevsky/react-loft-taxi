export function Header(props) {
    const { setPage } = props;

    return (
        <header>
            <nav>
                <button onClick={() => setPage('map')}>Map</button>
                <button onClick={() => setPage('profile')}>Profile</button>
                <button onClick={() => setPage('login')}>logout</button>
            </nav>
        </header>
    )
}

export default Header;