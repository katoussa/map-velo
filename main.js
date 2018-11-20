var globalMain = {
    data: {
        map: { //Données de la map
            button: "#btnMap",
            lat: 45.750000,
            lng: 4.850000,
            url: "https://api.jcdecaux.com/vls/v1/stations?contract={contract_name}&apiKey={aafd8fb136e33eb56306745265f47b4f6770d3cb}",
            req: new XMLHttpRequest()
        },

        stations: {
            button: "#btnStations"
        },

        form: {
            button: "#btnForm"
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
                        globalMain.data.map.lng,
                        globalMain.data.map.url,
                        globalMain.data.map.req);
        }
    }
};

$(function(){
    globalMain.methods.init();
});