var stations = {
    init: function(/*req,*/ stations, marker, stations, icon, imgSrc1, imgSrc2) {
        //stations.req = req;
        stations.stations = stations;
        stations.marker = marker;
        stations.icon = icon;
        stations.imgSrc1 = imgSrc1;
        stations.imgSrc2 = imgSrc2;
        
        stations.ajaxGet();
    },

    //Méthode de récupération des données de l'API
    /*ajaxGet: function(url, callback){
        stations.req.open("GET", url);
        stations.req.addEventListener("load", function () {  //vérification chargement
            if (stations.req.status >= 200 && stations.req.status < 400) {
                callback(stations.req.responseText);  //vérification
            } else {
                console.error(stations.req.status + " " + stations.req.statusText + " " + stations.url);
            }
        });
        stations.req.addEventListener("error", function () { //si erreur
            console.error("Erreur réseau avec l'URL " + url);
        });
        stations.req.send(null);
    },*/
    
    //Méthode de création des markers
    ajaxGet: function (stations) {
        // Transforme la réponse en tableau d'objets JavaScript
        stations.blueIcon = L.icon({iconUrl: 'img/iconblue.png',
                                    iconSize:     [20, 50], // size of the icon
                                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                                });
        stations.redIcon = L.icon({iconUrl: 'img/iconred.png',
                                    iconSize:     [20, 50], // size of the icon
                                    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                                    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
                                });
        for(var i = 0; i < stations.length; i++){
            console.log("station" , stations.stations[i]);
            if(stations.stations[i].available_bikes > 0){
                stations.marker = new L.marker(stations.stations[i].position, {icon: stations.blueIcon}).addTo(map.mapIs);
            }else{
                stations.marker = new L.marker(stations.stations[i].position, {icon: stations.redIcon}).addTo(map.mapIs);
            };
                
            console.log(stations.marker);
            stations.marker.bindPopup(stations.stations[i].name + '<br/>' + ("<button class='btnInfo' onclick='return infos.afficheInfo(" + i + ")' ontap='return infos.afficheInfo(" + i + ")'>+ d'infos</button>"));
                
        };
    }
    

};