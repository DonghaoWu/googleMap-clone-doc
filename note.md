1. mapbox, create a account
2. on the web
3. mapbox cdn
4. index.html
5. paste cdn in header
6. add the map script to body
7. delete origin map style 
```html
<style>
    body{
        margin:0;
    }
    #map{
        height:100vh;
        width:100vw;
    }
</style>
```

8. script.js

```html
<script src='script.js' defer></script>
```

9. script.js

```js
mapboxgl.accessToken = ;

navigator.geolacation.getCurrentPosition(successLoaction, errorLocation,{
    enableHighAccuracy:true
});

function successLocation(){
    console.log(position);
    setupMap([position.coords.longtitude,position.coords.latitude]);
}

function errorLocation(){
    setupMap([-2.24, 53.48]);
}

function setupMap(center){
    var map = new mapboxgl.Map({
        center:cemter,
        zoom:15
    })
}

var map = new mapboxgl.Map();
```

10. mapbox documentation, search navigation

```js
const nav = new mapboxgl.NavigationControl();
map.addControl(nav);
```

search direction

```js


const directions = new MapboxDirections({
    accessToken:mapboxgl.accessToken;
});

map.addControl(directions, 'top-left');
```
- copy the cdn in live example
```html

```

