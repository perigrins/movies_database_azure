function initializeMap() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCs3rkK5CcS_6fm9qp4hUuC2IR_MCGQMH4&callback=initMap';
    document.body.appendChild(script);

    script.onload = function () {
        var mapOptions = {
            center: { lat: 51.1, lng: 17.003 },
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    };
    /*var latlng = new google.maps.LatLng(40.716948, -74.003563);
    var options = {
        zoom: 14, center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), options);*/
}

/*window.loadGoogleMaps = function () {
    return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YAIzaSyAGLd6XKjfC7tuVE6YxazGYUrnHAuO0-AY&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};

window.initMap = function () {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 51.1, lng: 17.003 },
        zoom: 8,
    });
};*/