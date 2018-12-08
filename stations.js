var stations = {
    init: function(url, req,station, marker, stationName, stationAdress, dispoBike, dispoPlace, formInvisible, noBikes) {
        stations.url = url;
        stations.req = req;
        stations.station = station;
        stations.marker = marker;
        stations.stationName = stationName;
        stations.stationAdress = stationAdress;
        stations.dispoBike = dispoBike;
        stations.dispoPlace = dispoPlace;
        stations.formInvisible = formInvisible;
        stations.noBikes = noBikes;
        
        stations.addMarkers();
    },

    //Méthode de récupération des données de l'API
    ajaxGet: function(url, callback){
        stations.req.open("GET", stations.url);
        stations.req.addEventListener("load", function () {  //vérification chargement
            if (stations.req.status >= 200 && stations.req.status < 400) {
                callback(stations.req.responseText);  //vérification
            } else {
                console.error(stations.req.status + " " + stations.req.statusText + " " + stations.url);
            }
        });
        stations.req.addEventListener("error", function () { //si erreur
            console.error("Erreur réseau avec l'URL " + stations.url);
        });
        stations.req.send(null);
    },
    
    //Méthode de création des markers
    addMarkers: function(){
        stations.ajaxGet(stations.url, function (reponse) {
            // Transforme la réponse en tableau d'objets JavaScript
            stations.stations = JSON.parse(reponse);
            for(var i = 0; i < stations.stations.length; i++){
                console.log("station" , stations.stations[i]);
                stations.marker = new L.marker(stations.stations[i].position).addTo(map.mapIs);
                console.log(stations.marker);
                stations.marker.bindPopup(stations.stations[i].name + '<br/>' + ("<button class='btnInfo' onclick='return stations.afficheInfo(" + i + ")' ontap='return stations.afficheInfo(" + i + ")'>+ d'infos</button>"));
                
                stations.afficheInfo = function(i){ //affiche infos de station onClick btnInfo
                    document.querySelector(stations.stationName).innerHTML= "<span class='bolt'>Nom de la station: </span>" + stations.stations[i].name;
                    document.querySelector(stations.stationAdress).innerHTML= "<span class='bolt'>Adresse: </span>" + stations.stations[i].address;
                    document.querySelector(stations.dispoBike).innerHTML= "<span class='bolt'>Nombre de vélos disponibles: </span>" + stations.stations[i].available_bikes;
                    document.querySelector(stations.dispoPlace).innerHTML= "<span class='bolt'>Nombre de places disponibles: </span>" + stations.stations[i].available_bike_stands;
                    
                    if(stations.stations[i].available_bikes > 0){ //si vélo dispos entrer nom + prénom
                        document.getElementById(stations.formInvisible).className = "formVisible";
                        document.getElementById(stations.noBikes).className = "noBikes";
                    }else{ //sinon affiche "pas de vélos dispos"
                        document.getElementById(stations.noBikes).className = "noBikesVisible";
                        document.getElementById(stations.formInvisible).className = "formInvisible";
                    };
                };

                
            };
        });
    }
    

};