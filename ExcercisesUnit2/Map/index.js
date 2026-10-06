var lat,long;

function mostrarPosicion(pos){
    console.log(pos);
    lat = pos.coords.latitude;
    long = pos.coords.longitude;

    console.log("Latitud:", lat);
    console.log("Longitud:", long);
    console.log("Precisión:", pos.coords.accuracy, "metros");

    var map = L.map('map').setView([lat, long], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

navigator.geolocation.getCurrentPosition(
    mostrarPosicion,
    error => console.log("Error de ubicación:", error.message),
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 15000
    }
);
