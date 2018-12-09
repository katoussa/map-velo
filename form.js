var form = {
    init: function(name, firstname, button){
        form.name = name;
        form.firstname = firstname;
        form.button = button;

        form.testRegExp();
    },

    testRegExp: function(){
        form.regName = false;
        form.regFirstname= false;
        form.name.addEventListener("blur", function() {
            if((form.name.textContent = /(a-z) (\-)/ ) && (form.name.length > 3)){
                form.regName = true;
                console.log("regName est true");
            }else{
                form.regName = false;
                console.log("regName est false");
            };
        });

        form.firstname.addEventListener("blur", function() {
            if((form.firstname.textContent = /(a-z) (\-)/ ) && (form.firstname.length > 3)){
                form.regFirstname = true;
                console.log("regFirstame est true");
            }else{
                form.regFirstname = false;
                console.log("regFirstname est false");
            };
        });

        
        form.button.on("click", function(){
            if(form.regName === true){
                form.name.value = "Vous devez entrer votre nom";
            };

            if(form.regFirstname === true){
                form.firstname.value = "Vous devez entrer votre prénom";
            };

            console.log(form.regName + "et" + form.regFirstname);

            if(form.regName === true && form.regFirstname === true){
                form.signature.className = "signatureVisible";
            }else{
                form.signature.className = "signature";
            };
        });
        
    }
};