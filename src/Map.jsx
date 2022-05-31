import React from 'react';
import { Header } from './Header/Header.jsx';
import mapboxgl from 'mapbox-gl';
import { PropTypes } from 'prop-types';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNrb3JvdGFldnNreSIsImEiOiJjbDNka3I5N28wNmN4M2lvZjJ3MG4wNTBrIn0.wfYd0WCYq_QNcNlGkTvl0w';
class Map extends React.Component {
    map = null;
    mapContainer = React.createRef();

    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [30.3056504, 59.9429126], // LED
            zoom: 10,
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const { setPage } = this.props;
        return (
            <div >
                <Header setPage={setPage} />
                <div className="map-wrapper">
                    <div data-testid="map" className="map" ref={el => this.mapContainer = el}/>;
                </div>
            </div>
        )
    }
}

Map.propTypes = {
    setPage: PropTypes.func
  }

export default Map;