var services = {
    getData: function(url, station) { //appel de l'API
        services.url = url;
        services.station = station;
        console.log('2 - Le service a été demandé');
        services.thisData = new Promise(function(resolve, reject) {
            $.get(url, function(dataPromise) {
                if (dataPromise) { //résolu
                    services.station = JSON.parse(services.url);
                    console.log(services.station);
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
