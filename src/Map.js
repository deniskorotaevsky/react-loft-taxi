// import { Header } from './Header';

// export function Map(props) {
//     const { setPage } = props;
//     return (
//         <div>
//             <Header setPage={setPage} />
//             <h1>Map Page</h1>
//         </div>
//     )
// }
// export default Map;

import { Header } from './Header/Header';
import React from 'react';
import { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVuaXNrb3JvdGFldnNreSIsImEiOiJjbDNka3I5N28wNmN4M2lvZjJ3MG4wNTBrIn0.wfYd0WCYq_QNcNlGkTvl0w';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: 120,
            lat: 80,
            zoom: 2
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        })
    }

    render() {
        const { setPage } = this.props;
        return (
            <div style={{ height: '100vh', overflow: 'hidden'}}>
                <Header setPage={setPage}/>
                <div>
                    <div ref={el => this.mapContainer = el} style={{ width: '100%', height: '92vh'}} />
                </div>
            </div>
        )
    }
}

export default Map;