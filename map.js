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
        this.addMarkers();
    },

    //Méthode de création de la map
    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
    },

    

    //Méthode de récupération des données de l'API
    addMarkers: function(){
        map.req.open("GET", map.url);
        map.req.addEventListener("load", function () {
            
        });
        console.log(map.addMarkers);
    }
};