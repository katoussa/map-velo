var globalMain = {
    data: {
        map: { //Données de la map
            button: "#btnMap",
            lat: 45.765000,
            lng: 4.850000
        },

        stations: {
            url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=aafd8fb136e33eb56306745265f47b4f6770d3cb",
            req: new XMLHttpRequest(),
            station: [],
            marker: [],
            icon: ".leaflet-marker-icon",
            imgSrc1: "https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png",
            imgSrc2: "https://pngimage.net/wp-content/uploads/2018/06/simbolo-de-ubicacion-png-6.png"
        },

        infos:{
            stationName: ".stationName",
            stationAdress: ".stationAdress",
            dispoBike: ".dispoBike",
            dispoPlace: ".dispoPlace",
            formInvisible: "formInvisible",
            noBikes: "noBikes"
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
                            globalMain.data.stations.icon,
                            globalMain.data.stations.imgSrc1,
                            globalMain.data.stations.imgSrc2);
            var objInfos = Object.create(infos);
            objInfos.init(globalMain.data.infos.stationName,
                            globalMain.data.infos.stationAdress,
                            globalMain.data.infos.dispoBike,
                            globalMain.data.infos.dispoPlace,
                            globalMain.data.infos.formInvisible,
                            globalMain.data.infos.noBike);
        }
    }
};

$(function(){
    globalMain.methods.init();
});