var map = {
    
    // Initialisation de la map
    init: function(lat, lng, url, req, stations, marker, form){
        map.lat = lat;
        map.lng = lng;
        map.url = url;
        map.req = req;
        map.stations = stations;
        map.marker = marker;
        map.form = form;

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
            map.stations = JSON.parse(reponse);
            for(var i = 0; i < map.stations.length; i++){
                console.log("station" , map.stations[i]);
                map.marker = new L.marker(map.stations[i].position).addTo(map.mapIs);
                console.log(map.marker);
                map.marker.bindPopup(map.stations[i].name + '<br/>' + ("<button class='btnInfo' onclick='return map.afficheInfo(" + i + ")' ontap='return map.afficheInfo(" + i + ")'>+ d'infos</button>"));
                
                map.afficheInfo = function(i){ //affiche infos de station onClick btnInfo
                    document.querySelector(".stationName").innerHTML= "<span class='bolt'>Nom de la station: </span>" + map.stations[i].name;
                    document.querySelector(".stationAdress").innerHTML= "<span class='bolt'>Adresse: </span>" + map.stations[i].address;
                    document.querySelector(".dispoBike").innerHTML= "<span class='bolt'>Nombre de vélos disponibles: </span>" + map.stations[i].available_bikes;
                    document.querySelector(".dispoPlace").innerHTML= "<span class='bolt'>Nombre de places disponibles: </span>" + map.stations[i].available_bike_stands;
                    
                    if(map.stations[i].available_bikes > 0){ //si vélo dispos entrer nom + prénom
                        document.getElementById("formInvisible").className = "formVisible";
                        document.getElementById("noBikes").className = "noBikes";
                    }else{ //sinon affiche "pas de vélos dispos"
                        document.getElementById("noBikes").className = "noBikesVisible";
                        document.getElementById("formInvisible").className = "formInvisible";
                    };
                };

                
            };
        });
    },



};


