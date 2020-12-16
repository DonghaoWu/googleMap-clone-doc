mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uZ2hhbyIsImEiOiJjamdzZzBhZm8wZ3hkMnFxOWdndm4zcXFvIn0.lIbs9i7j31tbOfR_EpTC2g';

const defaultCenter = [-74.005, 40.7127];
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: defaultCenter,
    zoom: 9
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav);

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
});

map.addControl(directions, 'top-left');

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);