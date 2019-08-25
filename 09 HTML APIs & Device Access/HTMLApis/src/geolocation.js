function get_geolocation() {
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = document.getElementById("latitude");
      const lon = document.getElementById("longitude");

      lat.innerHTML = position.coords.latitude;
      lon.innerHTML = position.coords.longitude;

      showMap(position.coords.latitude,position.coords.longitude)
    });
  } else {
    /* geolocation IS NOT available */
    alert("no geolocation available");
  }
}

function showMap(lat,lon) {
    window.open(
        "https://www.google.at/maps/@"+lat+","+lon+",21z"
    );
    
}
