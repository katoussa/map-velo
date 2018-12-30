var map = {
    
    // Initialisation de la map
    init: function(lat, lng){
        map.lat = lat;
        map.lng = lng;

        //appel des méthodes
        map.makeMap();
    },

    //Méthode de création de la map
    makeMap: function(){
        map.mapIs = L.map('map').setView([map.lat, map.lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
                    minZoom: 1,
                    maxZoom: 20
                }).addTo(map.mapIs);
        console.log(map.mapIs);
    }

};


