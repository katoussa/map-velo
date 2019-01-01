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
    },

    getStorageName: function(){
        currentName = localStorage.getItem("form.setName");
        console.log("localStorage nom = " + currentName);
        form.name.value = currentName;
    },

    
    getStorageFirstname: function(){
        currentFirstname = localStorage.getItem("form.setFirstname");
        console.log("localStorage prénom = " + currentFirstname);
        form.firstname.value = currentFirstname;
    }
};
