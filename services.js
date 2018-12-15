var services = {
    getData: function(url) {
        console.log('2 - Le service Ă  ete demandĂŠ');
        var thisData = new Promise(function(resolve, reject) {
            $.get(url, function(dataPromise) {
                if (dataPromise) {
                    console.log('3 - Le service a trouve un rĂŠsultat');
                    return resolve(dataPromise);
                }else {
                    console.log('3 - Le service n\'a pas trouve un resultat');
                    return reject(err)
                }
            })
        });
        return thisData;
    }
};