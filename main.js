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
            stations: [],
            marker: [],
            icon: ".leaflet-marker-icon",
            imgSrc1: "https://cdn.pixabay.com/photo/2018/05/01/15/06/marker-3365838_960_720.png",
            imgSrc2: "https://pngimage.net/wp-content/uploads/2018/06/simbolo-de-ubicacion-png-6.png"
        },
        infos:{
            station: stations.station,
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
            button: document.getElementById("btnForm"),
            messError1: document.getElementById("messError1"),
            messError2: document.getElementById("messError2"),
            messError: ".messError"
        },
        signature: {
            signature: document.getElementById("signature")
        }
    },
    methods: {
        init: function(){
            // Création des objets 
            var objServices = Object.create(services),
                objMap = Object.create(map),
                objStations = Object.create(stations),
                objInfos = Object.create(infos),
                objForm = Object.create(form);
            

            objMap.init(
                globalMain.data.map.lat,
                globalMain.data.map.lng
            );

            objServices.getData(globalMain.data.services.url)
                .then(function(data) {
                    globalMain.data.stations.stations = data;
                    objStations.init(
                        globalMain.data.stations.stations,
                        globalMain.data.stations.marker,
                        globalMain.data.stations.icon,
                        globalMain.data.stations.imgSrc1,
                        globalMain.data.stations.imgSrc2
                    );
                    
                    objInfos.init(
                        globalMain.data.stations.stations,
                        globalMain.data.infos.stationName,
                        globalMain.data.infos.stationAdress,
                        globalMain.data.infos.dispoBike,
                        globalMain.data.infos.dispoPlace,
                        globalMain.data.infos.formInvisible,
                        globalMain.data.infos.noBikes
                    );
                    
                });

            objForm.init(
                globalMain.data.form.name,
                globalMain.data.form.firstname,
                globalMain.data.form.button,
                globalMain.data.form.messError1,
                globalMain.data.form.messError2,
                globalMain.data.form.messError
            );
        }
    }
};

$(function(){
    globalMain.methods.init();
});