mapboxgl.accessToken = 'pk.eyJ1IjoiZG9uZ2hhbyIsImEiOiJjamdzZzBhZm8wZ3hkMnFxOWdndm4zcXFvIn0.lIbs9i7j31tbOfR_EpTC2g';

const successLocation = (position) => {
    setupMap([position.coords.longitude, position.coords.latitude]);
}

const errorLocation = () => {
    setupMap([-122.419416, 37.774929]);
}

const setupMap = (center) => {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 9
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
});


