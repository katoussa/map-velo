var services = {
    getData: function(url, stations) { //appel de l'API
        services.stations = stations;
        console.log('2 - Le service Ă  ete demandĂŠ');
        services.thisData = new Promise(function(resolve, reject) {
            $.get(url, function(dataPromise) {
                if (dataPromise) { //résolu
                    services.stations = JSON.parse(services.url);
                    console.log(services.stations);
                    return resolve(dataPromise);
                }else { //échec
                    console.log('3 - Le service n\'a pas trouve un resultat');
                    return reject(err)
                }
            })
        });
        return services.thisData;
    }
};
