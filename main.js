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
            marker: [],
            stationName: ".stationName",
            stationAdress: ".stationAdress",
            dispoBike: ".dispoBike",
            dispoPlace: ".dispoPlace",
            formInvisible: "formInvisible",
            noBikes: "noBikes",
            icon: ".leaflet-marker-icon",
            imgSrc1: "https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png",
            imgSrc2: "https://pngimage.net/wp-content/uploads/2018/06/simbolo-de-ubicacion-png-6.png"
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
                            globalMain.data.stations.marker,
                            globalMain.data.stations.stationName,
                            globalMain.data.stations.stationAdress,
                            globalMain.data.stations.dispoBike,
                            globalMain.data.stations.dispoPlace,
                            globalMain.data.stations.formInvisible,
                            globalMain.data.stations.noBikes,
                            globalMain.data.stations.icon,
                            globalMain.data.stations.imgSrc1,
                            globalMain.data.stations.imgSrc2);
        }
    }
};

$(function(){
    globalMain.methods.init();
});