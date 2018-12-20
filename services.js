var services = {
    getData: function(url) {
        var thisData = new Promise(function(resolve, reject) {
            $.get(url, function(dataPromise) {
                if (dataPromise) {
                    return resolve(dataPromise);
                }else {
                    return reject(err)
                }
            })
        });
        return thisData;
    }
};
