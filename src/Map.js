import React from 'react';
import { Header } from './Header/Header';
import mapboxgl from 'mapbox-gl';
import { PropTypes } from 'prop-types';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNrb3JvdGFldnNreSIsImEiOiJjbDNka3I5N28wNmN4M2lvZjJ3MG4wNTBrIn0.wfYd0WCYq_QNcNlGkTvl0w';

class Map extends React.Component {
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9'
        });
    }

    componentWillUnmount() {
        this.map.remove();
    }

    render() {
        const style = {
            position: 'absolute',
            top: '76px',
            bottom: 0,
            width: '100%'
        };

        const { setPage } = this.props;
        return (
            <div style={{ height: '100vh', overflow: 'hidden'}}>
                <Header setPage={setPage} />

                <div>
                    <div ref={el => this.mapContainer = el} style={style}/>;
                </div>
            </div>
        )
    }
}

Map.propTypes = {
    setPage: PropTypes.func
  }

export default Map;