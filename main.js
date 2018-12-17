var globalMain = {
    data: {

        services: {
            url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=aafd8fb136e33eb56306745265f47b4f6770d3cb"
        },

        map: { //Données de la map
            button: "#btnMap",
            lat: 45.765000,
            lng: 4.850000
        },

        stations: {
            //req: new XMLHttpRequest(),
            stations: [],
            marker: [],
            icon: ".leaflet-marker-icon",
            imgSrc1: "https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png",
            imgSrc2: "https://pngimage.net/wp-content/uploads/2018/06/simbolo-de-ubicacion-png-6.png"
        },

        infos:{
            stations: [],
            stationName: document.getElementById("stationName"),
            stationAdress: document.getElementById("stationAdress"),
            dispoBike: document.getElementById("dispoBike"),
            dispoPlace: document.getElementById("dispoPlace"),
            formInvisible: "formInvisible",
            noBikes: "noBikes"
        },

        form: {
            name: document.getElementById("name"),
            firstname: document.getElementById("firstname"),
            button: document.getElementById("btnForm")
        },

        signature: {
            button: "#btnSign"
        }
    },

    methods: {
        init: function(){
            globalMain.data.stations.stations = globalMain.data.stations.stations = globalMain.data.infos.stations = [];
            //Création objet Services (getData)
            var objServices = Object.create(services);
            objServices.getData(globalMain.data.services.url,
                                globalMain.data.services.stations); 
            //Création objet map + attribution des données
            var objMap = Object.create(map);
            objMap.init(globalMain.data.map.lat,
                        globalMain.data.map.lng);
            //Création objet Stations + Markers
            var objStations = Object.create(stations);
            objStations.init(//globalMain.data.services.url,
                            //globalMain.data.stations.req,
                            globalMain.data.services.stations,
                            globalMain.data.stations.marker,
                            globalMain.data.stations.icon,
                            globalMain.data.stations.imgSrc1,
                            globalMain.data.stations.imgSrc2);
            //Création objet Infos
            var objInfos = Object.create(infos);
            objInfos.init(globalMain.data.infos.stationName,
                            globalMain.data.infos.stationAdress,
                            globalMain.data.infos.dispoBike,
                            globalMain.data.infos.dispoPlace,
                            globalMain.data.infos.formInvisible,
                            globalMain.data.infos.noBikes);
            //Création objet formulaire
            var objForm = Object.create(form);
            objForm.init(globalMain.data.form.name,
                        globalMain.data.form.firstname,
                        globalMain.data.form.button);
        }
    }
};

//$(function(){
    globalMain.methods.init();
//});