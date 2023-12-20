let watchId;
let tracking=false;
function startTracking() {
    if ('geolocation' in navigator) {
        document.getElementById('location').innerHTML="Tracking..."
        watchId = navigator.geolocation.watchPosition(updateLocation, handleLocationError, { enableHighAccuracy: true });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}

function stopTracking() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function updateLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById('location').innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;

    // In a real-world scenario, you would send this data to a backend server for storage.
    // You might use AJAX, Fetch API, or another method to send the data to the server.
}

function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}
