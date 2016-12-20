var map;

function createMap(objId, lat, long) {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById(objId), {
        center: { lat: lat, lng: long },
        scrollwheel: false,
        zoom: 4
    });

    createMarkers(map);
}

function createMarkers(map) {
    $.getJSON("http://ongbookprototipo.hol.es/api/enderecos", function (data) {
        $.each(data, function (key, val) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(val.lat, val.lng),
                map: map,
                title: val.descEnd
            });

            var infowindow = new google.maps.InfoWindow({
                content: "<h1>" + val.nome + "</h1><br/>" +
                "<p>Descrição aqui</p>"
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        });
    });
}

function mapGetStarted() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    }

    $("#overMap").animate({
        opacity: 0
    }, 500, function () {
        $("#mapContainer").animate({
            height: $(window).height()
        }, 500, function () {
            $("#overMap").remove();
            $("#mapTip").fadeIn();
            resizeGoogleMap();
        });
    });
}

function resizeGoogleMap() {
    google.maps.event.trigger(map, "resize");
}

function showPosition(position) {
    setMapPosition(position.coords.latitude, position.coords.longitude);
    animateMapZoomTo(map, 12);
}

function setMapPosition(lat, long) {
    map.setCenter(new google.maps.LatLng(lat, long));
}

function animateMapZoomTo(map, targetZoom) {
    var currentZoom = arguments[2] || map.getZoom();
    if (currentZoom != targetZoom) {
        google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
            animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
        });
        setTimeout(function () { map.setZoom(currentZoom) }, 80);
    }
}