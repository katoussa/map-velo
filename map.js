var map = {
    clickBtn: function(button){
        map.button = button;
        $(map.button).on("click", function(){
            console.log("btnMap est clické!");
        });
    },

    // Initialisation de la map
    init: function(lat, lng, url, req, markersCluster){
        map.lat = lat;
        map.lng = lng;
        map.url = url;
        map.req = req;
        map.markersCluster = markersCluster;

        //appel des méthodes
        map.makeMap();
        map.addMarkers();
    },

    //Méthode de création de la map
    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
        console.log(map.mapIs);
    },

    
    //Méthode de récupération des données de l'API
    ajaxGet: function(url, callback){
        map.url = url;
        map.req.open("GET", map.url);
        map.req.addEventListener("load", function () {  //vérification chargement
            if (map.req.status >= 200 && map.req.status < 400) {
                callback(map.req.responseText);  //vérification
            } else {
                console.error(map.req.status + " " + map.req.statusText + " " + map.url);
            }
        });
        map.req.addEventListener("error", function () { //si erreur
            console.error("Erreur réseau avec l'URL " + map.url);
        });
        map.req.send(null);
    },

    //Méthode de création des markers
    addMarkers: function(){
        map.ajaxGet(map.url, function (reponse) {
            // Transforme la réponse en tableau d'objets JavaScript
            var stations = JSON.parse(reponse);
                stations.forEach(function(stations){
                    var marker= new L.marker(stations.position).addTo(map.mapIs);
                    marker.bindPopup(stations.name);
                });
            console.log(stations);
            //map.markersCluster.addLayer(marker);

            }); 
        //map.addLayer(markersCluster);
    }
};

