var globalMain = {
    data: {
        map: { //Données de la map
            button: "#btnMap",
            lat: 45.750000,
            lng: 4.850000
        },

        stations: {
            url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=aafd8fb136e33eb56306745265f47b4f6770d3cb",
            req: new XMLHttpRequest(),
            station: [],
            marker: []
        },

        signature: {
            button: "#btnSign"
        }
    },

    methods: {
        init: function(){
            //Création objet map + attribution des données
            var objMap = Object.create(map);
            objMap.init(globalMain.data.map.lat,
                        globalMain.data.map.lng);
            var objStations = Object.create(stations);
            objStations.init(globalMain.data.stations.url,
                            globalMain.data.stations.req,
                            globalMain.data.stations.station,
                            globalMain.data.stations.marker);
        }
    }
};

$(function(){
    globalMain.methods.init();
});