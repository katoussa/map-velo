var map = {
    clickBtn: function(button){
        map.button = button;
        $(map.button).on("click", function(){
            console.log("btnMap est clické!");
        });
    },

    // Initialisation de la map
    init: function(lat, lng, url, req, markers){
        map.lat = lat;
        map.lng = lng;
        map.url = url;
        map.req = req;
        map.markers = markers;
        map.veloDispo = 0;
        map.placeDispo = 0;

        //appel des méthodes
        map.makeMap();
    },

    //Méthode de création de la map
    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
        map.addMarkers();
    },

    

    //Méthode de récupération des données de l'API
    addMarkers: function(){
        map.req.open("GET", map.url);
        map.req.addEventListener("load", function () {  //vérification chargement
            if (map.req.status >= 200 && map.req.status < 400) {
                console.log(map.req.responseText);  //vérification
            } else {
                console.error(map.req.status + " " + map.req.statusText + " " + map.url);
            }
        });
        map.req.addEventListener("error", function () { //si erreur
            console.error("Erreur réseau avec l'URL " + map.url);
        });
        map.req.send(null);
    }
};