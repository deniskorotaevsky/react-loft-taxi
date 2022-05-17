import { Header } from './Header';

export function Map(props) {
    const { setPage } = props;

    return(
        <div>
            <Header setPage={setPage} />
            <h1>Map Page</h1>
        </div>
    )
}
export default Map;